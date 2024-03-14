import Image from "next/image";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 to-amber-800">
            <h1 className="drop-shadow-md">
                <Image 
                    className="drop-shadow-lg"
                    priority
                    src="/logo.svg"
                    alt="Logo Caverna de Valor"
                    width={500}
                    height={1}
                />
            </h1>
            <div className="pt-7">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;