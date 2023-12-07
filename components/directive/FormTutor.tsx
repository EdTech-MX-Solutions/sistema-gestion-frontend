import React, { useEffect } from "react";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import SIGEAPICollection from "@/backend-calls/apiHandler";
import { cookies } from "next/dist/client/components/headers";
import { useCookies } from "react-cookie";
import InterfaceTel from "@/interfaces/numeroTelefonico";
import { CheckBoxSocialMedia } from "./CheckBoxSocialMedia";
import InterfaceParent from "@/interfaces/parent";

interface FormTutorProps {
  tutor : InterfaceParent;
}

export const FormTutor = ({tutor}: FormTutorProps) => {
  const [claveElector, setclaveElector] = useState("");
  const [formData, setFormData] = useState({
    id_tutor: tutor.id_tutor,
    curp: tutor.curp,
    leerYescribir: tutor.leerYescribir,
    gradoMaximoDeEstudios: tutor.gradoMaximoDeEstudios,
    ocupacion: tutor.ocupacion,
    nombres: tutor.nombres,
    apellido_paterno: tutor.apellido_paterno,
    apellido_materno: tutor.apellido_materno,
    correo: tutor.correo,
    fecha_nacimiento: tutor.fecha_nacimiento,
    sexo: tutor.sexo,
    pais_origen: tutor.pais_origen,
    estado_civil: tutor.estado_civil,
    red_social: tutor.red_social,
    tipo_identificacion: tutor.tipo_identificacion,
    no_identificacion: tutor.no_identificacion,
    tutor_principal: tutor.tutor_principal,
    parentesco: tutor.parentesco,
    entidad_nacimiento: tutor.entidad_nacimiento,
    numeros: tutor.numeros
  })

  const [socialMediaState, setSocialMediaState] = useState({
    Facebook: false,
    Whatsapp: false,
    Instagram: false,
    Twitter: false,
    Tiktok: false,
    Telegram: false
  });

  const handleCheckboxChange = (id: any, checked: any) => {
    setSocialMediaState(prevState => ({
      ...prevState,
      [id]: checked
    }));
  };

  const handleTipoIdentificacion = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      tipo_identificacion: newValue
    }));
  };

  const handleClaveElector = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setclaveElector(event.target.value);
  };

  const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
  const [paises, setPaises] = useState([])
  const [estados, setEstados] = useState([])
  const [telefono, setTelefono] = useState("Cargando...")
  
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name] : value
    });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Datos: ", formData);
  }

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

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-white rounded-lg">
          <h4 className="font-bold pb-5">
            Datos personales del tutor principal
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombres(s)<span>*</span>:
                </label>
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.nombres}
                  onChange={handleInputChange}
                  required
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
                  value={formData.apellido_paterno}
                  onChange={handleInputChange}
                  required
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
                  Correo Electrónico:
                </label>
                <input
                  type="text"
                  name="correo"
                  id="correo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.correo}
                  onChange={handleInputChange}
                />
              </div>

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
                  value={formData.curp}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Sabe leer y escribir?<span>*</span>
                </label>
                <select
                  id="leerYescribir"
                  name="leerYescribir"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {formData.leerYescribir}
                  onChange={handleInputChange}
                  required
                >
                  <option value = ""> Seleccione una opción </option>
                  <option value="s"> Sí </option>
                  <option value="n"> No </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Grado Maximo de estudios:
                </label>
                <select
                  name="gradoMaximoDeEstudios"
                  id="gradoMaximoDeEstudios"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.gradoMaximoDeEstudios}
                  onChange={handleInputChange}
                >
                  <option value = ""> Seleccione una opción</option>
                  <option value="P"> Primaria </option>
                  <option value="S"> Secundaria </option>
                  <option value="B"> Bachillerato </option>
                  <option value="C"> Carrera Técnica </option>
                  <option value="L"> Licenciatura </option>
                  <option value="M"> Maestria o Superior </option>
                  <option value="N"> Sin Estudios </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ocupación:
                </label>
                <input
                  type="text"
                  name="ocupacion"
                  id="ocupacion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.ocupacion}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fecha de Nacimiento<span>*</span>:
                </label>
                <input
                  name="fecha_nacimiento"
                  id="fecha_nacimiento"
                  type="date"
                  className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 ps-10 p-2.5"
                  placeholder="Select date"
                  value={formData.fecha_nacimiento}
                  onChange={handleInputChange}
                  required
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
                  name="sexo"
                  id="sexo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.sexo}
                  onChange={handleInputChange}
                >
                  <option value = ""> Seleccione una opción</option>
                  <option value="M"> Masculino </option>
                  <option value="F"> Femenino </option>
                  <option value="O"> Otro </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pais de Origen<span>*</span>:
                </label>
                <select
                  name="pais_origen"
                  id="pais_origen"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.pais_origen}
                  onChange={handleInputChange}
                >
                  <option value = ""> Selecciona un país </option>
                  {paises.map((pais, index) =>(
                    <option key={index} value={pais.id}> {pais.nombre} </option>
                  ))}
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
                  name="entidad_nacimiento"
                  id="entidad_nacimiento"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.entidad_nacimiento}
                  onChange={handleInputChange}
                  required
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
                  Estado Civil:
                </label>
                <select
                  name="estado_civil"
                  id="estado_civil"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.estado_civil}
                  onChange={handleInputChange}
                >
                  <option value = ""> Selecciona una opción</option>
                  <option value="1"> Casado </option>
                  <option value="2"> Divorciado </option>
                  <option value="3"> Soltero </option>
                  <option value="4"> Viudo </option>
                  <option value="5"> Unión Libre </option>
                  <option value="6"> Otro </option>
                </select>
              </div>

              <CheckBoxSocialMedia socialMediaState={socialMediaState} handleCheckboxChange={handleCheckboxChange}></CheckBoxSocialMedia>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tipo de Identificación<span>*</span>:
                </label>
                <select
                  name="tipo_identificacion"
                  id="tipo_identificacion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  onChange={handleTipoIdentificacion}
                  value={formData.tipo_identificacion}
                >
                  <option value="" selected> Selecciona una opción </option>
                  <option value="1"> INE </option>
                  <option value="2"> Cartilla Militar </option>
                  <option value="3"> Pasaporte </option>
                  <option value="4"> Otro </option>
                </select>
              </div>

              {formData.tipo_identificacion == "1" && (
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Clave de Elector:
                  </label>
                  <input
                    type="text"
                    name="no_identificacion"
                    id="no_identificacion"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                    value={formData.no_identificacion}
                    onChange={handleClaveElector}
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Parentesco con el alumno<span>*</span>:
                </label>
                <select
                  name="parentesco"
                  id="parentesco"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.parentesco}
                  onChange={handleInputChange}
                  required
                >
                  <option value = "" selected> Seleccione una opción </option>
                  <option value="1"> Padre </option>
                  <option value="2"> Madre </option>
                  <option value="3"> Abuelo </option>
                  <option value="4"> Abuela </option>
                  <option value="5"> Tío </option>
                  <option value="6"> Tía </option>
                  <option value="7"> Hermano </option>
                  <option value="8"> Hermana </option>
                  <option value="9"> Vecino(a) </option>
                  <option value="10"> Primo </option>
                  <option value="11"> Prima </option>
                  <option value="12"> Bisabuelo </option>
                  <option value="13"> Bisabuela </option>
                  <option value="14"> Padrastro </option>
                  <option value="15"> Madrastra </option>
                </select>
              </div>
            </div>

            <div className="text-center pt-10">
             <ButtonComponent title = {"Siguiente"} color = {"blue"}></ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormTutor;