const express = require("express")
const app = express()

//Rota principal
app.get("/", (req, res) =>{
    res.send("Olá, este é o servidor express.")
})

//Simula um "Banco de dados" em memória
let produtos =[
{id: 1, nome:"Mouse"},
{id: 2, nome:"Teclado"}
]
//GET - Lista de Produtos
app.get('/api/produtos', (req, res)=>{
    console
    res.json(produtos);
});

//POST
app.get('/api/produtos',(req, res)=>{
    const novoProduto ={
        id:produtos.length +1,
        nome:req.body.nome
    };
    produtos.push(NovoProduto);
    res.status(201).json(novoProduto);
})

//PUT

//DELETE

//rota "sobre"
app.get("/sobre", (req,res) =>{
    res.send("pagina sobre")
})

//rota produto
app.get("/produtos", (req,res)=>{
    res.send("lista de produtos")
})

//rota que retorna JSON (SIMULA UMA API)
app.get("/api/produtos", (req,res)=>{
    const produtos = [
        {id: 1,nome:"mouse"},
        {id: 2,nome:"teclado"}
    ]
    res.json(produtos)
})

//inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log("Servidor rodando http://localHost:3000")
})