"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    BackpackIcon,
    LayersIcon,
    IdCardIcon
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-10 z-50 bg-secondary sm:rounded-lg shadow-sm w-full sm:w-[640px]">
            <nav>
                <div className="flex flex-row">
                    <Link href="/ativos" className={cn(
                        "flex-1 flex flex-col items-center p-5 rounded-l-lg hover:bg-slate-200",
                        pathname == '/ativos' ? 'bg-slate-300 ': ''
                        )}>
                        <div className="flex items-center justify-center w-full">
                            <LayersIcon className="h-6 w-6"/>
                        </div>
                        <label className="mt-2 text-xl text-gray-700 font-semibold cursor-pointer">Ativos</label>
                    </Link>
                    <Link href='/arquivos' className={cn(
                        "flex-1 flex flex-col items-center p-5 hover:bg-slate-200",
                        pathname == '/arquivos' ? 'bg-slate-300 ': ''
                        )}>
                        <div className="flex items-center justify-center w-full">
                            <BackpackIcon className="h-6 w-6"/>
                        </div>
                        <label className="mt-2 text-xl text-gray-700 font-semibold cursor-pointer">Arquivos</label>
                    </Link>
                    <Link href="/noticias" className={cn(
                        "flex-1 flex flex-col items-center p-5 rounded-r-lg hover:bg-slate-200",
                        pathname == '/noticias' ? 'bg-slate-300 ': ''
                        )}>
                        <div className="flex items-center justify-center w-full">
                            <IdCardIcon className="h-6 w-6"/>
                        </div>
                        <label className="mt-2 text-xl text-gray-700 font-semibold cursor-pointer">Notícias</label>
                    </Link>
                </div>
            </nav>
        </div>
    );
}