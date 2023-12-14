import InputSearch from "@/components/template/InputSearch";
import TableGroups from "@/components/directive/TableGroups";
import PrincipalTitle from "@/components/directive/Principal.Title";
import { useGrupos } from "@/components/context/GruposProvides";
import Loader from "@/components/elements/Loader";
import CardView from "@/components/CardView";

function ConsultGroup() {
    const { grupos, loading, hayGrupos } = useGrupos();
    console.log(grupos);

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Consultar Grupos"}></PrincipalTitle>

                <InputSearch
                    route="/directive/actionsGroup/consultGroup?id="
                    searchDataAutomcomplete={[
                        ...grupos.map((grupo) => ({
                            key: grupo.idGrupo,
                            value: grupo.idGrupo,
                        })),
                        ...grupos.map((grupo) => ({
                            key: grupo.idGrupo,
                            value: `${grupo.grado} ${grupo.subGrado}`,
                        })),
                    ]}
                    comment={
                        "Recuerda que solo puedes buscar a un grupo por Grado-Grupo"
                    }
                ></InputSearch>
                {loading ? <Loader size="lg" /> : null}
                {hayGrupos && !loading ? (
                    <TableGroups groups={grupos}></TableGroups>
                ) : null}
            </CardView>
        </>
    );
}

export default ConsultGroup;
