/*
  Warnings:

  - You are about to drop the `_UsuarioEmpresa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UsuarioEmpresa" DROP CONSTRAINT "_UsuarioEmpresa_A_fkey";

-- DropForeignKey
ALTER TABLE "_UsuarioEmpresa" DROP CONSTRAINT "_UsuarioEmpresa_B_fkey";

-- DropTable
DROP TABLE "_UsuarioEmpresa";

-- CreateTable
CREATE TABLE "UsuarioEmpresa" (
    "usuario_empresa_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "empresa_id" INTEGER NOT NULL,

    CONSTRAINT "UsuarioEmpresa_pkey" PRIMARY KEY ("usuario_empresa_id")
);

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("codigo_cvm") ON DELETE RESTRICT ON UPDATE CASCADE;
