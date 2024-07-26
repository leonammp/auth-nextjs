import { ArquivosInfo } from "@/components/arquivos-info";
import {arquivos, arquivosUsuarioEmpresa} from "@/actions/arquivos";

const ArquivosPage = async () => {
    const data = await arquivosUsuarioEmpresa();

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
