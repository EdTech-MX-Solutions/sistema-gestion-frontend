import React from 'react'
import ButtonComponentBiColor from '../ButtonComponentBiColor'
import InterfaceTel from '@/data/interfaces/numeroTelefonico'

interface TableTelefonosProps{
    telefonos : InterfaceTel[];
    handleModificarTelefono: (index: number) => void;
    handleEliminarTelefono: (index: number) => void;
    setTelefonosAgregados: React.Dispatch<React.SetStateAction<InterfaceTel[]>>; // Añadir esta prop
}

export const TableTelefonos = ({telefonos, handleModificarTelefono, handleEliminarTelefono, setTelefonosAgregados} : TableTelefonosProps) => {
  
  const handleModificar = (index: number) => {
    // Llamar a la función para modificar el teléfono
    handleModificarTelefono(index);

    // Ahora la lógica para eliminar temporalmente el teléfono de la tabla
    const nuevosTelefonos = telefonos.filter((_, i) => i !== index);
    
    // Actualizar la lista de teléfonos
    setTelefonosAgregados(nuevosTelefonos);
  };

  return (
    <>
    <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold text-gray-900">Listado de números telefonicos </h4>
        <div className="justify-center bg-white p-5">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3">No. Telefonico</th>
                <th> Tipo </th>
                <th colSpan={2}> Acciones </th>
              </tr>
            </thead>
            <tbody>
                {telefonos.map((telefono, index) => (
                <tr key={index}>
                  <td className="p-5"> {telefono.numero} </td>
                  <td> {telefono.tipo} </td>
                  <td>
                    <ButtonComponentBiColor
                      title={"Modificar"}
                      color1={"blue"}
                      color2={"green"}
                      onClick={() => handleModificar(index)}
                      
                    ></ButtonComponentBiColor>
                  </td>

                  <td>
                    <ButtonComponentBiColor
                      title={"Eliminar"}
                      color1={"red"}
                      color2={"pink"}
                      onClick={() => handleEliminarTelefono(index)}
                    ></ButtonComponentBiColor>
                  </td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
