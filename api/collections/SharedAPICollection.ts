import { APICaller } from "../apiCaller";

export class SharedAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    getAlumnosCall() {
        const route = this.apiCaller.getCall();
        return `${route}/alumnos`;
    }

    executeGetAlumnos(token: string) {
        const route = this.getAlumnosCall();
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetHorariosAlumno(token: string, boleta: string) {
        const route = this.apiCaller.getCall() + "/horarios/alumno/" + boleta;
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetHorariosProfesor(token: string, id: string) {
        const route = this.apiCaller.getCall() + "/horarios/profesor/" + id;
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetCiclos(token: string) {
        const route = this.apiCaller.getCall() + "/ciclos";
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetTutores(token: string) {
        const route = this.apiCaller.getCall() + "/tutores";
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetSEPOMEXColonias(token: string, codigoPostal: string) {
        const route = this.apiCaller.getCall() + "/sepomex/colonias/" + codigoPostal;
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetSEPOMEXEstados(token: string) {
        const route = this.apiCaller.getCall() + "/sepomex/estados";
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetSEPOMEXPaises(token: string) {
        const route = this.apiCaller.getCall() + "/sepomex/paises";
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }
}