
function StudentCardHeader({nombres, apellidoPaterno, apellidoMaterno, noBoleta, estatus, grado,grupo}: any) {
  const nombreCompleto = `${nombres} ${apellidoPaterno} ${apellidoMaterno}`;
  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 md:text-3xl text-xl">
          {nombreCompleto}
        </h3>
        <p className="text-md text-gray-400 dark:text-gray-300 ">
          No. de Boleta: {noBoleta} <span className="print:hidden">Estatus: {estatus}</span>
        </p>
      </div>
    </>
  );
}

export default StudentCardHeader;
