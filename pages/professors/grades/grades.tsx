import { ReactNode } from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableGrades from "@/components/professor/TableGrades";


interface DefaultLayoutProps {
    children: ReactNode;
}

const listData = () => {

    const title = "Registro de calificaciones [Periodo_actual]"

    return (
        <>
            <PrincipalTitle title={title}></PrincipalTitle>
            <TableGrades></TableGrades>
        </>
    );
};

export default listData;
