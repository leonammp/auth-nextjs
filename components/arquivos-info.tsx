"use client";

import {useState, useEffect} from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

interface ArquivosInfoProps {
    arquivos: {
        id: number;
        codigo_cvm: number;
        empresa: { razao_social: string };
        categoria: string | null;
        tipo: string | null;
        especie: string | null;
        data_referencia: Date | null;
        data_entrega: Date;
        status: string | null;
        versao: string | null;
        modalidade: string | null;
        assunto: string | null;
        link_arquivo: string;
    }[];
}

export const ArquivosInfo = ({arquivos}: ArquivosInfoProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredArquivos, setFilteredArquivos] = useState(arquivos);

    useEffect(() => {
        setFilteredArquivos(
            arquivos.filter((arquivo) =>
                arquivo.empresa.razao_social.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, arquivos]);

    return (
        <Card className="w-full shadow-md sm:max-w-[800px]">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-2xl font-semibold text-center">
                    Arquivos
                </p>
                <input
                    type="text"
                    placeholder="Pesquisar Empresa"
                    className="mt-2 sm:mt-0 p-2 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </CardHeader>
            <CardContent className="space-y-4 w-full max-h-[350px] overflow-y-auto sm:max-h-[500px]">
                <div className="block sm:hidden">
                    {filteredArquivos.map((arquivo) => (
                        <div key={arquivo.id}
                             className="flex flex-col items-start justify-between rounded-lg border p-3 shadow-sm space-y-2">
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Empresa:</p>
                                <p>{arquivo.empresa.razao_social}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Data de Entrega:</p>
                                <p>{new Date(arquivo.data_entrega).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Assunto:</p>
                                <p>{arquivo.assunto || "N/A"}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Link do Arquivo:</p>
                                <a href={arquivo.link_arquivo} target="_blank"
                                   className="text-blue-600 hover:underline">Acessar Arquivo</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                        <tr>
                            <th className="border p-2">Empresa</th>
                            <th className="border p-2">Data de Entrega</th>
                            <th className="border p-2">Link do Arquivo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredArquivos.map((arquivo) => (
                            <>
                                <tr key={arquivo.id} className="border">
                                    <td className="border p-2">{arquivo.empresa.razao_social}</td>
                                    <td className="border p-2">{new Date(arquivo.data_entrega).toLocaleDateString()}</td>
                                    <td className="border p-2">
                                        <a href={arquivo.link_arquivo} target="_blank"
                                           className="text-blue-600 hover:underline">Acessar Arquivo</a>
                                    </td>
                                </tr>
                                <tr key={arquivo.id + "-assunto"} className="border mb-2">
                                    <td className="border p-2" colSpan={3}>
                                        <span className="font-medium">Assunto: </span>
                                        {arquivo.assunto || "N/A"}
                                    </td>
                                </tr>
                            </>
                        ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};