
function StudentCardHeader({nombre, apellido_paterno, apellido_materno, no_boleta, estatus}: any) {
  const nombreCompleto = `${nombre} ${apellido_paterno} ${apellido_materno}`;
  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800 md:text-3xl text-xl">
          {nombreCompleto}
        </h3>
        <p className="text-md text-gray-400 ">
          No. de Boleta: {no_boleta} Estatus: {estatus}
        </p>
      </div>
    </>
  );
}

export default StudentCardHeader;
