import InterfaceMunicipio from "./municipio";
import InterfaceEstado from "./estado";

interface InterfaceColonia{
    codigoPostal: string;
    colonias: string[];
    municipioId: string,
    municipio: string,
    estadoId: number,
    estado: string,
}

export default InterfaceColonia