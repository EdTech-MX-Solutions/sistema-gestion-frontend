import React from "react";
import {ca} from "date-fns/locale";

interface TableGradesprops {
  calificaciones : Array<{
    Grado: string;
    SubGrado: string;
    materia: string;
    claveMateria: string;
    primerTrimestre: string;
    segundoTrimestre: string;
    tercerTrimestre: string;
    calificacionFinal: string;
  }>,
    isKardex: boolean,
}

const TableGrades = ({ calificaciones, isKardex }: TableGradesprops) => {
  const TableHeader = () => {
    if(isKardex){
      return(
          <thead className="text-white uppercase bg-green-700">
          <tr className="">
            <th className="p-3"> Grado</th>
            <th className="p-3"> Grupo</th>
            <th className="p-3"> Materia</th>
            <th> 1er Trimestre </th>
            <th> 2do Trimestre </th>
            <th> 3er Trimestre </th>
            <th> Final </th>
          </tr>
          </thead>
      );
    }else{
        return(
            <thead className="text-white uppercase bg-green-700">
            <tr className="">
                <th className="p-3"> Materia</th>
                <th> 1er Trimestre </th>
                <th> 2do Trimestre </th>
                <th> 3er Trimestre </th>
                <th> Final </th>
            </tr>
            </thead>
        );
    }
  }
  const TableBody = () => {
      if(isKardex){
      return(
          <tbody>
          {calificaciones.map((calificacion) => (
              <tr key={calificacion.claveMateria}>
                <td className="p-5"> {calificacion.Grado} </td>
                <td className="p-5"> {calificacion.SubGrado} </td>
                <td className="p-5"> {calificacion.materia} </td>
                  <td> {calificacion.primerTrimestre===null?"-":calificacion.primerTrimestre} </td>
                  <td> {calificacion.segundoTrimestre===null?"-":calificacion.segundoTrimestre} </td>
                  <td> {calificacion.tercerTrimestre===null?"-":calificacion.tercerTrimestre} </td>
                  <td> {calificacion.calificacionFinal===null?"-":calificacion.calificacionFinal} </td>
              </tr>
          ))}
          </tbody>
      );
    }else{
      return(
          <tbody>
          {calificaciones.map((calificacion) => (
              <tr key={calificacion.claveMateria}>
                  <td className="p-5"> {calificacion.materia} </td>
                  <td> {calificacion.primerTrimestre === null ? "-" : calificacion.primerTrimestre} </td>
                  <td> {calificacion.segundoTrimestre === null ? "-" : calificacion.segundoTrimestre} </td>
                  <td> {calificacion.tercerTrimestre === null ? "-" : calificacion.tercerTrimestre} </td>
                  <td> {calificacion.calificacionFinal === null ? "-" : calificacion.calificacionFinal} </td>
              </tr>
          ))}
          </tbody>
      );
    }
  }
  return (
    <>
      <div className="flex mx-auto justify-center bg-white p-5 rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold">
            <TableHeader/>
            <TableBody/>
        </table>
      </div>
    </>
  );
};

export default TableGrades;
