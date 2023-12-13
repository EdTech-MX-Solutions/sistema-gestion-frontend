import InterfacePeriodo from "@/data/interfaces/periodo";
import { APICaller } from "../apiCaller";
import InterfaceMateria from "@/data/interfaces/materia";
import InterfaceProfessor from "@/data/interfaces/professor";

export class DirectivosAPICollection {
    apiCaller: APICaller;

    constructor() {
        this.apiCaller = new APICaller();
    }

    executeGetAlumnosPendientesReiscripcion(token : string){
        const route = this.apiCaller.getCall() + `/reinscripciones`;
        return fetch (route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetPadecimientosMedicos(token : string){
        const route = this.apiCaller.getCall() + `/datos-medicos/condiciones-medicas`;
        return fetch (route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetPreguntasHereditarias(token : string){
        const route = this.apiCaller.getCall() + `/datos-medicos/preguntas-hereditarias`;
        return fetch (route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetDatosMedicosAlumnos(token : string, boleta : string){
        const route = this.apiCaller.getCall() + `/datos-medicos/${boleta}`;
        return fetch (route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    executeGetPreguntasMedicas(token : string){
        const route = this.apiCaller.getCall() + `/datos-medicos/preguntas-medicas`;
        return fetch (route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    executeGetMaterias(token: string) {
        const route = this.apiCaller.getCall() + `/materias`;
        return fetch(route, {
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

    executePostMaterial(token: string, material: InterfaceMateria) {
        const route = this.apiCaller.getCall() + `/materias`;
        return fetch(route, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(material),
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

    executePostNuevoProfesor(token : string, nuevoProfesor : InterfaceProfessor){
        const route = this.apiCaller.getCall() + `/profesores`;
        return fetch(route, {
            method : "POST",
            headers : {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                nombre: nuevoProfesor.nombre,
                apellidoPaterno: nuevoProfesor.apellidoPaterno,
                apellidoMaterno: nuevoProfesor.apellidoMaterno,
                email: nuevoProfesor.email,
                activo: nuevoProfesor.activo
            })
        })
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
