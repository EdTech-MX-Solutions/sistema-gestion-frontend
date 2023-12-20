import DataMedicCard from "./Data.Medic.Card";
import InstituteDataMedicCard from "./Institute.Data.Medic.Card";
import {useEffect, useState} from "react";
import Loader from "./elements/Loader";
import Button from "./elements/Buttons/Button";
import SIGEAPICollection from "@/data/calls/apiHandler";
import {InterfaceCalificaciones} from "@/data/interfaces/calificaciones";
import {useCookies} from "react-cookie";
import InterfaceAlumno from "@/data/interfaces/alumno";
import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import DatosMedicos from "@/data/interfaces/datosMedicos";
import InterfaceRespuestasPreguntasMedicas from "@/data/interfaces/respuestasMedicasPreguntasMedicas";
import InterfaceRespuestasMedicasHereditarias from "@/data/interfaces/respuestasMedicasHereditarias";
import InterfaceRespuestasMedicasCondiciones from "@/data/interfaces/respuestasMedicasCondiciones";

function MedicCard({alumnoActual}:{alumnoActual:InterfaceAlumno}) {
    const [cookies,setCookies] = useCookies(["token"]);
    const [loadingData, setLoadingData] = useState(false);
    const [haveData, setHaveData] = useState(false);
    const [error, setError] = useState(false);
    const describeText =
        "Los datos médicos de un alumno nos proporcionan información crítica para garantizar un entorno escolar seguro y propicio para su desarrollo.";
    const [data,setData] = useState<InterfaceDatosMedicos>({
        tipoSanguineo: "",
        peso: 0,
        talla: 0,
        zapatoOrtopedico: false,
        lentes: false,
        seguroMedico: "",
        recomendacionesEspeciales: "",
        nombreMedicoFamiliar: "",
        telefonoMedicoFamiliar: "",
        enfermadesFrecuentes: "",
        enfermadesUltimoAnio: "",
        alergias: "",
        respuestasPreguntasMedicas : [],
        respuestasPreguntasHereditarias : [],
        respuestasCondicionesMedicas : []
    });

    const fetchDataMedic = async () => {
        setLoadingData(true);
        const api = new SIGEAPICollection();
        const token = cookies.token;
        try {
            const response =
                await api.sharedCollection.executeGetDatosMedicos(
                    token,
                    alumnoActual.noBoleta
                );
            if (response.ok) {
                const dataMedica = await response.json();
                const nombre = `${alumnoActual.nombres} ${alumnoActual.apellidoPaterno} ${alumnoActual.apellidoMaterno}`;
                setLoadingData(false);
                setHaveData(true);
                setData(dataMedica);

                console.log("Datos Medicos: ", dataMedica);
            } else {
                console.error(
                    `Error en la solicitud. Código de estado: ${response.status}`
                );
                setLoadingData(false);
                setHaveData(false);
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
            setLoadingData(false);
            setHaveData(false);
        }
    };

    useEffect(() => {
        fetchDataMedic();
    }, []);

    useEffect(() => {
        fetchDataMedic()
    }, [alumnoActual]);

    var tipoSangre = "No registrado";
    switch (data.tipoSanguineo) {
        case "A_POSITIVO":
            tipoSangre = "A+";
            break;
        case "A_NEGATIVO":
            tipoSangre = "A-";
            break;
        case "B_POSITIVO":
            tipoSangre = "B+";
            break;
        case "B_NEGATIVO":
            tipoSangre = "B-";
            break;
        case "AB_POSITIVO":
            tipoSangre = "AB+";
            break;
        case "AB_NEGATIVO":
            tipoSangre = "AB-";
            break;
        case "O_POSITIVO":
            tipoSangre = "O+";
            break;
        case "O_NEGATIVO":
            tipoSangre = "O-";
            break;
    }

    const imc = (
        data.peso /
        ((data.talla / 100) * (data.talla / 100))
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
    const lentes = data.lentes===null?"N/A":data.lentes?"Si":"No";
    const zapatoOrtopedico  = data.zapatoOrtopedico===null?"N/A":data.zapatoOrtopedico?"Si":"No";
    const medicoFamiliar = data.nombreMedicoFamiliar===null||data.nombreMedicoFamiliar===""?"N/A":data.nombreMedicoFamiliar;
    const telefonoMedicoFamiliar = data.telefonoMedicoFamiliar===null||data.telefonoMedicoFamiliar===""?"N/A":data.telefonoMedicoFamiliar;
    if (!loadingData && haveData) {
        return (
            <>
                <div className="flex flex-col space-y-2 p-3 text-gray-500 dark:text-gray-200 ">
                    <p className="md:text-lg text-base">
                        {describeText} Datos Registrados:
                    </p>
                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="Peso (kg)"
                            value={data.peso.toFixed(2).toString()}
                        />
                        <DataMedicCard
                            title="Estatura (cm)"
                            value={data.talla.toFixed(2).toString()}
                        />
                        <DataMedicCard
                            title={IMCTitle}
                            value={imc.toString()}
                            color={imcColor()}
                        />
                        <DataMedicCard title="Tipo de Sangre" value={tipoSangre} />
                        <InstituteDataMedicCard
                            title="Institución Médica"
                            value={data.seguroMedico.replaceAll("_"," ")}
                        />
                        {/* <DataMedicCard title="Número de Seguro Social" value={data.socialSecurityNumber} /> */}
                    </div>
                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="Uso de Zapatos Ortopédicos"
                            value={zapatoOrtopedico}
                        />
                        <DataMedicCard
                            title="Datos del Médico Familiar"
                            value={`Nombre: ${medicoFamiliar} (${telefonoMedicoFamiliar})`}
                        />
                        <DataMedicCard
                            title="Uso de Lentes"
                            value={lentes}
                        />
                    </div>
                    <div>
                        Alergias registradas:{" "}
                        <span className="font-bold">{data.alergias}</span>
                    </div>
                </div>
            </>
        );
    } else if (!loadingData && !haveData) {
        return (
            <>
                <div className="flex flex-col space-y-2 p-3 text-gray-500 dark:text-gray-200">
                    <p className="md:text-lg text-gray-500 text-base">
                        {describeText} Datos Registrados:
                    </p>
                    <div className="flex gap-5 mt-2">
                        <DataMedicCard
                            title="No se ha encontrado un registro de Datos Médicos"
                            value="Sin registro médico"
                        >
                            {!error && (
                                <div
                                    onClick={() => {
                                        setError(true);
                                    }}
                                >
                                    <Button className="flex mt-10 mx-auto disabled bg-gray-500 hover:bg-gray-500 focus:ring-1 focus:ring-red-300">
                                        Registrar Datos Médicos
                                    </Button>
                                </div>
                            )}
                            {error && (
                                <div className="text-red-800 dark:text-red-200 selection:bg-red-400 font-semibold">
                                    Error: Registro no permitido. Contacta con
                                    la dirección del plantel.
                                </div>
                            )}
                        </DataMedicCard>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="flex flex-col space-y-2 p-3 text-gray-500 dark:text-gray-200 ">
                    <p className="md:text-lg text-base">
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

export default MedicCard;
/*
<DataMedicCard
                            title="Discapacidad Motriz"
                            value={data.motorDisability}
                        />
                        <DataMedicCard
                            title="Discapacidad Auditiva"
                            value={data.hearingDisability}
                        />
 */