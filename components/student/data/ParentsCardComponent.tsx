import Loader from "@/components/elements/Loader";
import SIGEAPICollection from "@/data/calls/apiHandler";
import InterfaceDireccion from "@/data/interfaces/direccion";
import InterfaceParent from "@/data/interfaces/parent";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function ParentsCardComponent({ parentInst }: { parentInst: InterfaceParent }) {
    const [cookies, setCookie] = useCookies(["token"]);
    const [loading, setLoading] = useState(false);
    const [hayDireccion, setHayDireccion] = useState(false);
    const [direccion, setDireccion] = useState<InterfaceDireccion>();
    const [parent, setParent] = useState<any>();
    let number = "";

    const fetchDireccion = async () => {
        if (!parentInst) {
            // Manejar el caso cuando parentInst es nulo o indefinido
            return null;
        }
        try {
            if (parentInst.numeros && parentInst.numeros.length > 0)
                number = "cel:" + parentInst.numeros[0].numero || "";
        } catch (error) {
            console.log(error);
        }
        setParent({
            name: `${parentInst.nombres || ""} ${
                parentInst.apellidoPaterno || ""
            } ${parentInst.apellidoMaterno || ""}`,
            email: parentInst.correo || "",
            phone: number,
            relationship: parentInst.parentesco || "",
            bloodType: "O- (Compatible)",
        });

        const api = new SIGEAPICollection();
        const token = cookies.token;
        setLoading(true);
        try {
            const response = await api.sharedCollection.executeGetAlumnos(
                token
            );
            if (response.ok) {
                console.log("Generando Lista de Alumnos");
                const data = await response.json();
                console.log(data);
                if (!data || data.length == 0) {
                    setHayDireccion(false);
                    setLoading(false);
                    return;
                } else {
                    setHayDireccion(true);
                }
                let newAlumnos: InterfaceDireccion[] = [];
                console.log("Entrando al for");

                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const newAlumno: InterfaceDireccion = {
                        id: element.id,
                        calle: element.calle,
                        numeroExterior: element.numeroExterior,
                        numeroInterior: element.numeroInterior,
                        entreCalle1: element.entreCalle1,
                        entreCalle2: element.entreCalle2,
                        referenciaExtra: element.referenciaExtra,
                        colonia: {
                            codigoPostal: element.colonia.codigoPostal,
                            municipio: element.colonia.municipio.nombre,
                            municipioId: element.colonia.municipio.municipioId,
                            estadoId: element.colonia.estado.id,
                            estado: element.colonia.estado.nombre,
                            colonias: [],
                        },
                        estado: {
                            id: element.colonia.estado.id,
                            nombre: element.colonia.estado.nombre,
                        },
                    };
                    newAlumnos.push(newAlumno);
                }
                setDireccion(newAlumnos[0]);

                console.log("Alumnos obtenidos ");
                setHayDireccion(true);
                setLoading(false);
            } else {
                console.error(
                    `Error en la solicitud. Código de estado: ${response.status}`
                );
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDireccion();
    }, []);

    return (
        <>
            <div className="mx-10 right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-2 bg-gray-800 border-b">
                        <svg
                            aria-hidden="true"
                            role="img"
                            className="h-16 w-16 text-white rounded-full mx-auto"
                            width="32"
                            height="32"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                            ></path>
                        </svg>
                        <p className="pt-2 text-lg font-semibold text-gray-50">
                            {parent.name}
                        </p>
                        <p className="text-sm text-gray-100">{parent.email}</p>
                    </div>
                    <div className="border-b">
                        {/* <Link href="/account/campaigns"> */}
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-green-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Datos de Contacto
                                </p>
                                <p className="text-xs text-gray-500">
                                    {parent.phone}
                                </p>
                            </div>
                        </div>
                        {/* </Link> */}
                        {/* <Link href="/account/donations"> */}
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Parentesco
                                </p>
                                <p className="text-xs text-gray-500">
                                    {parent.relationship}
                                </p>
                            </div>
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Tipo de Sangre
                                </p>
                                <p className="text-xs text-gray-500">
                                    O- (Compatible)
                                </p>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>

                    <div className="">
                        <a
                            // href={`https://www.google.com/maps/place/${parentInst.calle}+${parentInst.direccion.numeroExterior},+${parentInst.direccion.colonia},+${parentInst.direccion.municipio},+${parentInst.direccion.estado},+${parentInst.direccion.codigoPostal}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex"
                        >
                            <p className="flex text-sm font-medium text-gray-800 leading-none items-center">
                                {loading ? (
                                    <Loader size="sm" color="bg-green-600" />
                                ) : hayDireccion ? (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-4 h-4 inline mr-2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </svg>
                                        Abrir en Maps
                                    </>
                                ) : (
                                    <p>No hay dirección</p>
                                )}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ParentsCardComponent;
