import { APIContext } from './apiContext';

export class APICaller {
    apiContext: APIContext;

    constructor() {
        this.apiContext = new APIContext();
    }

    getTutorCall() {
        const baseURL: string = this.getCall();
        return `${baseURL}/tutores`;
    }
    getProfesorCall() {
        const baseURL: string = this.getCall();
        return `${baseURL}/profesores`;
    }
    getDirectivoCall() {
        const baseURL: string = this.getCall();
        return `${baseURL}/directivo`;
    }
    getAuthCall() {
        const baseURL: string = this.getCall();
        return `${baseURL}/auth`;
    }
    getCall() {
        return this.apiContext.getBaseURL();
    }
}