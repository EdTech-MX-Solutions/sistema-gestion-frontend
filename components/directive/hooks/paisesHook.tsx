import SIGEAPICollection from "@/api/apiHandler";
import InterfacePais from "@/interfaces/pais";
import { useEffect, useState } from "react";

interface Pais {
  pais: InterfacePais;
}

export const PaisesHook = (cookies: any) => {
  const [paises, setPaises] = useState<Pais[]>([]);

  const fetchPaises = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response = await api.sharedCollection.executeGetSEPOMEXPaises(
        token
      );
      if (response.ok) {
        console.log("Generando lista de paises");
        const data = await response.json();
        console.log(data);
        if (!data || data.length == 0) {
          console.error("Respuesta fallida");
          return;
        }
        setPaises(data);
      } else {
        console.error(
          `Error en la solicitud. Código de estado: ${response.status}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPaises();
  }, [cookies.token]);

  return paises;
};