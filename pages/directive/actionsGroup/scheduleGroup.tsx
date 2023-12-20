import TableSchedule from "@/components/student/academics/TableSchedule";
import CardView from "@/components/CardView";
import PrincipalTitle from "@/components/directive/Principal.Title";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import CardPeriodos from "@/components/elements/Panels/Periodos/CardMaterias";
import CardHorariosGrupos from "@/components/elements/Panels/Periodos/CardHorariosGrupos";

function Schedule() {
    let title = "Horario Grupo ";
    const router = useRouter();
    const { id } = router.query as { id: string };
    title += id;

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <Card>
                    <TableSchedule
                        horarioId={id}
                        esPorGrupo
                    ></TableSchedule>
                </Card>
                    <CardHorariosGrupos grupo={id} />
            </CardView>
        </>
    );
}

export default Schedule;
