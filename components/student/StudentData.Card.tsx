import Card from "@/components/Card";
import InterfaceAlumno from "@/data/interfaces/alumno";
import StudentTabs from "./tabs";
import StudentCardHeader from "./data/Header";
import DataTabs from "./data/DataTabs";

function StudentDataCard({
  alumno,
  children,
  baseRuta,
  id,
  isDirective,
}: {
  alumno: InterfaceAlumno | null;
  children: React.ReactNode;
  baseRuta ?: string;
  id ?: string;
  isDirective? : boolean;
}) {
  return (
    <>
      <Card>
        <>
          <div className=" p-3 selection:bg-green-100">
            <StudentCardHeader {...alumno} />
            {baseRuta ? <DataTabs baseRuta={baseRuta} id={id} isDirective={isDirective} /> : null}
            {children}
          </div>
          <div>
            <button
              onClick={() => window.print()}
              className="mt-5 print:hidden bg-secondary bg-opacity-80 dark:bg-opacity-20 hover:bg-opacity-100 text-xs text-gray-800 dark:text-gray-100 font-bold p-2 px-2 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-2 h-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Imprimir</span>
            </button>
          </div>
        </>
      </Card>
    </>
  );
}

export default StudentDataCard;
