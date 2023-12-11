
interface SystemInfoProps {
    moduleName: string;
}

const SystemInfo: React.FC<SystemInfoProps> = ({moduleName}) => {
    return (
        <div className="m-10 p-10">
            <div className="text-4xl font-semibold">
                <h1>Sistema Integral de Gestión Escolar - SIGE</h1>
            </div>
            <div className="text-2xl ">
                <p>Desarrollado por alumnos del Instituto Politécnico Nacional</p>
                <p>Modulo: {moduleName}</p>
                <p>Versión del Sistema: 1.0.0</p>
            </div>
        </div>
    );
};

export default SystemInfo;
