import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import AlertComponent from "../elements/Alert";
import SIGEAPICollection from "@/backend-calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfacePeriodo from "@/interfaces/periodo";

interface FormCicloEscolarProps {}

export const FormCicloEscolar = ({}: FormCicloEscolarProps) => {
  const [PeriodoIniciado, setPeriodoIniciado] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // estos serían el formData
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [Preinscripciones, setPreinscripciones] = useState<boolean>(false);
  const [Calificaciones, setCalificaciones] = useState<boolean>(false);

  // const [Preinscripciones, setPreinscripciones] = useState<Date>(new Date());
  // const [Calificaciones, setCalificaciones] = useState<Date>(new Date());

  // variables para la logica
  const currentDate = new Date();
  const [warning, setWarning] = useState(false);
  const minDate = new Date(new Date());
  const maxDate = new Date(new Date().setFullYear(minDate.getFullYear()));
  endDate.setFullYear(startDate.getFullYear() + 1);

  function updateEndDate(date: Date | null) {
    setStartDate(date || new Date());
    if (date)
      setEndDate(new Date(new Date().setFullYear(date.getFullYear() + 1)));
    if (currentDate.getFullYear() - endDate.getFullYear() < -1)
      setWarning(true);
  }

  const handleSubmmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Enviando datos");
    setLoading(true);

    const periodo: InterfacePeriodo = {
      anioInicio: startDate.getFullYear(),
      anioFin: endDate.getFullYear(),
      periodoCalificaciones: Calificaciones,
      periodoPreinscripciones: Preinscripciones,
      periodoReinscripciones: false,
    };

    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executePostCycle(token);
      if (response.status === 201) {
        const data = await response.json();
        console.log(data);
        setPeriodoIniciado(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error de solicitud:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold pb-5"> Nuevo Ciclo Escolar </h4>
        <form onSubmit={handleSubmmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Año inicio del ciclo escolar:
              </label>
              <DatePicker
                locale={es}
                selected={startDate}
                onChange={(date) => {
                  updateEndDate(date);
                }}
                showYearPicker
                minDate={minDate}
                maxDate={maxDate}
                dateFormat="yyyy"
                disabled
                title="El año de finalización del ciclo escolar se calcula automáticamente"
                className="bg-green-800 bg-opacity-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

    return (
        <>
            <div className="p-5 bg-white rounded-lg">
                <h4 className="font-bold pb-5"> Nuevo Ciclo Escolar </h4>
                <form onSubmit={handleSubmmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor=""
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Año inicio del ciclo escolar:
                            </label>
                            <DatePicker
                                locale={es}
                                selected={startDate}
                                onChange={(date) => {
                                    updateEndDate(date);
                                }}
                                showYearPicker
                                minDate={minDate}
                                maxDate={maxDate}
                                dateFormat="yyyy"
                                
                                title="El año de finalización del ciclo escolar se calcula automáticamente"
                                className="bg-green-800 bg-opacity-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor=""
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Año de finalización del ciclo escolar:
                            </label>
                            <DatePicker
                                locale={es}
                                selected={endDate}
                                onChange={() => console.log()}
                                showYearPicker
                                dateFormat="yyyy"
                                
                                title="El año de finalización del ciclo escolar se calcula automáticamente"
                                className="bg-green-800 bg-opacity-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <div>
                                <span className="block mb-2 text-sm font-medium text-gray-900">
                                    Opciones del escolar:
                                </span>
                                <input
                                    name="Preinscripciones"
                                    id="Preinscripciones"
                                    type="checkbox"
                                    className="mr-2"
                                    checked={Preinscripciones || false}
                                    onChange={(e) => {
                                        setPreinscripciones(
                                            e.target.checked || false
                                        );
                                    }}
                                ></input>
                                <label htmlFor="Preinscripciones">
                                    Activar Periodo Preinscripciones
                                </label>
                                {/* <DatePicker
                                    locale={es}
                                    selected={Preinscripciones}
                                    onChange={(date) =>
                                        setPreinscripciones(date || new Date())
                                    }
                                    minDate={startDate}
                                    maxDate={endDate}
                                    dateFormat="dd/MM/yyyy"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                /> */}
              </div>

              <div className="pt-1">
                <input
                  name="Calificaciones"
                  id="Calificaciones"
                  type="checkbox"
                  className="mr-2"
                  checked={Calificaciones || false}
                  onChange={(e) => {
                    setCalificaciones(e.target.checked || false);
                  }}
                ></input>
                <label htmlFor="Calificaciones">
                  Activar Periodo Calificaciones
                </label>
                {/* <DatePicker
                                    locale={es}
                                    selected={Calificaciones}
                                    onChange={(date) =>
                                        setCalificaciones(date || new Date())
                                    }
                                    minDate={startDate}
                                    maxDate={endDate}
                                    dateFormat="dd/MM/yyyy"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                /> */}
                <span className="block my-2 text-sm font-medium text-green-900">
                  Ambas opciones podrán habilitarse más tarde si así se desea.
                </span>
              </div>
            </div>
          </div>
          {warning && (
            <>
              <div className="pt-10">
                <AlertComponent
                  bgColor="orange-100 bg-opacity-40"
                  borderColor="orange-100"
                  textColor="orange-100"
                  title="¡Cuidado!"
                  message=" El ciclo escolar actual no coincide con el año actual, ¿Aún así deseas continuar?"
                />
              </div>
            </>
          )}
          {PeriodoIniciado && (
            <>
              <div className="pt-10">
                <AlertComponent
                  bgColor="green-100 bg-opacity-40"
                  borderColor="green-100"
                  textColor="green-100"
                  title="¡Éxito!"
                  message=" El ciclo escolar ha sido iniciado correctamente."
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
                  textColor="red-100"
                  title="¡Error!"
                  message=" El ciclo escolar no pudo ser iniciado."
                />
              </div>
            </>
          )}
          <div className="text-center pt-10">
            <ButtonComponent
              type="submit"
              title={"Crear"}
              color={"blue"}
              loading={loading}
            ></ButtonComponent>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCicloEscolar;
