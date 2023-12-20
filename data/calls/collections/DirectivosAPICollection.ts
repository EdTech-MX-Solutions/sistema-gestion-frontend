import InterfacePeriodo from "@/data/interfaces/periodo";
import { APICaller } from "../apiCaller";
import InterfaceMateria from "@/data/interfaces/materia";
import InterfaceProfessor from "@/data/interfaces/professor";
import InterfaceGrupo from "@/data/interfaces/grupos";
import InterfaceAlumno from "@/data/interfaces/alumno";
import InterfaceParent from "@/data/interfaces/parent";

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

  executGetProfesoresSinAsignar(token: string) {
    const route = this.apiCaller.getCall() + `/profesores/sin-asignar`;
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

    executePutMateria(token: string, materia: InterfaceMateria) {
        const route = this.apiCaller.getCall() + `/materias`;
        return fetch(route, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(materia),
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
  
    executePutGrupo(token: string, grupo: InterfaceGrupo){
        const route = this.apiCaller.getCall() + `/grupos`;
        return fetch(route, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idGrupo: grupo.idGrupo,
                grado: grupo.grado,
                subGrado: grupo.subGrado,
                turno: grupo.turno,
                responsable: grupo.responsable,
                idResponsable: grupo.idResponsable,
                salon: grupo.salon,
                inscritos: grupo.inscritos,
            }),
        });
    }

    executePatchAscenderProfesorADirectivo(token : string, accion : string ,id : string){
      const route = this.apiCaller.getCall() + `/directivos/convertir/${id}?ascender=${accion}`
      return fetch(route, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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

  executePostNuevoProfesor(token: string, nuevoProfesor: InterfaceProfessor) {
    const route = this.apiCaller.getCall() + `/profesores`;
    return fetch(route, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nuevoProfesor.nombre,
        apellidoPaterno: nuevoProfesor.apellidoPaterno,
        apellidoMaterno: nuevoProfesor.apellidoMaterno,
        email: nuevoProfesor.email,
        activo: nuevoProfesor.activo,
      }),
    });
  }

  executePostNuevoGrupo(token: string, nuevoGrupo: InterfaceGrupo) {
    const route = this.apiCaller.getCall() + `/grupos`;
    return fetch(route, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grado: nuevoGrupo.grado,
        subGrado: nuevoGrupo.subGrado,
        turno: nuevoGrupo.turno,
        responsable: nuevoGrupo.responsable,
        idResponsable: nuevoGrupo.idResponsable,
        salon: nuevoGrupo.salon,
        inscritos: nuevoGrupo.inscritos,
      }),
    });
  }

  executePostNuevoAlumno(token: string, nuevoAlumno: InterfaceAlumno) {
    const route = this.apiCaller.getCall() + `/alumnos`;
    return fetch(route, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombres: nuevoAlumno.nombres,
        apellidoPaterno: nuevoAlumno.apellidoPaterno,
        apellidoMaterno: nuevoAlumno.apellidoMaterno,
        aniosPreescolar: nuevoAlumno.aniosPreescolar,
        fechaNacimiento: nuevoAlumno.fechaNacimiento,
        edad: nuevoAlumno.edad,
        paisOrigen: nuevoAlumno.paisOrigen,
        sexo: nuevoAlumno.sexo,
        estatus: nuevoAlumno.estatus,
        entidad: nuevoAlumno.entidad,
        grado: nuevoAlumno.grado,
        grupo: nuevoAlumno.grupo,
        actualizarDatosMedicos: nuevoAlumno.actualizarDatosMedicos,
        curp: nuevoAlumno.curp,
      }),
    });
  }

  executePostNuevoTutor(token: string,nuevoTutor: InterfaceParent ,id: string) {
    const route = this.apiCaller.getCall() + `/tutores/alumno/${id}`;
    return fetch(route, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        id: nuevoTutor.id,
        curp: nuevoTutor.curp,
        leerYescribir: nuevoTutor.leerYescribir,
        gradoMaximoDeEstudios: nuevoTutor.gradoMaximoDeEstudios,
        ocupacion: nuevoTutor.ocupacion,
        nombres: nuevoTutor.nombres,
        apellidoPaterno: nuevoTutor.apellidoPaterno,
        apellidoMaterno: nuevoTutor.apellidoMaterno,
        correo: nuevoTutor.correo,
        fechaNacimiento: nuevoTutor.fechaNacimiento,
        sexo: nuevoTutor.sexo,
        paisOrigen: nuevoTutor.paisOrigen,
        estadoOrigen: nuevoTutor.estadoOrigen,
        redesSociales: nuevoTutor.redesSociales,
        tipoIdentificacion: nuevoTutor.tipoIdentificacion,
        noIdentificacion: nuevoTutor.noIdentificacion,
        esPrincipal: nuevoTutor.esPrincipal,
        parentesco: nuevoTutor.parentesco,
        estadoCivil : nuevoTutor.estadoCivil
      })
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

    executePostFileAlumnos(token: string, file: File) {
        const route = this.apiCaller.getCall() + `/archivos/alumnoslote/upload`;
        const formData = new FormData();
        formData.append("data", file);
        return fetch(route, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: "multipart/form-data",
            },
            body: formData,
        });
    }
}
