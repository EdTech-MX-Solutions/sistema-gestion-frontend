import Card from "@/components/Card";
import InterfaceAlumno from "@/data/interfaces/alumno";
import StudentCardHeader from "./data/Header";
import AcademicsTabs from "./academics/AcademicsTabs";

function StudentAcacemicsCard({ alumno, children }: { alumno: InterfaceAlumno | null , children: React.ReactNode }) {
  return (
    <>
      <Card>
        <div className=" p-3 selection:bg-green-100">
          <StudentCardHeader {...alumno} />
          <AcademicsTabs />
          {children}
        </div>
      </Card>
    </>
  );
}

export default StudentAcacemicsCard;
