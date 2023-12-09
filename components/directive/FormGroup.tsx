import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceGrupo from "@/interfaces/grupos";
import { useGrupos } from "../context/GruposProvides";
import { useRouter } from "next/router";

interface FormGroupProps {
  grupo: InterfaceGrupo;
  isNewGroup: boolean;
}

export const FormGroup = ({ grupo, isNewGroup }: FormGroupProps) => {

  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    idGrupo: isNewGroup ? "" : grupo.idGrupo,
    grado: isNewGroup ? "" : grupo.grado,
    subGrado: isNewGroup ? "" : grupo.subGrado,
    turno: isNewGroup ? "" : grupo.turno,
    responsable: isNewGroup ? "" : grupo.responsable,
    idResponsable: isNewGroup ? "" : grupo.idResponsable,
    cupos: isNewGroup ? "" : grupo.cupos,
    salon: isNewGroup ? "" : grupo.salon,
    inscritos: isNewGroup ? "" : grupo.inscritos,
    cicloEscolar: isNewGroup ? "" : grupo.cicloEscolar,
  });

  const { grupos } = useGrupos();
  
  useEffect(() => {
    if(id && grupos && grupos.length > 0){
      const foundGroup = grupos.find((grupo) => grupo.idGrupo == id);
      if(foundGroup){
        setFormData(foundGroup);
      }else{
        console.error(`No se encontro un grupo con la ID: ${id}`);
      }
    }
  },[id, grupos]);

  console.log(grupo);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 items-center px-5 pt-5">
          <div>
            <label
              htmlFor="grado"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grado<span>*</span>:
            </label>
            <input
              type="text"
              name="grado"
              id="grado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.grado}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="subGrado"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grupo<span>*</span>:
            </label>
            <input
              type="text"
              name="subGrado"
              id="subGrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.subGrado}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="turno"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Turno<span>*</span>:
            </label>
            <input
              type="text"
              name="turno"
              id="turno"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.turno}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="responsable"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Responsable:
            </label>
            <input
              type="text"
              name="responsable"
              id="responsable"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.responsable}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="salon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Salon:
            </label>
            <input
              type="text"
              name="salon"
              id="salon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.salon}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center">
          <ButtonComponent title={"Guardar"} color={"blue"}></ButtonComponent>
        </div>
      </form>
    </>
  );
};

export default FormGroup;
