import { ArquivosInfo } from "@/components/arquivos-info";
import { arquivos } from "@/actions/arquivos";

const ArquivosPage = async () => {
    const data = await arquivos();

    return (
        <div className="flex justify-center p-4">
            {data.status === "success" ? (
                <ArquivosInfo arquivos={data.arquivos} />
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default ArquivosPage;
