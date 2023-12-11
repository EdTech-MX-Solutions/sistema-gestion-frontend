import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import { TextFieldCard } from "@/components/TextFieldCard";

interface DefaultLayoutProps {
  children: ReactNode;
}

function suggestions(){

  const title = "Quejas o sugerencias"

    return (
        <>
            <PrincipalTitle title = {title}></PrincipalTitle>

            <div className="p-5 m-5 text-center bg-blue-200 font-bold rounded-lg">
                <p> En este espacio podrás escribir de manera anónima cualquier asunto relacionado con una conducta inapropiada o incorrecta del profesor </p>
            </div>

            <TextFieldCard comentario = "Recuerda que el mensaje que escribas aqui es directamente para la directora."></TextFieldCard>
        </>
    );
}

export default suggestions;