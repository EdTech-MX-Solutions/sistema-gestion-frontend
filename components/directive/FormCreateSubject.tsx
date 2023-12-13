import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { useCookies } from "react-cookie";
import InterfacePeriodo from "@/data/interfaces/periodo";
import SIGEAPICollection from "@/data/calls/apiHandler";
import Loader from "../elements/Loader";
import Link from "next/link";
import { usePeriodo } from "../context/PeriodoProvider";
import { Button, Input, Typography } from "@material-tailwind/react";
import InterfaceMateria from "@/data/interfaces/materia";

interface FormCreateSubjectProps {
    autoStart?: boolean;
}

export const FormCreateSubject = ({ autoStart }: FormCreateSubjectProps) => {
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [nombreMateria, setNombreMateria] = useState<string>("");
    const [nivel, setNivel] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const periodo = usePeriodo();

    const currentDate = new Date();
    const [warning, setWarning] = useState(false);
    const minDate = new Date(new Date());
    const maxDate = new Date(new Date().setFullYear(minDate.getFullYear()));

    const title = "Ciclo Escolar Iniciado";
    const subtitle = "¡Bienvenido al nuevo ciclo escolar!";

    const handleSubmmit = async () => {
        setLoading(true);
        console.log("Enviando datos de inicio de ciclo escolar...");

        const api = new SIGEAPICollection();
        const token = cookies.token;
        const materia: InterfaceMateria = {
            clave: "",
            nombre: nombreMateria,
            nivel: nivel,
        };

        try {
            const response = await api.directivosCollection.executePostMaterial(
                token,
                materia
            );
            if (response.status === 201) {
                const data = await response.json();
                console.log(data);
            } else {
                setError(true);
                console.log("Error al crear la materia");
                console.log(materia);
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        console.log("AutoStart:", autoStart);
        if (autoStart) {
            console.log("Starting...");
            handleSubmmit();
        }
    }, []);

    if (loading) {
        return (
            <>
                <Loader />
            </>
        );
    } else {
        return (
            <>
                <div className="mt-10 p-5 bg-white  dark:bg-slate-500 dark:text-gray-200 rounded-lg">
                    <div className="bg-white dark:bg-slate-500 dark:text-gray-200 p-6  md:mx-auto">
                        <Typography variant="h4" color="blue-gray">
                            Registro de nueva materia
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal dark:text-gray-200">
                            Recuerda que las materias deben estar reglamentadas
                            por la Secretaría de Educación Pública.
                            <br />
                            Para más información consulta el siguiente enlace:{" "}
                            <Link
                                className="text-green-700 text-green-200"
                                href="https://www.sep.gob.mx/es/sep1/Reglamento_de_la_Ley_General_de_Educacion"
                            >
                                Ley General de Educación{" "}
                            </Link>
                            o bien el siguiente enlace:
                            <Link
                                className="text-green-700 text-green-200 pl-2"
                                href="https://www.gob.mx/sep/acciones-y-programas/primaria-educacion-basica"
                            >
                                Educación Básica (2023)
                            </Link>
                        </Typography>
                        <form className="mt-8 mb-2 ">
                            <div className="mb-1 flex flex-col sm:flex-row gap-4 items-end">
                                <div className="w-full">
                                    <label htmlFor="nombre-materia">
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                        >
                                            Nombre de la Materia
                                        </Typography>
                                    </label>
                                    <Input
                                        id="nombre-materia"
                                        size="lg"
                                        placeholder="Ejemplo: Lenguajes"
                                        value={nombreMateria}
                                        onChange={(e) =>
                                            setNombreMateria(e.target.value)
                                        }
                                        className=" focus:border-secondary"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="w-full ">
                                    <label htmlFor="nivel">
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                        >
                                            Nivel
                                        </Typography>
                                    </label>
                                    <select
                                        name="nivel"
                                        id="nivel"
                                        required
                                        value={nivel}
                                        onChange={(e) =>
                                            setNivel(e.target.value)
                                        }
                                        className="w-full bg-transparent border border-gray-300 text-gray-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5"
                                    >
                                        <option disabled selected>
                                            Selecciona una opción
                                        </option>
                                        <option key={1} value={"Primero"}>
                                            Primero
                                        </option>
                                        <option key={2} value={"Segundo"}>
                                            Segundo
                                        </option>
                                        <option key={3} value={"Tercero"}>
                                            Tercero
                                        </option>
                                        <option key={4} value={"Cuarto"}>
                                            Cuarto
                                        </option>
                                        <option key={5} value={"Quinto"}>
                                            Quinto
                                        </option>
                                        <option key={6} value={"Sexto"}>
                                            Sexto
                                        </option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <Button onClick={
                                        handleSubmmit
                                    } className="bg-secondary text-gray-700">
                                        Registrar
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
};

export default FormCreateSubject;
