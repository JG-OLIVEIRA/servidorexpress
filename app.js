const express = require('express');
const axios = require('axios');
const app = express();
let requisitador = axios.create()


requisitador.get('https://pokeapi.co/api/v2/pokemon').then((listaDePokemons) => {
    app.get('/pokemon', (req, res) =>{
        const {nome} = req.query
        let listaRetorno = listaDePokemons.data.results.filter(i => i.name.includes(nome || ''))
        return res.json(listaRetorno)
})})


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})