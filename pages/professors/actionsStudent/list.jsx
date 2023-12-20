
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableList from "@/components/professor/TableList";
import {useAlumno} from "../../../components/context/AlumnoProvider";
import CardView from "../../../components/CardView";
import Loader from "../../../components/elements/Loader";
import Card from "@/components/Card";


function List() {

    const title = "Lista de Alumnos";

   const {alumnos,hayalumnos,loading} =useAlumno();
    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Lista de Alumnos"}></PrincipalTitle>
                {loading ? <Loader size="lg" /> : null}
                {hayalumnos && !loading ? (
                    <TableList
                        lista = {alumnos}
                        hayAlumnos={hayalumnos}>
                    </TableList>
                ) : (
                    <Card>
                        <div className="flex flex-col items-center justify-center my-20 ">
                        <h1 className="text-2xl font-semibold text-gray-700">
                            No hay alumnos registrados
                        </h1>

                        </div>
                    </Card>
                )}
            </CardView>
        </>
    );
}

export default List;

