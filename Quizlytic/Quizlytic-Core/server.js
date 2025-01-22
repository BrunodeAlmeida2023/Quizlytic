import express from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const testConnection = async () => {
    try {
        // Tenta uma query básica no banco
        await prisma.$connect();
        console.log("Conexão com o banco de dados bem-sucedida!");
    } catch (error) {
        console.error("Erro ao conectar com o banco de dados:", error.message);
    } finally {
        await prisma.$disconnect();
    }
};

testConnection();

const app = express();

app.use(express.json())

app.listen(process.env.PORT, ( ) => {
    console.log('aoba')
})
