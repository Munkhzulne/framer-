import { useFirestoreCollection, useUser } from '.';
import _ from 'lodash';

export const useTemplates = () => {
    let { user, loading: loadingUser } = useUser();
    let { uid } = user || {};
    let { data, loading: loadingData } = useFirestoreCollection(
        'accounts',
        uid,
        'templates'
    );
    const loading = loadingData || loadingUser;
    const isEmpty = !loading && _.isEmpty(data);
    return {
        data,
        isEmpty,
        loading,
    };
};
