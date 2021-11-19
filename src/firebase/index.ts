import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { user as user$ } from 'rxfire/auth';
import { collectionData, docData } from 'rxfire/firestore';
import { tap } from 'rxjs/operators';

let config = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};
interface FirebaseType {
    app?: firebase.app.App;
    auth?: firebase.auth.Auth;
    firestore?: firebase.firestore.Firestore;
    firebase: any;
    storage?: firebase.storage.Reference;
}
export const useFirebase = () => {
    let [state, setState] = useState<FirebaseType>({
        firebase,
    });
    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            app = firebase.initializeApp(config);
        }
        let auth = firebase.auth(app);
        let firestore = firebase.firestore(app);
        let storage = firebase.storage().ref();;
        setState({ app, auth, firebase, firestore, storage });
    }, []);
    return state;
};

export const useUser = () => {
    let [state, setState] = useState<{
        loading: boolean;
        user: any;
    }>({
        loading: true,
        user: null,
    });
    let { auth } = useFirebase();
    useEffect(() => {
        if (!auth) {
            return;
        }
        let subscription = user$(auth).subscribe((user) => {
            setState({ user, loading: false });
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [auth]);
    return state;
};

export const useFirestoreCollection = (...location: string[]) => {
    const path = location.join('/');

    const [state, setState] = useState({
        loading: true,
        data: [],
    });
    useEffect(() => {
        if (_.size(_.compact(location)) != _.size(location)) {
            return;
        }
        setState({
            loading: true,
            data: [],
        });
        let query = firebase.firestore().collection(`${path}`);

        let subscription = collectionData(query, 'id').subscribe((data) => {
            setState({
                loading: false,
                data,
            });
        });
        return () => subscription.unsubscribe();
    }, [path]);
    const createRecordWithId = async (data, id: string) => {
        return await firebase
            .firestore()
            .collection(`${path}`)
            .doc(id)
            .set({
                ...data,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
    };
    const createRecord = async (data: any, batch?) => {
        if (batch) {
            let ref = firebase.firestore().collection(`${path}`).doc();
            batch.set(ref, {
                ...data,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            return batch;
        }
        return await firebase
            .firestore()
            .collection(`${path}`)
            .add({
                ...data,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
    };

    const updateRecord = async (id, data, batch?) => {
        if (batch) {
            let ref = firebase.firestore().doc(`${path}/${id}`);
            batch.update(
                ref,
                {
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    ...data,
                },
                {
                    merge: true,
                }
            );
            return batch;
        }
        return firebase
            .firestore()
            .doc(`${path}/${id}`)
            .set(
                {
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    ...data,
                },
                {
                    merge: true,
                }
            );
    };

    const deleteRecord = (id: string, batch?) => {
        if (batch) {
            let ref = firebase.firestore().doc(`${path}/${id}`);
            batch.delete(ref);
            return batch;
        }
        return firebase.firestore().doc(`${path}/${id}`).delete();
    };

    return {
        createRecord,
        updateRecord,
        deleteRecord,
        createRecordWithId,
        ...state,
    };
};

export const useFirestoreDocument = <T>(...location: string[]) => {
    const path = location.join('/');
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (_.size(_.compact(location)) != _.size(location)) {
            return;
        }
        setLoading(true);
        let query = firebase.firestore().doc(`${path}`);
        let subscription = docData<T>(query, 'id')
            .pipe(tap(() => setLoading(false)))
            .subscribe((data) => setData(data));
        return () => subscription.unsubscribe();
    }, [path]);

    const updateRecord = async (data: T) => {
        return firebase
            .firestore()
            .doc(`${path}`)
            .set(
                {
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    ...data,
                },
                {
                    merge: true,
                }
            );
    };

    const deleteRecord = () => {
        return firebase.firestore().doc(`${path}`).delete();
    };

    return {
        updateRecord,
        deleteRecord,
        data,
        loading,
    };
};
