import Card from "@/components/Card";

function PersonalCard() {
  return (
    <>
      <Card>
        <div className="flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            Nombre Completo: Rodrigo Rodolfo Rubio Haro
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            CURP: RUHR920101HDFRBR00 Fecha de Nacimiento: 01/01/1992 (29 años)
            Sexo: Hombre Grado: 3ro de Primaria Grupo: A Nacionalidad: Mexicana
            Entidad de Nacimiento: CDMX
          </p>

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
            <button className="print:hidden relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver en Google Maps
              </span>
            </button>
          </a>
        </div>
      </Card>
    </>
  );
}

export default PersonalCard;
