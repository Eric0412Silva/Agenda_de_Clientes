generator client {
    provider = "prisma-client-js"
    output = "./generated/prisma-client"
}

datasourcedb {
    provider = "sqlite"
    url = "file:./dev.db"
}

model Client {
    id  int     @id @default(autoincrement())
    nome String
    cpf String
    numero String
}