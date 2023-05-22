import Card from "@/components/Card";
import DataMedicCard from "./Data.Medic.Card";
import InstituteDataMedicCard from "./Institute.Data.Medic.Card";

function MedicCard() {
  const describeText="Los datos médicos de un alumno nos proporcionan información crítica para garantizar un entorno escolar seguro y propicio para su desarrollo."
  const data = {
    name: "Rodrigo Rodolfo Rubio Haro",
    weight: 80,
    height: 180,
    bloodType: "O+",
    allergies: "N/A",
    glasses: "No",
    orthopedicShoes: "No",
    medicalInstitution: "IMSS",
    socialSecurityNumber: "123456789",
    specialCondition: "N/A",
    motorDisability: "No",
    hearingDisability: "No",
  };
  const imc = (
    data.weight /
    ((data.height / 100) * (data.height / 100))
  ).toFixed(2);
  const imcStatus = () => {
    if (imc < "18.5") {
      return "Bajo de Peso";
    } else if (imc >= "18.5" && imc <= "24.9") {
      return "Peso Normal";
    } else if (imc >= "25.0" && imc <= "29.9") {
      return "Sobrepeso";
    } else if (imc >= "30.0") {
      return "Obesidad";
    }
  };
  const IMCTitle = "IMC: " + imcStatus();
  const imcColor = () => {
    if (imc < "18.5") {
      return "text-blue-500"
    } else if (imc >= "18.5" && imc <= "24.9") {
      return "text-green-500";
    } else if (imc >= "25.0" && imc <= "29.9") {
      return "text-yellow-500";
    } else if (imc >= "30.0") {
      return "text-red-500";
    }
  };
  return (
    <>
      <Card>
        <div className="flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {data.name}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            {describeText} Datos Registrados:
          </p>
          <div className="flex gap-5 mt-2">
            <DataMedicCard title="Peso (kg)" value={data.weight.toString()} />
            <DataMedicCard
              title="Estatura (cm)"
              value={data.height.toString()}
            />
            <DataMedicCard title={IMCTitle} value={imc.toString()} color={imcColor()}/>
            <DataMedicCard title="Tipo de Sangre" value="O+" />
            <InstituteDataMedicCard title="Institución Médica" value={data.medicalInstitution} />
            {/* <DataMedicCard title="Número de Seguro Social" value={data.socialSecurityNumber} /> */}
          </div>
          <div className="flex gap-5 mt-2">
            <DataMedicCard title="Discapacidad Motriz" value={data.motorDisability} />
            <DataMedicCard title="Discapacidad Auditiva" value={data.hearingDisability} />
            <DataMedicCard title="Uso de Lentes" value={data.glasses} />
            <DataMedicCard title="Uso de Zapatos Ortopédicos" value={data.orthopedicShoes} />
          </div>
          <div>
            Alergias registradas: <span className="font-bold">{data.allergies}</span>
          </div>
        </div>
      </Card>
    </>
  );
}

export default MedicCard;
