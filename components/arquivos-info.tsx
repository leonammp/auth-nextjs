"use client";

import {useState, useEffect} from "react";
import { Arquivo, Empresa} from "@prisma/client";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

interface ArquivoComEmpresa extends Arquivo {
    empresa: Empresa;
}

interface ArquivosInfoProps {
    arquivos: ArquivoComEmpresa[];
}


export const ArquivosInfo = ({arquivos}: ArquivosInfoProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredArquivos, setFilteredArquivos] = useState(arquivos);

    useEffect(() => {
        setFilteredArquivos(
            arquivos.filter((arquivo) =>
                arquivo.empresa.razao_social?.toLowerCase().includes(searchTerm.toLowerCase())
                ||
                arquivo.empresa.ticker?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, arquivos]);

    return (
        <Card className="w-full shadow-md sm:max-w-[800px]">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-2xl font-semibold text-center">
                    Arquivos ({arquivos.length})
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
                                <p className="text-sm font-medium">Ticker:</p>
                                <p>{arquivo.empresa.ticker}</p>
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
                    <div className="space-y-4">
                        {filteredArquivos.map((arquivo) => (
                            <a href={arquivo.link_arquivo} target="_blank" title={arquivo.assunto ?? ''} key={arquivo.id} className="p-1">
                                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <p className="font-bold">
                                            {arquivo.empresa.ticker}
                                        </p>
                                        <p className="truncate" style={{maxWidth: '50ch'}}>
                                            {arquivo.assunto || "N/A"}
                                        </p>
                                    </div>
                                    <div className="text-right space-y-0.5">
                                        <div>
                                            {new Date(arquivo.data_entrega).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};