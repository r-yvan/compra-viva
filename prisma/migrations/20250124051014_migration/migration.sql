/*
  Warnings:

  - You are about to drop the `administrators` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `buyers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sellers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "administrators";

-- DropTable
DROP TABLE "buyers";

-- DropTable
DROP TABLE "sellers";

-- CreateTable
CREATE TABLE "users" (
    "buyer_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("buyer_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
