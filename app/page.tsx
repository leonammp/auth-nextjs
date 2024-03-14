import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-6 text-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 to-amber-800">
      <h1 className="text-6xl font-semibold text-white drop-shadow-md">
        <Image 
          className="drop-shadow-lg"
          priority
          src="/logo.svg"
          alt="Logo Caverna de Valor"
          width={500}
          height={100}
        />
      </h1>
      <p className="text-white text-lg">
        <b>Eventos corporativos</b> e <b>Notícias</b> dos seus ativos em um só lugar
      </p>
      <div>
        <LoginButton asChild>
          <Button variant="secondary" size="lg">
            Entrar
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
