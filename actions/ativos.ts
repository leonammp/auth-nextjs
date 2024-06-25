import {getAtivos} from "@/data/ativo";

export const fetchAtivos = async () => {
    try {
        const response = await getAtivos();
        return { ativos: response };
    } catch (error) {
        console.error(error);
        return { ativos: []};
    }
};

export const fetchUserAtivos = async () => {
    try {
        const response = await getAtivos();
        return { status: 'success', ativos: response };
    } catch (error) {
        console.error(error);
        return { status: 'error', ativos: []};
    }
};

export const addUserAtivo = async (ativoId: number) => {
    try {
        const response = await getAtivos();
        return { success: "Ativo cadastrado com sucesso!", ativos: response };
    } catch (error) {
        console.error(error);
        return { error: "Erro", ativos: []};
    }
};

export const removeUserAtivo = async (ativoId: number) => {
    try {
        const response = await getAtivos();
        return { status: "Ativo removido com sucesso", ativos: response };
    } catch (error) {
        console.error(error);
        return { error: "Ocorreu um erro", ativos: []};
    }
};
