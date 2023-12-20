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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" data-slot="icon" className="w-4 h-4 mr-2">
                <path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.51 1.94l-.315 1.896A1 1 0 0 0 4.18 15h7.639a1 1 0 0 0 .986-1.164l-.316-1.897A2 2 0 0 0 14 10V7a2 2 0 0 0-2-2V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3Zm1.5 0V2.5h5V5h-5Zm5.23 5.5H5.27l-.5 3h6.459l-.5-3Z" clip-rule="evenodd" />
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
