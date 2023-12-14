
function StudentCardHeader({nombre, apellido_paterno, apellido_materno, no_boleta, estatus, grado,grupo}: any) {
  const nombreCompleto = `${nombre} ${apellido_paterno} ${apellido_materno}`;
  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 md:text-3xl text-xl">
          {nombreCompleto}
        </h3>
        <p className="text-md text-gray-400 dark:text-gray-300 ">
          No. de Boleta: {no_boleta} <span className="print:hidden">Estatus: {estatus}</span>
        </p>
      </div>
    </>
  );
}

export default StudentCardHeader;
