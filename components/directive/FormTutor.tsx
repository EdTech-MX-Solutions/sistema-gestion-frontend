import React from "react";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import SelectComponent from "../SelectComponent";

interface FormTutorProps {
  tutor : {
    nombre : string
    apellidoPaterno : string
    apellidoMaterno : string
    email : string
    CURP : string
    leerYEscribir : boolean
    gradoMaximoDeEstudios : string
    ocupacion : string
    fechaNacimiento : string
    edad : number
    sexo : string
    paisOrigen : string
    estadoOrigen : string
    estadoCivil : string
    redesSociales : Array<string>
    tipoIdentificacion : string
    noIdentificacion : string
    esPrincipal : boolean
    parentesto : string
    numeros : Array<number>
  }
}

export const FormTutor = ({tutor}: FormTutorProps) => {
  const [tipoIdentificacion, setTipoIdentificacion] = useState("");
  const [claveElector, setclaveElector] = useState("");

  const handleTipoIdentificacion = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTipoIdentificacion(event.target.value);
  };

  const handleClaveElector = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setclaveElector(event.target.value);
  };


  const estados = {
    "id" : 1,
    "nombre" : "CDMX"
  }

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-white rounded-lg">
          <h4 className="font-bold pb-5">
            Datos personales del tutor principal
          </h4>
          <form>
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
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.nombre}
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
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.apellidoPaterno}
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
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.apellidoMaterno}
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
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.email}
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
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.CURP}
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
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {tutor.leerYEscribir ? "s" : "n"}
                  required
                >
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
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.gradoMaximoDeEstudios}
                >
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
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.ocupacion}
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
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 ps-10 p-2.5"
                  placeholder="Select date"
                  value={tutor.fechaNacimiento}
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
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.sexo}
                >
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
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.paisOrigen}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Estado de Origen<span>*</span>:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                >
                  <option value="M"> CDMX </option>
                  <option value="F"> Estado de Mexico </option>
                  <option value="O"> Otro </option>
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
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.estadoCivil}
                >
                  <option value="1"> Casado </option>
                  <option value="2"> Divorciado </option>
                  <option value="3"> Soltero </option>
                  <option value="4"> Viudo </option>
                  <option value="5"> Unión Libre </option>
                  <option value="6"> Otro </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ¿Cuenta con alguna red social?
                </label>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Facebook
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Whatsapp
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Instagram
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Facebook
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Twitter
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tiktok
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id=""
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Telegram
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tipo de Identificación<span>*</span>:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  onChange={handleTipoIdentificacion}
                  value={tipoIdentificacion}
                >
                  <option value="1"> INE </option>
                  <option value="2"> Cartilla Militar </option>
                  <option value="3"> Pasaporte </option>
                  <option value="4"> Otro </option>
                </select>
              </div>

              {tipoIdentificacion == "1" && (
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Clave de Elector:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                    value={claveElector}
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

                  Numero de Teléfono Celular<span>*</span>:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Numero de Teléfono de Casa:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Numero de Teléfono Trabajo:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Parentesco con el alumno<span>*</span>:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={tutor.parentesto}
                  required
                >
                  <option value="1"> Padre </option>
                  <option value="2"> Madre </option>
                  <option value="3"> Abuelo </option>
                  <option value="4"> Abuela </option>
                  <option value="5"> Tío </option>
                  <option value="6"> Tía </option>
                  <option value="7"> Hermano </option>
                  <option value="8"> Hermana </option>
                  <option value="9"> Vecino </option>
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
