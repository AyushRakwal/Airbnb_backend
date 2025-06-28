/*
  Warnings:

  - You are about to drop the column `totalGuests` on the `booking` table. All the data in the column will be lost.
  - Added the required column `totalGuest` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` DROP COLUMN `totalGuests`,
    ADD COLUMN `totalGuest` INTEGER NOT NULL;
