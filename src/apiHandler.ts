
import { AuthAPICollection } from "./collections/AuthAPICollection";
import { DirectivosAPICollection } from "./collections/DirectivosAPICollection";
import { ProfesoresAPICollection } from "./collections/ProfesoresAPICollection";
import { TutoresAPICollection } from "./collections/TutoresAPICollection";
import { SharedAPICollection } from "./collections/SharedAPICollection";



class SIGEAPICollection {
    sharedCollection: SharedAPICollection;
    tutoresCollection: TutoresAPICollection;
    profesoresCollection: ProfesoresAPICollection;
    directivosCollection: DirectivosAPICollection;
    authCollection: AuthAPICollection;

    constructor() {
        this.sharedCollection = new SharedAPICollection();
        this.tutoresCollection = new TutoresAPICollection();
        this.profesoresCollection = new ProfesoresAPICollection();
        this.directivosCollection = new DirectivosAPICollection();
        this.authCollection = new AuthAPICollection();
    }
}

export default SIGEAPICollection;

// class TuClase {
//     private apiCaller: TuApiCaller; // Asume que tienes un objeto apiCaller

//     constructor(apiCaller: TuApiCaller) {
//         this.apiCaller = apiCaller;
//     }

//     private async makeRequest(endpoint: string, token: string): Promise<Response> {
//         const route = this.apiCaller.getCall() + endpoint;
//         const response = await fetch(route, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Error en la solicitud a ${route}: ${response.status}`);
//         }

//         return response;
//     }

//     executeGetAlumnos(token: string) {
//         return this.makeRequest("/alumnos", token);
//     }

//     executeGetHorariosAlumno(token: string, boleta: string) {
//         return this.makeRequest(`/horarios/alumno/${boleta}`, token);
//     }

//     executeGetHorariosProfesor(token: string, id: string) {
//         return this.makeRequest(`/horarios/profesor/${id}`, token);
//     }

//     executeGetCiclos(token: string) {
//         return this.makeRequest("/ciclos", token);
//     }

//     executeGetTutores(token: string) {
//         return this.makeRequest("/tutores", token);
//     }
