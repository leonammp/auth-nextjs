import AtivosInfo from "@/components/ativos-info";
import { fetchUserAtivos } from "@/actions/ativos";

const AtivosPage = async () => {
    const data = await fetchUserAtivos();

    return (
        <div className="flex justify-center p-4">
            {data.status === "success" ? (
                <AtivosInfo ativos={data.ativos}/>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default AtivosPage;
