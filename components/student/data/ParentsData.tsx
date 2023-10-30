import InterfaceAlumno from "@/interfaces/alumno";
import Link from "next/link";
import ParentsCardComponent from "./ParentsCardComponent";

function ParentsDataComponent({ alumno }: { alumno: InterfaceAlumno }) {
  const parent1 = {
    name: "Ana Hernandez",
    email: "Ana@gmail.com",
    phone: "5520798192",
    relationship: "Madre",
    bloodType: "O- (Compatible)",
  };
  const parent2 = {
    name: "Rodrigo Rubio Haro",
    email: "chavo0022009@gmail.com",
    phone: "5520798192",
    relationship: "Padre",
    bloodType: "O- (Compatible)",
  };
  return (
    <>
      <div className="flex  pb-10 pt-10">
        <ParentsCardComponent parent={parent1} />
        <ParentsCardComponent parent={parent2} />
      </div>
    </>
  );
}

export default ParentsDataComponent;
