"use client";

import { AtivosInfo } from "@/components/ativos-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const AtivosPage = () => {
    const user = useCurrentUser();

    return (
        <AtivosInfo />
    );
}

export default AtivosPage;
