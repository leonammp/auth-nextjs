import { db } from "@/lib/db";
import {currentUser} from "@/lib/auth";
import {logout} from "@/actions/logout";
import {signOut} from "@/auth";

export const getAtivos = async () => {
    try {
        return await db.empresa.findMany({
            where: {
                ticker: {
                    not: null
                }
            },
        });
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getUserAtivos = async () => {
    try {
        const user = await currentUser();

        const usuarioAtivos = await db.usuarioEmpresa.findMany({
            where: {
                usuario_id: user?.id
            },
            select: {
                empresa: true
            }
        });

        return usuarioAtivos.map((ua) => ua.empresa);
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const addUserAtivos = async (codigo_cvm: number) => {
  try {
        const user = await currentUser();

        if (user?.id) {
            await db.usuarioEmpresa.create({
                data: {
                    usuario_id: user.id,
                    codigo_cvm: codigo_cvm
                }
            });
        }

        return [];
  } catch (error) {
      console.error(error);
      return [];
  }
};

export const removeUserAtivos = async (codigo_cvm: number) => {
    try {
        const user = await currentUser();

        if (user?.id) {
            await db.usuarioEmpresa.deleteMany({
                where: {
                    usuario_id: user.id,
                    codigo_cvm: codigo_cvm
                }
            });
        }

        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
}