/*
  Warnings:

  - You are about to drop the `Arquivos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Arquivos" DROP CONSTRAINT "Arquivos_codigo_cvm_fkey";

-- DropTable
DROP TABLE "Arquivos";

-- CreateTable
CREATE TABLE "Arquivo" (
    "id" SERIAL NOT NULL,
    "codigo_cvm" INTEGER NOT NULL,
    "categoria" TEXT,
    "tipo" TEXT,
    "especie" TEXT,
    "data_referencia" TIMESTAMP(3),
    "data_entrega" TIMESTAMP(3) NOT NULL,
    "status" TEXT,
    "versao" TEXT,
    "modalidade" TEXT,
    "assunto" TEXT,
    "link_arquivo" TEXT NOT NULL,

    CONSTRAINT "Arquivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Arquivo_link_arquivo_key" ON "Arquivo"("link_arquivo");

-- AddForeignKey
ALTER TABLE "Arquivo" ADD CONSTRAINT "Arquivo_codigo_cvm_fkey" FOREIGN KEY ("codigo_cvm") REFERENCES "Empresa"("codigo_cvm") ON DELETE CASCADE ON UPDATE CASCADE;
