"use client";

import React, { useState, useEffect } from 'react';
import {Empresa, Empresa as Ativo} from "@prisma/client";
import { Button } from '@/components/ui/button';
import { Input } from  '@/components/ui/input';
import { AutoCompleteAtivos } from '@/components/auto-complete-ativos';
import { addUserAtivo, removeUserAtivo } from '@/actions/ativos';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";

interface AtivosInfoProps {
    ativos: Ativo[];
    usuarioEmpresas: Ativo[];
}

const AtivosInfo = ({ ativos, usuarioEmpresas}: AtivosInfoProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredAtivo, setFilteredAtivo] = useState<Ativo[]>([]);
    const [userAtivos, setUserAtivos] = useState<Ativo[]>(usuarioEmpresas ?? []);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const allAtivos = ativos;

    useEffect(() => {
        if (userAtivos.length) {
            setFilteredAtivo(
                userAtivos.filter((ativo) =>
                    ativo.razao_social?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ativo.ticker?.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, userAtivos]);

    const handleAddAtivo = (ativo: Ativo) => {
        addUserAtivo(ativo.codigo_cvm)
            .then((data) => {
                console.log(data)
                if (data?.error) {
                    setError(data.error);
                } else {
                    setUserAtivos((prev) => [...prev, ativo]);
                    setSuccess("Ativo adicionado com sucesso!");
                }
            })
            .catch(() => setError("Desculpe, algo deu errado!"));
    };

    const handleRemoveAtivo = (ativoId: number) => {
        removeUserAtivo(ativoId)
            .then((data) => {
                if (data?.error) {
                    setError(data.error);
                } else {
                    setUserAtivos((prev) => prev.filter((ativo) => ativo.codigo_cvm !== ativoId));
                    setSuccess(data.status);
                }
            })
            .catch(() => setError("Desculpe, algo deu errado!"));
    };

    return (
        <Card className="w-full shadow-md sm:max-w-[800px]">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-2xl font-semibold text-center">
                    Ativos ({userAtivos.length})
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
                <AutoCompleteAtivos
                    suggestions={allAtivos}
                    onSelection={handleAddAtivo}
                />
                {error && <FormError message={error}/>}
                {success && <FormSuccess message={success}/>}
                <div className="block sm:hidden">
                    {filteredAtivo.map((ativo) => (
                        <div key={ativo.codigo_cvm}
                             className="flex flex-col items-start justify-between rounded-lg border p-3 shadow-sm space-y-2">
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Ticker:</p>
                                <p>{ativo.ticker}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Empresa:</p>
                                <p>{ativo.razao_social}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="text-sm font-medium">Arquivos:</p>
                                <a href="#" className="text-blue-600 hover:underline">Ver Arquivos</a>
                            </div>
                            <Button onClick={() => handleRemoveAtivo(ativo.codigo_cvm)}>Remover</Button>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                        <tr>
                            <th className="border p-2">Ticker</th>
                            <th className="border p-2">Empresa</th>
                            <th className="border p-2">Arquivos</th>
                            <th className="border p-2">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredAtivo.map((ativo) => (
                            <tr key={ativo.codigo_cvm} className="border">
                                <td className="border p-2">{ativo.ticker}</td>
                                <td className="border p-2">{ativo.razao_social}</td>
                                <td className="border p-2">
                                    <a href="#" className="text-blue-600 hover:underline">Ver Arquivos</a>
                                </td>
                                <td className="border p-2">
                                    <Button onClick={() => handleRemoveAtivo(ativo.codigo_cvm)}>Remover</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default AtivosInfo;
