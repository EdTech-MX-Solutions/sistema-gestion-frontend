import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceTel from "@/interfaces/numeroTelefonico";

interface TableTelefonosProps {
  telefonos: InterfaceTel[];
}

export const TableVistaTelefonos = ({ telefonos }: TableTelefonosProps) => {
  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold text-gray-900">
          Listado de números telefonicos
        </h4>
        <div className="justify-center bg-white p-5">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3"> No. Telefonico </th>
                <th> Tipo </th>
              </tr>
            </thead>
            <tbody>
              {telefonos.map((telefono, index) => (
                <tr key={index}>
                  <td className="p-5"> {telefono.numero} </td>
                  <td> {telefono.tipo} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
