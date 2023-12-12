import InterfaceEstado from "./estado";
import InterfaceColonia from "./colonia";

interface InterfaceDireccion {
    id: number;
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    entreCalle1: string;
    entreCalle2: string;
    referenciaExtra: string;
    colonia: InterfaceColonia;
    estado : InterfaceEstado;
}

export default InterfaceDireccion;