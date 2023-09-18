import Card from "@/components/Card";
import InterfaceAlumno from "@/interfaces/alumno";
import StudentTabs from "./student/tabs";
import StudentCardHeader from "./student/data/Header";

function StudentCard({ alumno, children }: { alumno: InterfaceAlumno, children: React.ReactNode }) {
  return (
    <>
      <Card>
        <div className=" p-3 selection:bg-green-100">
          <StudentCardHeader {...alumno} />
          <StudentTabs />
          {children}
        </div>
      </Card>
    </>
  );
}

export default StudentCard;
