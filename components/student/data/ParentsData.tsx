import InterfaceAlumno from "@/interfaces/alumno";
import Link from "next/link";
import ParentsCardComponent from "./ParentsCardComponent";

function ParentsDataComponent({ alumno }: { alumno: InterfaceAlumno }) {
  const parent1 = {
    name: "Carlota Hernandez",
    email: "carlotas@gmail.com",
    phone: "5520798192",
    relationship: "Padre",
    bloodType: "O- (Compatible)",
  };
  const parent2 = {
    name: "Maximiliano Urbina",
    email: "max@gmail.com",
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
