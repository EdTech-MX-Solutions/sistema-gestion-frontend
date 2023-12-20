import React, { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableGrades from "@/components/professor/TableGrades";
import ButtonComponent from "@/components/ButtonComponent";
import InterfacePeriodo from "@/data/interfaces/periodo";

interface DefaultLayoutProps {
  children?: ReactNode;
  noBoleta?: string;
  nombre?: string;
  periodo: InterfacePeriodo;
}

function PanelGrades({periodo}:DefaultLayoutProps) {

  const title = "Modificacion de calificaciones";

  const  calificaciones  = [
    {
        "grado" : "1",
        "grupo" : "A",
        "materia" : "Matematicas",
        "claveMateria" : "Math-1",
        "primerTrimestre" : 10,
        "segundoTrimestre" : 10,
        "tercerTrimestre" : 10,
        "calificacionFinal" : 10
    },
    {
        "grado" : "1",
        "grupo" : "A",
        "materia" : "Español",
        "claveMateria" : "Esp-1",
        "primerTrimestre" : 10,
        "segundoTrimestre" : 10,
        "tercerTrimestre" : 10,
        "calificacionFinal" : 10
    }
]

  return (
    <>
        <div className="text-center">
            <ButtonComponent title = {"Guardar"} color = {"green"}></ButtonComponent>
        </div>
    </>
  );
}

export default PanelGrades;

