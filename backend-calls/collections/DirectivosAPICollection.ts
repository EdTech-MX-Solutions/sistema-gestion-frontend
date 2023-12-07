import { APICaller } from "../apiCaller";

export class DirectivosAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }
    
    executeGetProfessors(token : string){
        const route = this.apiCaller.getProfesorCall();
        return fetch(route, {
            method : "GET",
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });
    } 
    
    executeGetGrupos(token: string) {
        const route = this.apiCaller.getGruposCall();
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }
}