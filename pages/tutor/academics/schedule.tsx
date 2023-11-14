import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function schedule(){


    const materia1 = {
        claveMateria : "1",
        nombreMateria : "Español",
        nivel : 1
    }

    const materia2 = {
        claveMateria : "1",
        nombreMateria : "Español",
        nivel : 1
    }

    const materia3 = {
        claveMateria : "1",
        nombreMateria : "Español",
        nivel : 1
    }

    const materia4 = {
        claveMateria : "1",
        nombreMateria : "Español",
        nivel : 1
    }

    const materia5 = {
        claveMateria : "1",
        nombreMateria : "Español",
        nivel : 1
    }

    const materiasArray = [materia1,materia2,materia3, materia4, materia5];


    const horario = {
        grupo : "1A",
        materias : [materiasArray],
        horaLunes : "",
        horaMartes: "",
        horaMiercoles : "",
        horaJueves: "",
        horaViernes : ""
    }

    return (
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full"> Horario </h1>
                <h5>Grupo:  {horario.grupo} </h5>
            </div>

            <div className="flex mx-auto justify-center p-5 bg-white rounded-lg">
                <table className="table-fixed w-full text-sm text-center font-semibold ">
                    <thead className="text-white uppercase bg-green-700">
                        <tr className="">
                            <th className="p-3">Materia</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-5"> Español </td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                        </tr>

                        <tr>
                            <td className="p-5">Matemáticas</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                        </tr>

                        <tr>
                            <td className="p-5">Exploración de la Naturaleza y la Sociedad</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                        </tr>

                        <tr>
                            <td className="p-5">Formación Cívica y Ètica</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                        </tr>

                        <tr>
                            <td className="p-5">Educación Artística</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                            <td>7:00am - 8:00am</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default schedule;