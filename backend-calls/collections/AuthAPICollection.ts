import { APICaller } from "../apiCaller";

export class AuthAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    executeGetGoogleAutentication(accessToken: string) {
        const route = this.apiCaller.getAuthCall();
        return fetch(`${route}/login/google?accessToken=${accessToken}`, {
            method: "GET",
        });
    }

    executeGetTokenUnico(accessToken: string) {
        const route = this.apiCaller.getAuthCall();
        return fetch(`${route}/login/token-unico?accessToken=${accessToken}`, {
            method: "GET",
        });
    }
}