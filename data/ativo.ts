import { db } from "@/lib/db";

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
