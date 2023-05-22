import CardView from "@/components/CardView";
import MedicCard from "@/components/Medic.Card";

function medicData() {
  const title = "Datos Médicos del Alumno";
  const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
  return (
    <>
      <CardView title={title} description={description}>
        <MedicCard />
      </CardView>
    </>
  );
}

export default medicData;
