import { APICaller } from "../../apiCaller";

export class AcademicAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    getAcademicCall() {
        const baseURL: string = this.apiCaller.getStatsCall();
        return `${baseURL}/academicas`;
    }

    executeGetInscritos(token: string) {
        const route = this.getAcademicCall() + "/cantidad-inscritos";
        return fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetAsistencias(token: string) {
        const route = this.getAcademicCall() + "/asistencias-alumno";
        return fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetDistribucionGenero(token: string) {
        const route = this.getAcademicCall() + "/distribucion-genero";
        return fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetAprobadosPorMateria(token: string) {
        const route = this.getAcademicCall() + "/porcentaje-aprobados";
        return fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetPorcentajeAsistencia(token: string) {
        const route = this.getAcademicCall() + "/porcentaje-asistencia";
        return fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetPromedioPorMateria(token: string) {
        const route = this.getAcademicCall() + "/promedio-materia";
        return fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

}