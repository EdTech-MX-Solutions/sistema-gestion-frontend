import { APICaller } from "../apiCaller";

export class TutoresAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    executeGetRevisarAcciones(token: string) {
        const route = this.apiCaller.getTutorCall() + "/revisar-acciones";
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
