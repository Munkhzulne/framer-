import axios from 'axios';
import { useUser } from '../firebase';

export const useTemplateApi = () => {
    const route = "http://localhost:3000"
    let { user } = useUser();
    let { uid } = user || {};

    const processTemplateVideo = (data: any) => {
        return axios.post(`${route}/template`, data);
    };

    const getTemplateVideo = () => {
        return axios({
            method: 'get',
            url: `${route}/getTemplate`,
            responseType: 'blob',
            headers: { 'Access-Control-Allow-Origin': '*' }
            })
        // return axios.get(`${route}/getTemplate`);
    };


    return {
        processTemplateVideo,
        getTemplateVideo
    };
};
