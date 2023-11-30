import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import CardConsultProfessor from "@/components/directive/CardConsultProfessor";

interface DefaultLayoutProps {
    children: ReactNode;
}

function consultProfessor() {

    const title = "Detalles profesor: [nombre_profesor]";


    const professor = {
        "idProfessor" : "1",
        "nombre" : "AbrahamP" ,
        "apellidoPaterno" : "RomeroP",
        "apellidoMaterno" : "AngelesP",
        "email" : "professorCorreo@gmail.com",
        "telefono" : "5511223344"
    }

    return (
        <>
            <PrincipalTitle title={title}></PrincipalTitle>
            <CardConsultProfessor professor = {professor}></CardConsultProfessor>
        </>
    );
}

export default consultProfessor;
