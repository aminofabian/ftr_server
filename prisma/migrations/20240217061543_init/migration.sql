/*
  Warnings:

  - Added the required column `hashedRt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `hashedRt` VARCHAR(191) NOT NULL;
