"use server";

import {addUserAtivos, getAtivos, getUserAtivos, removeUserAtivos} from "@/data/ativo";

export const fetchAtivos = async () => {
    try {
        const response = await getAtivos();
        return { status: 'success', ativos: response };
    } catch (error) {
        console.error(error);
        return { status: 'error', ativos: []};
    }
};

export const fetchUserAtivos = async () => {
    try {
        const response = await getUserAtivos();
        return { status: 'success', ativos: response };
    } catch (error) {
        console.error(error);
        return { status: 'error', ativos: []};
    }
};

export const addUserAtivo = async (ativoId: number) => {
    try {
        await addUserAtivos(ativoId);
        return { success: "Ativo cadastrado com sucesso!"};
    } catch (error) {
        console.error(error);
        return { error: "Erro" };
    }
};

export const removeUserAtivo = async (ativoId: number) => {
    try {
        const response = await removeUserAtivos(ativoId);
        return { status: "Ativo removido com sucesso", ativos: response };
    } catch (error) {
        console.error(error);
        return { error: "Ocorreu um erro", ativos: []};
    }
};
