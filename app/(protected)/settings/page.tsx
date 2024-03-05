"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const user = useCurrentUser();

    const onClick = async () => {
        await logout();
    }

    return (
        <div>
            <p>
                {JSON.stringify(user)}
            </p>
            <button onClick={onClick} type="submit">
                Sign out
            </button>
        </div>
    );
}

export default SettingsPage;
