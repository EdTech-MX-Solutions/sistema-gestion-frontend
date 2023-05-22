import CardView from "@/components/CardView";
import PersonalCard from "@/components/Persona.Card";

function PersonalData() {
  const title = "Datos Personales del Alumno";
  const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
  return (
    <>
      <CardView title={title} description={description}>
        <PersonalCard />
      </CardView>
    </>
  );
}

export default PersonalData;
