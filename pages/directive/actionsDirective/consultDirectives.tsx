import { ReactNode } from "react";
import InputSearch from "@/components/InputSearch";
import TableDirectives from "@/components/directive/TableDirectives";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultDirective() {

  const directives = [
    {
        "idDirective" : "1",
        "nombre" : "AbrahamD" ,
        "apellidoPaterno" : "RomeroD",
        "apellidoMaterno" : "AngelesD",
        "email" : "directivoCorreo@gmail.com",
        "telefono" : "55112233444"
    }
  ]


  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full">
          Consultar Directivos
        </h1>
      </div>

      <div className="grid grid-rows-4 gap-4 bg-green-200">
        <InputSearch comment = {"Recuerda que puedes bucar por numero de empleado y nombre"}></InputSearch>
        <TableDirectives directives = {directives}></TableDirectives>
      </div>
    </>
  );
}

export default consultDirective;

