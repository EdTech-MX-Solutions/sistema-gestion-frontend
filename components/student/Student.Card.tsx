import Card from "@/components/Card";
import InterfaceAlumno from "@/data/interfaces/alumno";
import StudentTabs from "./tabs";
import StudentCardHeader from "./data/Header";
import DataTabs from "./data/DataTabs";

function StudentCard({ alumno, children }: { alumno: InterfaceAlumno | null , children: React.ReactNode }) {
  return (
    <>
      <Card>
        <div className=" p-3 selection:bg-green-100">
          <StudentCardHeader {...alumno} />
          <DataTabs />
          {children}
        </div>
      </Card>
    </>
  );
}

export default StudentCard;
