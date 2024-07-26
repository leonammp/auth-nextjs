/*
  Warnings:

  - The primary key for the `Arquivos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Arquivos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[link_arquivo]` on the table `Arquivos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo_cvm` to the `Arquivos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_entrega` to the `Arquivos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_arquivo` to the `Arquivos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Arquivos" DROP CONSTRAINT "Arquivos_pkey",
ADD COLUMN     "assunto" TEXT,
ADD COLUMN     "categoria" TEXT,
ADD COLUMN     "codigo_cvm" INTEGER NOT NULL,
ADD COLUMN     "data_entrega" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "data_referencia" TIMESTAMP(3),
ADD COLUMN     "especie" TEXT,
ADD COLUMN     "link_arquivo" TEXT NOT NULL,
ADD COLUMN     "modalidade" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "tipo" TEXT,
ADD COLUMN     "versao" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Arquivos_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Arquivos_link_arquivo_key" ON "Arquivos"("link_arquivo");

-- AddForeignKey
ALTER TABLE "Arquivos" ADD CONSTRAINT "Arquivos_codigo_cvm_fkey" FOREIGN KEY ("codigo_cvm") REFERENCES "Empresa"("codigo_cvm") ON DELETE RESTRICT ON UPDATE CASCADE;
