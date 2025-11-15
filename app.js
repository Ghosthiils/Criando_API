 const express = require("express")
 const app = express()
 app.use(express.json())

const cardapio = [
    {
        "id":1,
        "nome": "Marmita Delicia",
        "descricao": "arroz, feijao, batata frita, bife a cavalo, ovo frito",
        "foto": "https://receitasdepesos.com.br/wp-content/uploads/2022/12/18-18-1024x640.png",
        "preco": "25.9"
    },
    {
        "id":2,
        "nome":"Marmita delicia",
        "descricao": "arroz, feijao, batata frita, cebola grelhada, ovo frito",
        "foto": "https://tse4.mm.bing.net/th/id/OIP.G5r9aHmd4fLj-r_Vf27ykAHaDm?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        "preco":25.9 
    },
    {
        "id":3,
        "nome":"Marmita delicia",
        "descricao": "arroz, feijao, salada, file de frango",
        "foto": "https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-saudavel-com-frango-grelhado-feijao-farinha-de-arroz-e-salada-de-legumes_491130-200.jpg?w=2000",
        "preco":25.9

    },
    {
        "id":4,
        "nome":"Marmita delicia",
        "descricao": "Macarrao alho e olho, calabresa",
        "foto": "https://tse1.mm.bing.net/th/id/OIP.IhVhfhCng5tV7bYDmo_8WwHaFj?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        "preco":25.9
    }
]

 app.get('/cardapio', function(req, res) {
    res.send(cardapio)
 })

 app.get('/cardapio/:id', function(req, res) {
    const id = req.params.id
    res.send(cardapio[id - 1])
 })

 app.post('/cardapio/ :id', function(req, res){
const nomeCardapio = req.body.nome
cardapio.push(nomeCardapio)
res.send(nomeCardapio)
 })

 app.post('/cardapio/inserir', (req, res) => {
    const produto = req.body.produto.trim()
    cardapio.push(produto)
    res.send(`${produto} inserido com sucesso!`)
 })

 

 app.listen(3000) 