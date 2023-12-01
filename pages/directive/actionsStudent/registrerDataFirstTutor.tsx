import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataFirstTutor() {


    const [tipoIdentificacion, setTipoIdentificacion] = useState("");
    const [claveElector, setclaveElector] = useState("");

    const handleTipoIdentificacion = (event) =>{
        setTipoIdentificacion(event.target.value);
    }

    const handleClaveElector = (event) =>{
        setclaveElector(event.target.value);
    }

  return (
    <>
      <PrincipalTitle title={"Registro de Tutor"}></PrincipalTitle>
      <FormTutor tutor={InitialTutor}></FormTutor>
    </>
  );
}

export default registrerDataFirstTutor;
