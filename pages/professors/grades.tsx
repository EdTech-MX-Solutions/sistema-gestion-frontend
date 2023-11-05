import { ReactNode } from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}


const listData = () =>{
    return (
        <>
            <div className="md:m-10 md:p-10">
                <div className="text-4xl font-semibold">
                    <h1 className="pb-3">Registro de calificaciones [grupo_asignado]</h1>

                    <h1 className="pb-3">Periodo: [periodo_actual]</h1>
                </div>

                <div className="p-5 flex flex-row">
                    <div className="basis-11/12">
                        <input type="text" placeholder="Buscar Alumno" className="w-1/2"/>
                    </div>
                    
                    <div className="basis-1/12">
                        <select>
                            <option value="mat">Matematicas</option>
                            <option value="esp">Español</option>
                        </select>
                    </div>
                </div>

                <div className="p-2 bg-white border-1">
                    <table className="w-full text-sm text-center decoration-black">
                        <thead>
                            <tr>
                                <th scope="col" className="bg-blue-300 border">No. Lista</th>
                                <th scope="col" className="bg-blue-300 border">Apellido Paterno</th>
                                <th scope="col" className="bg-blue-300 border">Apellido Materno</th>
                                <th scope="col" className="bg-blue-300 border">Nombre (s)</th>
                                <th scope="col" className="bg-blue-300 border">Calificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Romero</td>
                                <td>Angeles</td>
                                <td>Abraham</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>  

                <div className="p-10 text-center">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> GUARDAR </button>
                </div>

            </div>
        </>
    );
}

export default listData;
  