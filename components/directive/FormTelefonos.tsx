import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceTel from "@/interfaces/numeroTelefonico";
import { TableTelefonos } from "./TableTelefonos";
import router from "next/router";

interface FormTelefonosProps {
  telefonos: InterfaceTel[];
}

export const FormTelefonos = ({ telefonos }: FormTelefonosProps) => {
  const [telefonoInput, setTelefonoInput] = useState("");
  const [tipoInput, setTipoInput] = useState("");
  const [telefonosAgregados, setTelefonosAgregados] = useState<InterfaceTel[]>(
    []
  );
  const [telefonoEditado, setTelefonoEditado] = useState<number>();

  const handleAgregarTelefono = () => {
    if (telefonoInput && tipoInput) {
      const nuevoTelefono: InterfaceTel = {
        numero: telefonoInput,
        tipo: tipoInput,
      };
      setTelefonosAgregados([...telefonosAgregados, nuevoTelefono]);
      setTelefonoInput("");
      setTipoInput("");
    }
  };

  const handleTelefonoInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTelefonoInput(event.target.value);
  };

  const handleTipoInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTipoInput(event.target.value);
  };

  const handleModificarTelefono = (index: number) => {
    const telefono = telefonosAgregados[index];
    setTelefonoInput(telefono.numero);
    setTipoInput(telefono.tipo);
    setTelefonoEditado(index);
  };

  const handleEliminarTelefono = (index: number) => {
    const nuevosTelefonos = telefonosAgregados.filter((_, i) => i !== index);
    setTelefonosAgregados(nuevosTelefonos);
  };

  const handleGuardarTelefono = () => {
    router.push("/directive/registrerProfessors/");
  }

  return (
    <>
      <div className="bg-white p-7 rounded-lg">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tipo de número telefonico
            </label>

            <select
              name="tipoTel"
              id="tipoTel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              onChange={handleTipoInputChange}
              value={tipoInput}
              required
            >
              <option value=""> Seleccione una opción </option>
              <option value="Celular"> Celular </option>
              <option value="Casa"> Casa </option>
              <option value="Trabajo"> Trabajo </option>
              <option value="Oficina"> Oficina </option>
              <option value="Otro"> Otro </option>
            </select>
          </div>

          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Numero de teléfono <span>*</span>:
            </label>
            <input
              type="tel"
              name="numero_celular"
              id="numero_celular"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={telefonoInput}
              onChange={handleTelefonoInputChange}
              required
            />
          </div>
        </div>

        <div className="text-center">
          <ButtonComponent
            color={"blue"}
            title={"Agregar"}
            onClick={() => {
              handleAgregarTelefono();
              setTelefonoInput("");
              setTipoInput("");
            }}
          ></ButtonComponent>
        </div>

        <div>
          <TableTelefonos
            telefonos={telefonosAgregados}
            handleEliminarTelefono={handleEliminarTelefono}
            handleModificarTelefono={handleModificarTelefono}
            setTelefonosAgregados={setTelefonosAgregados}
          ></TableTelefonos>
        </div>

        <div className="text-center">
          <ButtonComponent 
            color={"blue"} 
            title={"Siguiente"}
            onClick={() => {}}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
};
