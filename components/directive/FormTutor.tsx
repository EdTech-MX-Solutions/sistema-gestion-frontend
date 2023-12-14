import React, { useEffect } from "react";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { CheckBoxSocialMedia } from "./CheckBoxSocialMedia";
import InterfaceParent from "@/data/interfaces/parent";
import { useRouter } from "next/router";
import { TableVistaTelefonos } from "./TableVistaTelefonos";

interface FormTutorProps {
  tutor : InterfaceParent;
}

export const FormTutor = ({tutor}: FormTutorProps) => {

  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [claveElector, setclaveElector] = useState("");
  const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
  const [paises, setPaises] = useState([])
  const [estados, setEstados] = useState([])
  const [telefono, setTelefono] = useState("Cargando...")
  const [formData, setFormData] = useState<InterfaceParent>({
    id: tutor.id,
    curp: tutor.curp,
    leerYescribir: tutor.leerYescribir,
    gradoMaximoDeEstudios: tutor.gradoMaximoDeEstudios,
    ocupacion: tutor.ocupacion,
    nombres: tutor.nombres,
    apellidoPaterno: tutor.apellidoPaterno,
    apellidoMaterno: tutor.apellidoMaterno,
    correo: tutor.correo,
    fechaNacimiento: tutor.fechaNacimiento,
    sexo: tutor.sexo,
    paisOrigen: tutor.paisOrigen,
    estadoOrigen: tutor.estadoOrigen,
    redesSociales: tutor.redesSociales,
    tipoIdentificacion: tutor.tipoIdentificacion,
    noIdentificacion: tutor.noIdentificacion,
    esPrincipal: tutor.esPrincipal,
    parentesco: tutor.parentesco,
    numeros: tutor.numeros,
    estadoCivil : tutor.estadoCivil
  })

  const handleDarDeAltaTutor = async (nuevoTutor : InterfaceParent) => {
    const requiredFields = [
      "curp",
      "leerYescribir",
      "gradoMaximoDeEstudios",
      "ocupacion",
      "nombres",
      "apellidoPaterno",
      "apellidoMaterno",
      "correo",
      "fechaNacimiento",
      "sexo",
      "paisOrigen",
      "estadoOrigen",
      "tipoIdentificacion",
      "esPrincipal",
      "parentesco",
      "numeros",
      "estadoCivil",
    ];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceParent] 
    );

    if (emptyRequiredFields.length > 0) {
      //alert("Por favor, completa todos los campos obligatorios.");
      setOpen(true);
      return;
    }
    else{
      const api = new SIGEAPICollection();
      const token = cookies.token;
      const response = await api.directivosCollection.executePostNuevoTutor(
        token,
        nuevoTutor,
        id+""
      );

      setFormData({
        id: 0,
        curp: "",
        leerYescribir: "",
        gradoMaximoDeEstudios: "",
        ocupacion: "",
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        correo: "",
        fechaNacimiento: "",
        sexo: "",
        paisOrigen: "",
        estadoOrigen: "",
        redesSociales: [],
        tipoIdentificacion: "",
        noIdentificacion: "",
        esPrincipal: "",
        parentesco: "",
        numeros: [],
        estadoCivil : ""
      })
    }
  }

  const handleModifyTelefonos = ({ Id }: { Id: any }) => {
    router.push(`/directive/registrerTelefonos/?id=${Id}`);
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
            <div className="grid grid-cols-3 gap-2 md:gap-4  items-center">
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
                  name="apellidoPaterno"
                  id="apellidoPaterno"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.apellidoPaterno}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Materno<span>*</span>:
                </label>
                <input
                  type="text"
                  name="apellidoMaterno"
                  id="apellidoMaterno"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.apellidoMaterno}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo Electrónico<span>*</span>:
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
                  Grado Maximo de estudios<span>*</span>:
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
                  Ocupación<span>*</span>:
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
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  type="date"
                  className="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 ps-10 p-2.5"
                  placeholder="Select date"
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sexo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sexo<span>*</span>:
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
                  htmlFor="paisOrigen"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pais de Origen<span>*</span>:
                </label>
                <select
                  name="paisOrigen"
                  id="paisOrigen"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.paisOrigen}
                  onChange={handleInputChange}
                >
                  <option value = ""> Selecciona un país </option>
                  {paises.map((pais: any, index) =>(
                    <option key={index} value={pais.id}> {pais.nombre} </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="estadoOrigen"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Estado de Origen<span>*</span>:
                </label>
                <select
                  name="estadoOrigen"
                  id="estadoOrigen"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.estadoOrigen}
                  onChange={handleInputChange}
                  required
                >
                  <option value=""> Selecciona un estado </option>
                  {estados.map((estado:any, index) =>(
                    <option key={index} value={estado.id}> {estado.nombre} </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="estadoCivil"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Estado Civil<span>*</span>:
                </label>
                <select
                  name="estadoCivil"
                  id="estadoCivil"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.estadoCivil}
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

              <CheckBoxSocialMedia
                formData={formData}
                setFormData={setFormData}
              ></CheckBoxSocialMedia>

              <div>
                <label
                  htmlFor="tipoIdentificacion"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tipo de Identificación<span>*</span>:
                </label>
                <select
                  name="tipoIdentificacion"
                  id="tipoIdentificacion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  onChange={handleTipoIdentificacion}
                  value={formData.tipoIdentificacion}
                >
                  <option value="" selected> Selecciona una opción </option>
                  <option value="1"> INE </option>
                  <option value="2"> Cartilla Militar </option>
                  <option value="3"> Pasaporte </option>
                  <option value="4"> Otro </option>
                </select>
              </div>

              {formData.tipoIdentificacion == "1" && (
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Clave de Elector:
                  </label>
                  <input
                    type="text"
                    name="noIdentificacion"
                    id="noIdentificacion"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                    value={formData.noIdentificacion}
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
            
            <div className="px-2 pb-2">
            <TableVistaTelefonos
              telefonos={formData.numeros}
            ></TableVistaTelefonos>
            <div className="text-center">
              <ButtonComponent
                title={"Modificar numero telefonicos"}
                color={"blue"}
                onClick={() =>
                  handleModifyTelefonos({ Id: formData.id })
                }
              ></ButtonComponent>
            </div>
          </div>
          
            <div className="text-center pt-10">
             <ButtonComponent 
              title = {"Siguiente"} 
              color = {"blue"}
              onClick={() => {
                handleDarDeAltaTutor(formData);
              }}
             ></ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormTutor;