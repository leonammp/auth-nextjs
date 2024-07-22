import { db } from "@/lib/db";
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
                include: {
                    empresa: {
                        include: {
                            usuarios: {
                                where: {
                                    usuario_id: user.id
                                }
                            }
                        }
                    },
                }
            });
        }

        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
};
