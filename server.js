const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send('Projeto BanckEnd');
});

app.listen(PORT, () => {
   console.log(`O servidor esta rodando na porta: ${PORT}`);
});