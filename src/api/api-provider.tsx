import React, { createContext } from 'react';
import { uuidv4 } from '../components';
import { useFirestoreCollection, useUser } from '../firebase';

export const DEFAULT = {
    route: process.env.GATSBY_API_ROUTE
        ? process.env.GATSBY_API_ROUTE
        : process.env.GATSBY_ENV === 'production'
        ? ''
        : '',

    saveReplicationDraft: async () => '',
};
export const ApiContext = createContext(DEFAULT);
export const ApiProvider = ({ children }) => {
    let { user } = useUser();
    let { uid } = user || {};
    let { createRecordWithId } = useFirestoreCollection(
        'accounts',
        uid,
        'replications'
    );
    const saveReplicationDraft = async () => {
        let uuid = uuidv4();
        createRecordWithId(
            {
                status: 'Draft',
                replicationMode: 'Snapshot',
            },
            uuid
        );

        return uuid;
    };

    return (
        <ApiContext.Provider
            value={{
                ...DEFAULT,
                saveReplicationDraft,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};
