require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require('express'); 
const app = express();
	
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/usuarios/:celular', async (req, res) => {
    const customer = await db.selectCustomer(req.params.celular);
    res.json(customer);
});

app.get('/usuarios', async (req, res) => { 
    const customers = await db.selectCustomers();
    res.json(customers);
});

app.delete('/usuarios/:celular', async (req, res) => {
    await db.deleteCustomer(req.params.celular);
    res.sendStatus(204);
});

app.post('/usuarios', async (req, res) => {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
});

app.patch('/usuarios/:celular', async (req, res) => {
    await db.updateCustomer(req.params.celular, req.body);
    res.sendStatus(200);
});

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

