import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { Typography } from "@material-tailwind/react";
import AlertComponent from "../elements/Alert";
import Loader from "../elements/Loader";
import { useCookies } from "react-cookie";

interface CardCargaPorLoteProps {
    title: string;
}

export const CardCargaPorLote = ({ title }: CardCargaPorLoteProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [created, setCreated] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [cookies] = useCookies(["token"]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;

        //chek if file is CSV
        if (file) {
            const fileName = file.name;
            const lastDot = fileName.lastIndexOf(".");
            const ext = fileName.substring(lastDot + 1);
            if (ext !== "csv") {
                setError(true);
                setMessage("El archivo no es un CSV");
                return;
            }
        }
        setSelectedFile(file);
    };

    const handleSubmit = async () => {
      console.log("submit");
        setLoading(true);
        const api = new SIGEAPICollection();
        const token = cookies.token;

        if (!selectedFile) {
            setError(true);
            setLoading(false);
            setMessage("No se ha seleccionado un archivo");
            return;
        }

        try {
            let response;
            response = await api.directivosCollection.executePostFileAlumnos(
                token,
                selectedFile
            );
            console.log("response: ", response);

            if (response.status === 201 || response.status === 200 || response.status === 204) {
                const data = await response.json();
                console.log(data);
                setCreated(true);
            } else {
                setError(true);
                const data = await response.json();
                console.log(data);
                setMessage("Error al cargar el archivo," + response.status);
            }
        } catch (error) {
            setError(true);
            setMessage("Error al cargar el archivo");
        }

        setLoading(false);
    };

    return (
        <>
            <div className="grid grid-rows-5 gap-4 p-5 rounded-xl shadow-xl bg-white dark:bg-slate-500 text-gray-600 dark:text-gray-200">
                <div className="row-span-1">
                    <Typography type="h1" className="text-xl">
                        Instrucciones
                    </Typography>
                    <Typography type="h1" className="text-md">
                        {title}.
                        <br />
                        Enlace del formulario:
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScDQcc6sPe5cWYgi1JLcFvD1OWWi733fiinlTcDrM8ovMv_vg/viewform"
                            target="_blank"
                            className="text-teal-600 hover:text-teal-400 dark:text-teal-500 hover:underline dark:hover:text-teal-400"
                        >
                            link al formulario
                        </a>
                    </Typography>
                    {created && (
                        <>
                            <div className="pt-10">
                                <AlertComponent
                                    bgColor="green-100 bg-opacity-40"
                                    borderColor="green-100"
                                    textColor="green-100 dark:text-gray-200"
                                    title="¡Éxito!"
                                    showMessage
                                    message={`El archivo ha sido cargado correctamente.`}
                                />
                            </div>
                        </>
                    )}
                    {error && (
                        <>
                            <div className="pt-10">
                                <AlertComponent
                                    bgColor="red-100 bg-opacity-40"
                                    borderColor="red-100"
                                    textColor="red-100 dark:text-gray-200"
                                    title="¡Error!"
                                    showMessage
                                    message={`El archivo no se ha podido cargar. ${message}`}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="text-center row-span-4 ">
                    <div className="">
                            <div className="grid grid-cols-1 ">
                                <label className="text-sm font-bold text-gray-600 dark:text-gray-200 ">
                                    Agregar Archivo CSV
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                        {loading ? (
                                            <div className="flex items-center justify-center w-full">
                                                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                                    <p className="text-gray-500 dark:text-green-200 font-semibold text-3xl">
                                                        Cargando
                                                        <Loader size="lg" />
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                            {
                                                selectedFile ? (
                                                    <div className="flex items-center justify-center w-full">
                                                        <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                                            <p className="text-gray-500 dark:text-green-200 font-semibold text-3xl">
                                                                {selectedFile.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center w-full">
                                                        <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                                            <p className="text-gray-500 dark:text-green-200 font-semibold text-3xl">
                                                                No se ha seleccionado un archivo
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                                    <p className="pointer-none text-gray-500 dark:text-gray-200  ">
                                                        <span className="text-sm">
                                                            Arrastra y suelta tu
                                                            archivo
                                                        </span>{" "}
                                                        <br /> o{" "}
                                                        <span
                                                            id=""
                                                            className="text-blue-600 dark:text-teal-300 hover:underline"
                                                        >
                                                            selecciona un
                                                            archivo
                                                        </span>{" "}
                                                        de tu computadora
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            disabled={loading}
                                            
                                        />
                                    </label>
                                </div>
                            </div>
                            <a  href="https://docs.google.com/spreadsheets/d/1gN1c_DkvYHkyTwVBo8jKt3qdBMZw7PsOX1x-UuaNJG0/copy" className="text-sm text-teal-600 hover:text-teal-400 dark:text-teal-500 hover:underline dark:hover:text-teal-400 pt-4 pointer cursor-pointer" target="_blank">
                                <span>Descargar Archivo de Ejemplo</span>
                            </a>
                            <div className="my-5 w-full flex justify-center">
                                <ButtonComponent
                                  
                                    onClick={handleSubmit}
                                    title={"Cargar"}
                                    color={"blue"}
                                ></ButtonComponent>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardCargaPorLote;
