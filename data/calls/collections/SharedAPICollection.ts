import InterfaceDireccion from "@/data/interfaces/direccion";
import { APICaller } from "../apiCaller";
import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import InterfaceTel from "@/data/interfaces/numeroTelefonico";

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

  executeGetCalificaciones(token: string, boleta: string) {
    const route = this.apiCaller.getCall() + "/calificaciones/alumno/" + boleta;
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

  executeGetAlumnosGrupo(token: string, idGrupo: string) {
    const route = this.apiCaller.getCall() + "/alumnos/grupo/" + idGrupo;
    return fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  executeGetTelefonos(token: string, idUsuario: string) {
    const route =
      this.apiCaller.getCall() + `/numeros-telefonicos/${idUsuario}`;
    return fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  executePostTelefonos(token: string, idUsuario: string, numero : InterfaceTel) {
    const route = this.apiCaller.getCall() + `/numeros-telefonicos/${idUsuario}`;
    return fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        numero: numero.numero,
        tipo: numero.tipo,
      }),
    });
  }

  executePostDatosMedicos(token : string, datosMedicos : InterfaceDatosMedicos, id : string){
    const route = this.apiCaller.getCall() + `/datos-medicos/${id}`;
    return fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            tipoSanguineo: datosMedicos.tipoSanguineo,
            peso: datosMedicos.peso,
            talla: datosMedicos.talla,
            zapatoOrtopedico: datosMedicos.zapatoOrtopedico,
            lentes: datosMedicos.lentes,
            seguroMedico: datosMedicos.seguroMedico,
            recomendacionesEspeciales: datosMedicos.recomendacionesEspeciales, 
            nombreMedicoFamiliar: datosMedicos.nombreMedicoFamiliar,
            telefonoMedicoFamiliar: datosMedicos.telefonoMedicoFamiliar,
            enfermadesFrecuentes: datosMedicos.enfermadesFrecuentes,
            enfermadesUltimoAnio: datosMedicos.enfermadesUltimoAnio,
            alergias: datosMedicos.alergias,
            respuestasPreguntasMedicas : datosMedicos.respuestasPreguntasMedicas,
            respuestasPreguntasHereditarias : datosMedicos.respuestasPreguntasHereditarias,
            respuestasCondicionesMedicas : datosMedicos.respuestasCondicionesMedicas
        }),
      });
  }

  executePostDireccion(token: string, direccion: InterfaceDireccion) {
    const route = this.apiCaller.getCall() + `direcciones`;
    return fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body : JSON.stringify({
        calle : direccion.calle,
        numeroExterior : direccion.numeroExterior,
        numeroInterior : direccion.numeroInterior,
        entreCalle1 : direccion.entreCalle1,
        entreCalle2 : direccion.entreCalle2,
        referenciaExtra : direccion.referenciaExtra,
        colonia : direccion.colonia,
      })
    });
  }
    
  executeGetSEPOMEXColonias(token: string, codigoPostal: string) {
    const route =
      this.apiCaller.getCall() + "/sepomex/colonias/" + codigoPostal;
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

  executeGetHorarioAlumno(token: string, boleta: string) {
    const route = this.apiCaller.getCall() + "/horarios/alumno/" + boleta;
    return fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  executeGetHorarioProfessor(token: string, id: string) {
    const route = this.apiCaller.getCall() + "/horarios/profesor/" + id;
    return fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  executeGetParentByAlumno(token: string, boleta: string) {
        const route = this.apiCaller.getCall() + "/tutores/alumno/" + boleta;
        return fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
  }
  executeGetDatosMedicos(token: string, noBoleta: string) {
    const route = this.apiCaller.getCall() + "/datos-medicos/" + noBoleta;
    return fetch(route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });
  }
}