import React, { useEffect, useState } from "react";
import ButtonComponent from "../elements/Buttons/ButtonComponent";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import InterfaceDireccion from "@/data/interfaces/direccion";
import InterfaceColonia from "@/data/interfaces/colonia";
import { Alert, Button } from "@material-tailwind/react";

interface FormDireccionesProps {
  direccion: any;
  isNewUser: boolean;
}

export const FormDirecciones = ({
  isNewUser,
  direccion,
}: FormDireccionesProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [requiredCamposCompletos, setRequiredCamposCompletos] = useState(false);
  const [alerta, setAlerta] = useState(true);
  const [cookies, setCookie] = useCookies(["token", "idProfesor", "childs"]);
  const [codigosPostales, setCodigosPostales] = useState<InterfaceColonia>();
  const [inputCodigoPostal, setCodigoPostal] = useState("");

  const [formData, setFormData] = useState<InterfaceDireccion>({
    id: isNewUser ? null : direccion.id,
    calle: isNewUser ? "" : direccion.calle,
    numeroExterior: isNewUser ? "" : direccion.numeroExterior,
    numeroInterior: isNewUser ? "" : direccion.numeroInterior,
    entreCalle1: isNewUser ? "" : direccion.entreCalle1,
    entreCalle2: isNewUser ? "" : direccion.entreCalle2,
    referenciaExtra: isNewUser ? "" : direccion.referenciaExtra,
    colonia: isNewUser ? null : direccion.colonia,
    estado: isNewUser ? null : direccion.estado,
  });

  const fetchCodigosPostales = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response = await api.sharedCollection.executeGetSEPOMEXColonias(
        token,
        inputCodigoPostal
      );
      if (response.ok) {
        console.log("Generando lista de codigos postales");
        const data = await response.json();
        console.log(data);
        if (!data || data.length == 0) {
          console.error("Respuesta fallida");
          return;
        }
        setCodigosPostales(data);
        setFormData((prevData) => ({
          ...prevData,
          colonia: data,
        }));
      } else {
        console.error(
          `Error en la solicitud. Código de estado: ${response.status}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(codigosPostales);
  console.log("Estado: " + codigosPostales?.estado);

  useEffect(() => {
    if (inputCodigoPostal.length === 5) {
      fetchCodigosPostales();
    }
  }, [inputCodigoPostal]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    if (name == "codigoPostal") {
      setCodigoPostal(value);
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCamposEnBlanco = () => {
    const requiredFields = ["codigoPostal", "noExterior", "calle"];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceDireccion]
    );

    if (emptyRequiredFields.length == 0) {
      console.log("NO hay campos obligatorios vacios");
      setRequiredCamposCompletos(true);
      setAlerta(false);
    } else {
      console.log("SI hay campos obligatorios vacios");
      setRequiredCamposCompletos(false);
      setAlerta(true);
    }
  };

  const handleRegistrarNuevaDireccion = async (
    nuevaDireccion: InterfaceDireccion
  ) => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    const response = await api.sharedCollection.executePostDireccion(
      token,
      nuevaDireccion
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Direccion data de alta");

      setFormData({
        id: null,
        calle: "",
        numeroExterior: "",
        numeroInterior: "",
        entreCalle1: "",
        entreCalle2: "",
        referenciaExtra: "",
        colonia: null,
        estado: null,
      });
    }
  };

  useEffect(() => {
    handleCamposEnBlanco();
  }, [formData]);

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-white rounded-lg">
          <h4 className="font-bold pb-5"> Registro de direccion </h4>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Código Postal<span>*</span>:
                </label>
                <input
                  type="text"
                  name="codigoPostal"
                  id="codigoPostal"
                  value={
                    isNewUser
                      ? inputCodigoPostal
                      : direccion.colonia?.codigoPostal
                  }
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="estado"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Estado<span>*</span>:
                </label>
                <label
                  htmlFor="estado"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {codigosPostales?.estado}
                </label>
              </div>

              <div>
                <label
                  htmlFor="munucipio"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Municipio<span>*</span>:
                </label>
                <label
                  htmlFor="munucipio"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {codigosPostales?.municipio}
                </label>
              </div>

              <div>
                <label
                  htmlFor="colonias"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Colonia<span>*</span>:
                </label>

                <select
                  id="colonia"
                  name="colonia"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  onChange={handleInputChange}
                >
                  <option value=""> Selecciona una colonia </option>
                  {codigosPostales?.colonias.map((colonia: any, index) => (
                    <option key={index} value={colonia}>
                      {colonia}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="calle"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Calle<span>*</span>:
                </label>
                <input
                  type="text"
                  name="calle"
                  id="calle"
                  value={formData.calle}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="noExterior"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  No. Exterior<span>*</span>:
                </label>
                <input
                  type="number"
                  name="noExterior"
                  id="noExterior"
                  value={formData.numeroExterior}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="noInterior"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  No. Interior
                </label>
                <input
                  type="number"
                  name="noInterior"
                  id="noInterior"
                  onChange={handleInputChange}
                  value={formData.numeroInterior}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="entreCalle1"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Entre Calle:
                </label>
                <input
                  type="text"
                  id="entreCalle1"
                  name="entreCalle1"
                  value={formData.entreCalle1}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="entreCalle2"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Y calle:
                </label>
                <input
                  type="text"
                  name="entreCalle2"
                  id="entreCalle2"
                  value={formData.entreCalle2}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="referenciaAdicional"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Referencia adicional:
                </label>
                <input
                  type="text"
                  name="referenciaAdicional"
                  id="referenciaAdicional"
                  value={formData.referenciaExtra}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                />
              </div>
            </div>

            <div className="text-center pt-10">
                <ButtonComponent
                  title={"Siguiente"}
                  color={"blue"}
                  onClick={() => {
                    if(requiredCamposCompletos == true){
                      handleRegistrarNuevaDireccion(formData);
                    }
                    else{
                      console.log("Campos obligatorios vacios");
                    }
                  }}
                ></ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FormDirecciones;
