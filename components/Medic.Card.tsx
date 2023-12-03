import DataMedicCard from "./Data.Medic.Card";
import InstituteDataMedicCard from "./Institute.Data.Medic.Card";
import { useState } from "react";
import Loader from "./interface/Loader";
import Button from "./interface/button";

function MedicCard() {
    const [loadingData, setLoadingData] = useState(true);
    const [haveData, setHaveData] = useState(false);

    const describeText =
        "Los datos médicos de un alumno nos proporcionan información crítica para garantizar un entorno escolar seguro y propicio para su desarrollo.";
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
            return "text-blue-500";
        } else if (imc >= "18.5" && imc <= "24.9") {
            return "text-green-500";
        } else if (imc >= "25.0" && imc <= "29.9") {
            return "text-yellow-500";
        } else if (imc >= "30.0") {
            return "text-red-500";
        }
    };
    if (!loadingData && haveData) {
        return (
            <>
                <div className="flex flex-col space-y-2 p-3">
                    <p className="md:text-lg text-gray-500 text-base">
                        {describeText} Datos Registrados:
                    </p>
                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="Peso (kg)"
                            value={data.weight.toString()}
                        />
                        <DataMedicCard
                            title="Estatura (cm)"
                            value={data.height.toString()}
                        />
                        <DataMedicCard
                            title={IMCTitle}
                            value={imc.toString()}
                            color={imcColor()}
                        />
                        <DataMedicCard title="Tipo de Sangre" value="O+" />
                        <InstituteDataMedicCard
                            title="Institución Médica"
                            value={data.medicalInstitution}
                        />
                        {/* <DataMedicCard title="Número de Seguro Social" value={data.socialSecurityNumber} /> */}
                    </div>
                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="Discapacidad Motriz"
                            value={data.motorDisability}
                        />
                        <DataMedicCard
                            title="Discapacidad Auditiva"
                            value={data.hearingDisability}
                        />
                        <DataMedicCard
                            title="Uso de Lentes"
                            value={data.glasses}
                        />
                        <DataMedicCard
                            title="Uso de Zapatos Ortopédicos"
                            value={data.orthopedicShoes}
                        />
                    </div>
                    <div>
                        Alergias registradas:{" "}
                        <span className="font-bold">{data.allergies}</span>
                    </div>
                </div>
            </>
        );
    } else if (!loadingData && !haveData) {
        return (
            <>
                <div className="flex flex-col space-y-2 p-3">
                    <p className="md:text-lg text-gray-500 text-base">
                        {describeText} Datos Registrados:
                    </p>
                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="No se ha encontrado un registro de Datos Médicos"
                            value="Sin registro médico"
                        >
                            <Button className="flex mt-10 mx-auto">
                                Registrar Datos Médicos
                            </Button>
                        </DataMedicCard>
                    </div>
                    <div>
                        Alergias registradas:{" "}
                        <span className="font-bold">N/A</span>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="flex flex-col space-y-2 p-3">
                    <p className="md:text-lg text-gray-500 text-base">
                        {describeText} Datos Registrados:
                    </p>

                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="Datos Médicos"
                            value="Cargando Datos"
                        >
                            <Loader />
                        </DataMedicCard>
                    </div>
                    <div>
                        Alergias registradas:{" "}
                        <span className="font-bold">Cargando Alergias...</span>
                    </div>
                </div>
            </>
        );
    }
}

interface InterfaceMedicDataCard {
    title: string;
    value: string;
    color?: string;
}

function DataMedicCardRegister({
    title,
    value,
    color,
}: InterfaceMedicDataCard) {
    const className = `text-4xl font-bold pb-2 ${color}`;
    return (
        <>
            <div className="flex-grow border border-gray-300 rounded text-center py-8">
                <h2 className={className}>{value}</h2>
                <h4 className="inline text-gray-500 text-sm">{title}</h4>
                <Button className="flex mt-10 mx-auto">
                    Registrar Datos Médicos
                </Button>
            </div>
        </>
    );
}

export default MedicCard;
