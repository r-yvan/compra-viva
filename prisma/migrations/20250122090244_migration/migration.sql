/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products";

-- CreateTable
CREATE TABLE "products" (
    "product_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);
