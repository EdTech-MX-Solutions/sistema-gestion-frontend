import ParentsCardComponent from "./ParentsCardComponent";
import InterfaceParent from "@/data/interfaces/parent";

function ParentsDataComponent({ parents }: { parents: InterfaceParent[] }) {
  return (
    <>
      <div className="flex pb-10 pt-10">
        {parents && parents.length > 0 ? (
          parents.map((parent: any, index: number) => (
            <ParentsCardComponent key={index} parentInst={parent} />
          ))
        ) : (
          <p>No hay datos de padres disponibles.</p>
        )}
      </div>
    </>
  );
}

export default ParentsDataComponent;
