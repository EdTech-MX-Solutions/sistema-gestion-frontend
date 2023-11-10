import CardView from "@/components/CardView";
import { ReactNode} from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function index(){

  const title = "Datos del profesor";
  const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    return(
        <>
          <CardView title={title} description={description}>
          </CardView>
        </>
    );
}

export default index;

