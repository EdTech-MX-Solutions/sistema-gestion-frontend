import CardView from "@/components/CardView";
import PersonalCard from "@/components/Persona.Card";

function ParentsData() {
  const tutor = "Rodrigo Rubio";
  const title = "Datos Personales del Tutor";
  const description = `Datos registrados del tutor ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
  return (
    <>
      <CardView title={title} description={description}>
        <PersonalCard />
      </CardView>
    </>
  );
}

export default ParentsData;
