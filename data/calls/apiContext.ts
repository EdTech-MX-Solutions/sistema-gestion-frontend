export class APIContext {
    baseURL: string;
    version: string;

    constructor() {
        this.baseURL = "https://sige-octavio-paz.azurewebsites.net";
        this.version = "v1";
    }

    getBaseURL() {
        return `${this.baseURL}/${this.version}`;
    }
}
