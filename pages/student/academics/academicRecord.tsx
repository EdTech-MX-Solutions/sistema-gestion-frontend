import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function academicRecord(){
    return(
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center bg-white p-3 rounded-full"> Historial Académico </h1>
            </div>

            <div className="bg-white grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <div className="grid grid-rows-4 gap-">
                        <div className="p-4">
                            <label htmlFor="periodo" className="block mb-2 text-sm font-medium text-gray-900"> Seleciona un periodo escolar: </label>
                            <select name="periodo" id="periodo" className="w-full p-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                <option selected> Selecciona.... </option>
                                <option value="primerAño"> Primero Grado</option>
                                <option value="segundoAño"> Segundo Grado</option>
                                <option value="terceroAño"> Tercero Grado</option>
                                <option value="cuartoAño"> Cuarto Grado</option>
                                <option value="quintoAño"> Quinto Grado</option>
                                <option value="sextoAño"> Sexto Grado</option>
                            </select>
                        </div>

                        <div className="p-4 row-span-3">
                            <table className="table-fixed w-full md:text-sm text-[.70rem] text-center font-semibold">
                                <thead className="text-white uppercase bg-green-700">
                                    <tr className="">
                                        <th className="p-3 lg:p-3">Materia</th>
                                        <th>1er Trimestre</th>
                                        <th>2do Trimestre</th>
                                        <th>3er Trimestre</th>
                                        <th>Final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-5">Español</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>

                                    <tr>
                                        <td className="p-5">Matemáticas</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>

                                    <tr>
                                        <td className="p-5">Exploración de la Naturaleza y la Sociedad</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>

                                    <tr>
                                        <td className="p-5">Formación Cívica y Ètica</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>

                                    <tr>
                                        <td className="p-5">Educación Artística</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="grid grid-rows-6 gap-2">
                        <div className="p-4 row-span-3">
                            Grafica 1
                        </div>
                        <div className="p-4 row-span-3">
                            Grafica 2
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default academicRecord;


