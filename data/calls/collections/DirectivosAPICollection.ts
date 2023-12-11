import InterfacePeriodo from "@/data/interfaces/periodo";
import { APICaller } from "../apiCaller";

export class DirectivosAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    executeGetAlumnosPendientesReiscripcion(token : string){
        const route = this.apiCaller.getCall() + `/reinscripciones/`;
        return fetch (route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetProfessors(token: string) {
        const route = this.apiCaller.getProfesorCall();
        return fetch(route, {
            method: "GET",
            headers: {
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

    executePostCycle(token: string) {
        const route = this.apiCaller.getCall() + `/ciclos`;
        return fetch(route, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executePostPeriodo(token: string, periodo: InterfacePeriodo) {
        const route = this.apiCaller.getCall() + `/ciclos`;
        return fetch(route, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(periodo),
        });
        
    }

    executeEndCycle(token: string) {
        const route = this.apiCaller.getCall() + `/ciclos`;
        return fetch(route, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                finalizado: true,
                periodoReinscripciones: false,
                periodoCalificaciones: false,
                periodoPreinscripciones: false,
            }),
        }); 
    }
}
