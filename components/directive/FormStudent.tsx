import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceAlumno from "@/interfaces/alumno";
import SIGEAPICollection from "@/api/apiHandler";
import { useCookies } from "react-cookie";

interface FormStudentProps {
    student : InterfaceAlumno

    /*no_boleta: string;
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    aniosPreescolar: number;
    fecha_nacimiento: string;
    edad: number;
    pais_origen: string;
    sexo: string;
    estatus: string;
    entidad_nacimiento: string,
    grado: string | null,
    grupo: string | null,
    actualizarDatosMedicos: boolean | null, */
}

export const FormStudent = ({student}: FormStudentProps) => {

  const [formData, setFormData] = useState({
    no_boleta: student.no_boleta,
    curp: student.curp,
    nombre: student.nombre,
    apellido_paterno: student.apellido_paterno,
    apellido_materno: student.apellido_materno,
    aniosPreescolar: student.aniosPreescolar,
    fecha_nacimiento: student.fecha_nacimiento,
    edad: student.edad,
    pais_origen: student.pais_origen,
    sexo: student.sexo,
    estatus: student.estatus,
    entidad_nacimiento: student.entidad_nacimiento,
    grado: student.grado,
    grupo: student.grado,
    actualizarDatosMedicos: student.actualizarDatosMedicos 
  })

  const [cookies, setCookie] = useCookies(["token", "idProfesor", "childs"]);
  const [paises, setPaises] = useState([])
  const [estados, setEstados] = useState([])

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name] : value
    });
  };

  const fetchPaises = async () =>{
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try{
      const response = await api.sharedCollection.executeGetSEPOMEXPaises(
        token
      );
      if(response.ok){
        console.log("Generando lista de paises");
        const data = await response.json();
        console.log(data);
        if(!data || data.length == 0){
          console.error("Respuesta fallida")
          return;
        }
        setPaises(data);
      }
      else{
        console.error(`Error en la solicitud. Código de estado: ${response.status}`);
      }
    }catch(error){
      console.log(error);
    }
  }

  const fetchEstados = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    
    try {
      const response = await api.sharedCollection.executeGetSEPOMEXEstados(
        token
      );
      if(response.ok){
        console.log("Generando lista de estados");
        const data = await response.json();
        console.log(data);
        if(!data || data.length == 0){
          console.error("Respuesta fallida")
          return;
        }
        setEstados(data);
      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    fetchPaises();
    fetchEstados();
  },[])


  const handleSubmit = (event: { preventDefault: () => void; }) =>{
    event.preventDefault();
    console.log("Datos: ", formData);
  }

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-white rounded-lg">
          <h4 className="font-bold pb-5"> Datos Personales Alumno </h4>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  CURP<span>*</span>:
                </label>
                <input
                  type="text"
                  name="curp"
                  id="curp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.curp}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Grado:
                </label>
                <input
                  type="text"
                  name="grado"
                  id="grado"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.grado}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Grupo:
                </label>
                <input
                  type="text"
                  id="grupo"
                  name="grupo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.grupo}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Paterno<span>*</span>:
                </label>
                <input
                  type="text"
                  name="apellido_paterno"
                  id="apellido_paterno"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.apellido_paterno}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Materno:
                </label>
                <input
                  type="text"
                  name="apellido_materno"
                  id="apellido_materno"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.apellido_materno}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre(s)<span>*</span>:
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fecha de nacimiento<span>*</span>:
                </label>
                <input
                  type="date"
                  name="fecha_nacimiento"
                  id="fecha_nacimiento"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 ps-10 p-2.5"
                  placeholder="Select date"
                  required
                  value={formData.fecha_nacimiento}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Edad:
                </label>
                <input
                  type="number"
                  name="edad"
                  id="edad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.edad}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Años preescolar<span>*</span>:
                </label>
                <input
                  type="number"
                  name="aniosPreescolar"
                  id="aniosPreescolar"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.aniosPreescolar}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sexo:
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.sexo}
                  onChange={handleInputChange}
                >
                  <option value = ""> Seleccione una opción</option>
                  <option value="h"> Masculino </option>
                  <option value="m"> Femenino </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Estado de Origen<span>*</span>:
                </label>
                <select
                  id="entidad_nacimiento"
                  name="entidad_nacimiento"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.entidad_nacimiento}
                  onChange={handleInputChange}
                >
                  <option value=""> Selecciona un estado </option>
                  {estados.map((estado, index) =>(
                    <option key={index} value={estado.id}> {estado.nombre} </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  País de Origen:
                </label>
                <select
                  id="pais_origen"
                  name="pais_origen"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.pais_origen}
                  onChange={handleInputChange}
                >
                  <option value = ""> Selecciona un país </option>
                  {paises.map((pais, index) =>(
                    <option key={index} value={pais.id}> {pais.nombre} </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center pt-10">
              <ButtonComponent
                title={"Siguiente"}
                color={"blue"}
              ></ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormStudent;