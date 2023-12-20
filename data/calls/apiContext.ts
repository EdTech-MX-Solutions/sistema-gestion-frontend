export class APIContext {
    baseURL: string;
    version: string;

    constructor() {
        this.baseURL = "https://sige-octavio-paz-frhfgsc9dwf5aja3.z03.azurefd.net";
        this.version = "v1";
    }

    getBaseURL() {
        return `${this.baseURL}/${this.version}`;
    }
}
