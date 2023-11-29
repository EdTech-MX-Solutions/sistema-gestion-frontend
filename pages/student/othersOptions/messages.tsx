import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import MessageCard from "@/components/student/otherOptions/MessageCard";
import MessageDescriptionCard from "@/components/student/otherOptions/MessageDescriptionCard";
import { TextFieldCard } from "@/components/TextFieldCard";
import SelectComponent from "@/components/SelectComponent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function messages() {

  const title = "Mensajes y avisos"

  const optionsSelectOptions = [
    {"value" : "", "label" : "Ver Mensajes"},
    {"value" : "", "label" : "Ver Reportes"},
  ]

  return (
    <>
      <PrincipalTitle title = {title}></PrincipalTitle>

        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="col-span-1">
            <div className="grid grid-rows-10 gap-2">
              <div className="p-4 grid grid-rows-2">
                <SelectComponent options = {optionsSelectOptions} title = "Selecciona..."></SelectComponent>
              </div>

              <div className="p-4 row-span-9 bg-gray-200 border overflow-y-auto grid grid-rows-8">
                <MessageCard></MessageCard>
                <MessageCard></MessageCard>
                <MessageCard></MessageCard>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-rows-1 gap-2">
              <MessageDescriptionCard></MessageDescriptionCard>
              <TextFieldCard comentario = "Recuerda que el mensaje que escribas aqui es directamente para la directora."></TextFieldCard>
            </div>
          </div>
        </div>
    </>
  );
}

export default messages;