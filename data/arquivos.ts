import {db} from "@/lib/db";
import {currentUser} from "@/lib/auth";

export const getArquivos = async () => {
    try {
        return await db.arquivo.findMany({
            include: {
                empresa: true,
            }
        });
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getArquivosUsuarioEmpresa = async () => {
    try {
        const user = await currentUser();

        if (user?.id) {
            return await db.arquivo.findMany({
                where: {
                    empresa: {
                        UsuarioEmpresa: {
                            some: {
                                usuario_id: user.id,
                            },
                        },
                    },
                },
                include: {
                    empresa: true,
                },
                orderBy: {
                    data_entrega: "desc",
                }
            });
        }

        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
};
