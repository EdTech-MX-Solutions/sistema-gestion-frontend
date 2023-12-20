import {ReactNode, useState} from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableList from "@/components/professor/TableList";
import {useCookies} from "react-cookie";
import {useAlumno} from "../../../components/context/AlumnoProvider";
import CardView from "../../../components/CardView";
import InputSearch from "../../../components/template/InputSearch";
import Loader from "../../../components/elements/Loader";
import TableProfessors from "../../../components/directive/TableProfessors";


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
                ) : null}
            </CardView>
        </>
    );
}

export default List;

