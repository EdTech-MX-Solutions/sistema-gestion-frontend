import InterfaceAlumno from "@/interfaces/alumno";

function PersonalData({ alumno }: { alumno: InterfaceAlumno }) {
  return (
    <>
      <div className="pt-5 pb-10 mt-5 -ml-6 -mr-6 pl-6 bg-green-100 bg-opacity-40 md:text-xl text-gray-900 text-base">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-1">
            <p>
              CURP:<b> {alumno.curp}</b>{" "}
            </p>
          </div>
          <div className="p-1">
            <p>
              Pais de Origen: <b> {alumno.pais_origen}</b>{" "}
            </p>
          </div>
          <div className="p-1">
            <p>
              Entidad de Nacimiento: <b> {alumno.entidad_nacimiento}</b>{" "}
            </p>
          </div>

          <div className="p-1">
            <p>
              Sexo:<b> {alumno.sexo}</b>{" "}
            </p>
          </div>
          <div className="p-1">
            <p>
              Años en Preescolar:<b> {alumno.aniosPreescolar}</b>{" "}
            </p>
          </div>
          <div className="p-1">
            <p>
              Fecha de Nacimiento:<b> {alumno.fecha_nacimiento}</b> ( {alumno.edad} años) {" "}
            </p>
          </div>
        </div>
      </div>
      <h3 className="font-black text-gray-800 md:text-3xl text-xl">
        Dirección:
      </h3>
      <p className="md:text-lg text-gray-500 text-base">
        Calle: Av. 1 # 1 Colonia: Col. 1 C.P.: 12345 Municipio: CDMX
      </p>
      <a
        href="https://www.google.com/maps/place/Arica+68,+Tepeyac+Insurgentes,+Gustavo+A.+Madero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Ver en Google Maps
          </span>
        </button>
      </a>
    </>
  );
}

export default PersonalData;
