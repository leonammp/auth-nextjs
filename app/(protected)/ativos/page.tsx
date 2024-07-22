import AtivosInfo from "@/components/ativos-info";
import {fetchAtivos, fetchUserAtivos} from "@/actions/ativos";

const AtivosPage = async () => {
    const allAtivos = await fetchAtivos();
    const userAtivos = await fetchUserAtivos();

    return (
        <div className="flex justify-center p-4">
            {allAtivos.status === "success" ? (
                <AtivosInfo ativos={allAtivos.ativos} usuarioEmpresas={userAtivos.ativos}/>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default AtivosPage;
