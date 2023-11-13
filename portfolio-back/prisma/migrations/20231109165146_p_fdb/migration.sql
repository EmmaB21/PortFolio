-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technos" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "lien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "lien" TEXT NOT NULL,
    "projectId" INTEGER,
    CONSTRAINT "lien_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
