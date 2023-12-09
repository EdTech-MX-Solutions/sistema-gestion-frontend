import InterfaceAlumno from "@/data/interfaces/alumno";
import Link from "next/link";
import ParentsCardComponent from "./ParentsCardComponent";
import InterfaceParent from "@/data/interfaces/parent";

function ParentsDataComponent({ parents }: { parents: InterfaceParent[] }) {
  // let parentsList: InterfaceParent = [];
  // parents.forEach((parentInst) => {
  //   parentsList.push({
       
      
  //   });
  // })

  return (
    <>
      <div className="flex  pb-10 pt-10">
        { parents.map((parent: any, index: number) => (
            <ParentsCardComponent key={index} parentInst={parent} />
        ))}
      </div>
    </>
  );
}

export default ParentsDataComponent;
