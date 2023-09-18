-- CreateTable
CREATE TABLE "Foire" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "reponse" TEXT NOT NULL,

    CONSTRAINT "Foire_pkey" PRIMARY KEY ("id")
);
