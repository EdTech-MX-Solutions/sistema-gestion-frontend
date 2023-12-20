import TableSchedule from "@/components/student/academics/TableSchedule";
import CardView from "@/components/CardView";
import PrincipalTitle from "@/components/directive/Principal.Title";
import Card from "@/components/Card";

function Schedule() {
    const title = "Horario";
    const professorid = "8";

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <Card>
                    <TableSchedule
                        horarioId={professorid}
                        esProfessor
                    ></TableSchedule>
                </Card>
            </CardView>
        </>
    );
}

export default Schedule;
