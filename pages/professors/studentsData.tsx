import { ReactNode} from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function studentData(){
    return(
        <> 

          <div> Datos personales Alumno </div>

          <div> Datos médicos alumno </div>

          <div> Datos tutores</div>
        </>
    );
}

export default studentData;

