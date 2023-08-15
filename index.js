const { request } = require("express");

const path = require ('path');
const express = require("express");
const clientesRouter = require('./routes/clientes');
const { Public } = require("@prisma/client/runtime/library");

const app = express();
app.use(express.json());

app.use('/clientes', clientesRouter);

app.use(express.static(path,join(  dirname, 'Public')));

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
