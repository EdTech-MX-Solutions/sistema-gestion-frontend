// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useAlumno } from "@/components/context/AlumnoProvider";
import { use, useEffect, useState } from "react";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [cookies, setCookies] = useCookies(["rol"]);
    // const tipoUsuario = cookies.rol;
    const { alumnoActual, setAlumnoActual, alumnos } = useAlumno();
    const cambioDeAlumno = (e: { target: { value: string } }) => {
        const nuevoAlumno = alumnos.find(
            (alumno) => alumno.noBoleta === e.target.value
        );
        if (nuevoAlumno !== undefined) {
            setAlumnoActual(nuevoAlumno);
        }
    };

    useEffect(() => {
        setTipoUsuario(cookies.rol || "")
    } , []);

    const SelectAlumnos = () => {
        
        return tipoUsuario === "TUTOR" ? (
            <>
                <div className=" flex w-full text-gray-600 dark:text-gray-200  focus-within:text-gray-400">
                    {
                        alumnos.length > 0 ? (
                        <select
                        id="selectAlumnos"
                        name="selectAlumnos"
                        className="bg-gray-50 dark:bg-slate-600 border border-gray-300 dark:border-transparent dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-50 w-full p-2.5"
                        value={alumnoActual.noBoleta}
                        onChange={cambioDeAlumno}
                        placeholder="Selecciona un alumno"
                    >
                        {alumnos.length > 0 ? (
                            alumnos.map((alumno) => {
                                return (
                                    <option
                                        key={alumno.noBoleta}
                                        value={alumno.noBoleta}
                                    >
                                        Alumno: {" "}
                                        {alumno.nombres}{" "}
                                        {alumno.apellidoPaterno}{" "}
                                        {alumno.apellidoMaterno}
                                    </option>
                                );
                            })
                        ) : (
                            <option key={0} value={""} disabled={true}>
                                No hay alumnos registrados
                            </option>
                        )}
                    </select>

                        ) :
                        (
                            <></>
                        )}
                            
                </div>
            </>
        ) : (
            <>
                <input
                    id="search"
                    type="search"
                    name="q"
                    className="cursor-pointer py-2 text-sm bg-transparent text-black dark:text-white rounded-md pl-10 focus:outline-none focus:cursor-auto dark:focus:bg-slate-600 focus:bg-secondary focus:bg-opacity-50 dark:focus:text-gray-200"
                    placeholder="Buscar..."
                    autoComplete="off"
                />
                <label
                    htmlFor="search"
                    className="absolute inset-y-0 left-0 flex items-center pl-2"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </label>
            </>
        );
    };

    return (
        <header className="print:hidden sticky top-0 z-50 flex w-full bg-white dark:bg-slate-500 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between p-4 pl-2 shadow-2 md:pr-6 2xl:pr-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="z-50 block rounded-sm border border-stroke bg-white dark:bg-slate-700 p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                            <span className="du-block absolute right-0 h-full w-full">
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen &&
                                        "!w-full delay-300"
                                    }`}
                                ></span>
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen &&
                                        "delay-400 !w-full"
                                    }`}
                                ></span>
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen &&
                                        "!w-full delay-500"
                                    }`}
                                ></span>
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <span className="absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen && "!h-0 !delay-[0]"
                                    }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                                        !props.sidebarOpen && "!h-0 !delay-200"
                                    }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Link className="block flex-shrink-0 dark:hidden lg:hidden" href="/">
                        <img src="/logo.png" className="w-20" alt="Logo" />
                    </Link>
                    <Link className="block flex-shrink-0  lg:hidden" href="/">
                        <img src="/logo.dark.png" className="w-20" alt="Logo" />
                    </Link>
                </div>

                <div className="hidden sm:block">
                    <form action="" method="POST">
                        <div className="relative">
                            <button className="absolute top-1/2 left-0 -translate-y-1/2">
                                <svg
                                    className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                        fill=""
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                        fill=""
                                    />
                                </svg>
                            </button>
                            <div className="flex  items-center justify-center">
                                <Link href="/">
                                    <div className=" relative w-full text-gray-600 dark:text-gray-200 focus-within:text-gray-400">
                                        <button className="flex items-center py-2 px-2 rounded-xl mx-2 focus:outline-none focus:cursor-auto dark:focus:bg-slate-600 focus:bg-secondary focus:bg-opacity-50 dark:focus:text-gray-200">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </Link>
                                <div className=" relative w-full text-gray-600 dark:text-gray-200 focus-within:text-gray-400">
                                    <SelectAlumnos></SelectAlumnos>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        {/* <!-- Dark Mode Toggler --> */}
                        {/* <DarkModeSwitcher /> */}
                        {/* <!-- Dark Mode Toggler --> */}

                        {/* <!-- Notification Menu Area --> */}
                        {/* <DropdownNotification /> */}
                        {/* <!-- Notification Menu Area --> */}

                        {/* <!-- Chat Notification Area --> */}
                        {/* <DropdownMessage /> */}
                        {/* <!-- Chat Notification Area --> */}
                    </ul>

                    {/* <!-- User Area --> */}
                    {/* <DropdownUser /> */}
                    {/* <!-- User Area --> */}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-teal-500"></div>
        </header>
    );
};

export default Header;
