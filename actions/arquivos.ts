"use server";

import { getArquivos } from "@/data/arquivos";

export const arquivos = async () => {
    try {
        const response = await getArquivos();
        return { status: "success", arquivos: response };
    } catch (error) {
        console.error(error);
        return { status: "error", arquivos: [] };
    }
};
