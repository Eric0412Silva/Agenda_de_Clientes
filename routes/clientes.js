const express = require('express');
const {PrismaClient} = require('@prisma/client');
const req = require('express/lib/request');
const prisma = new PrismaClient();

const router = express.Router();
router.get('/', async(req, res) => {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
});

router.post('/', async (req, res) => {
    const {nome, cpf, numero } = req.body;
    const cliente = await prisma.cliente.create({
        data: {nome, cpf, numero }});
    res.json(cliente);
});

module.exports = router;