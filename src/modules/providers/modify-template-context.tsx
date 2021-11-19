import React, { createContext, useContext, useState } from 'react';
import {
    useFirestoreCollection,
    useFirestoreDocument,
    useUser,
} from '../../firebase';
import _ from 'lodash';
import { useQueryParam } from 'use-query-params';

export const ModifyTemplateContext = createContext({
    templateData: null,
    templates: [],
    assets: [],
    removeTemplate: async (data) => {},
    updateTemplateDoc: async (data) => {},
    createTemplate: async (data) => {
        return { id: null };
    },
    createAsset: async (data) => {},
    updateTemplate: async (id, data) => {},
    templateId: null,
    loading: true,
});

export const ModifyTemplateContextProvider = ({ children }) => {
    let [templateId] = useQueryParam<string, string>('id');
    let { user } = useUser();
    let { uid: userId } = user || { uid: '' };

    const {
        data: templateData,
        updateRecord: updateTemplateDoc,
        loading,
    } = useFirestoreDocument<any>(
        'accounts',
        userId,
        'templates',
        templateId
    );
    
    const {
        data: assets,
        createRecord: createAsset,
    } = useFirestoreCollection('accounts', userId, 'assets');


    const {
        data: templates,
        createRecord: createTemplate,
        createRecordWithId: createRecordWithId,
        updateRecord: updateTemplate,
        deleteRecord: removeTemplate,
        loading: connectionsLoading,
    } = useFirestoreCollection('accounts', userId, 'templates');

    return (
        <ModifyTemplateContext.Provider
            value={{
                templateData,
                templates,
                updateTemplateDoc,
                createTemplate,
                updateTemplate,
                removeTemplate,
                createAsset,
                templateId,
                loading,
                assets
            }}
        >
            {children}
        </ModifyTemplateContext.Provider>
    );
};

export const useModifyTemplate = () => {
    return useContext(ModifyTemplateContext);
};
