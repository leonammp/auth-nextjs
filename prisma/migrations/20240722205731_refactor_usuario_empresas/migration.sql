/*
  Warnings:

  - You are about to drop the `UsuarioEmpresa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_codigo_cvm_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_usuario_id_fkey";

-- DropTable
DROP TABLE "UsuarioEmpresa";

-- CreateTable
CREATE TABLE "_UsuarioEmpresa" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UsuarioEmpresa_AB_unique" ON "_UsuarioEmpresa"("A", "B");

-- CreateIndex
CREATE INDEX "_UsuarioEmpresa_B_index" ON "_UsuarioEmpresa"("B");

-- AddForeignKey
ALTER TABLE "_UsuarioEmpresa" ADD CONSTRAINT "_UsuarioEmpresa_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa"("codigo_cvm") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsuarioEmpresa" ADD CONSTRAINT "_UsuarioEmpresa_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
