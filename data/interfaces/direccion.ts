import InterfaceEstado from "./estado";
import InterfaceColonia from "./colonia";

interface InterfaceDireccion {
    id: number | null;
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    entreCalle1: string;
    entreCalle2: string;
    referenciaExtra: string;
    colonia: InterfaceColonia | null;
    estado : InterfaceEstado | null;
}

export default InterfaceDireccion;