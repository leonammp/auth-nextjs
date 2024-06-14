import { db } from "@/lib/db";

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
