 const express = require("express")
 const app = express()
 app.use(express.json())

 const marmitas = [
    {
        "id": 1,
        "nome": "Marmita Caseira",
        "descricao": "arroz, feijão, bife acebolado, salada",
        "foto": "https://blog.sc.senac.br/wp-content/uploads/2014/06/Arrozfeijaobifesalada.jpg",
        "preco": 24.9
    },
    {
        "id": 2,
        "nome": "Marmita Fit",
        "descricao": "arroz integral, frango grelhado, legumes cozidos",
        "foto": "https://i.pinimg.com/originals/f3/b9/ea/f3b9ead66e0b332723dd8903d3940f3f.jpg",
        "preco": 27.9
    },
    {
        "id": 3,
        "nome": "Marmita Nordestina",
        "descricao": "arroz, feijão tropeiro, carne de sol, mandioca",
        "foto": "https://img.freepik.com/fotos-premium/carne-de-sol-com-feijao-arroz-farofa-mandioca-e-vinagrete-carne-de-sol-nordeste-brasileiro_491130-4384.jpg?w=1380",
        "preco": 29.9
    },
    {
        "id": 4,
        "nome": "Marmita Frango Crispy",
        "descricao": "arroz, feijão, frango crocante, batata frita",
        "foto": "https://img.freepik.com/fotos-premium/delicioso-prato-executivo-de-file-de-frango-arroz-feijao-batata-frita-e-salada-verde-com-alface-tomate-e-cebola-acompanhado-de-farofa-e-vinagrete-comida-tipica-brasileira-foco-seletivo_442713-6085.jpg?w=2000",
        "preco": 26.9
    }
]
const saladas = [
    {
        "id": 1,
        "nome": "Salada Tropical",
        "descricao": "alface, manga, frango desfiado, molho de maracujá",
        "foto": "https://img.freepik.com/fotos-gratis/salada-de-frango-com-manga_2829-13628.jpg",
        "preco": 18.9
    },
    {
        "id": 2,
        "nome": "Salada Caesar",
        "descricao": "alface, frango grelhado, croutons, molho caesar",
        "foto": "https://tse2.mm.bing.net/th/id/OIP.6dkao6YxoaliBK3s7_8cHAHaFX?rs=1&pid=ImgDetMain&o=7&rm=3",
        "preco": 19.9
    },
    {
        "id": 3,
        "nome": "Salada Fitness",
        "descricao": "rúcula, tomate-cereja, ovos, atum",
        "foto": "https://tse3.mm.bing.net/th/id/OIP.YyDnhSKA_wbpUFzFn5guFAHaFC?rs=1&pid=ImgDetMain&o=7&rm=3",
        "preco": 17.9
    },
    {
        "id": 4,
        "nome": "Salada Colorida",
        "descricao": "alface, cenoura, beterraba, pepino",
        "foto": "https://tse2.mm.bing.net/th/id/OIP.o6pO6BeCJX3FTs1EhY0vggHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        "preco": 15.9
    }
]
const bebidas = [
    {
        "id": 1,
        "nome": "Suco de Laranja 500ml",
        "descricao": "laranja natural espremida",
        "foto": "https://th.bing.com/th/id/OIP.TSoJeMVWEEah0wJ6Y-VxzAHaFO?w=247&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        "preco": 8.9
    },
    {
        "id": 2,
        "nome": "Refrigerante Lata",
        "descricao": "coca-cola, guaraná ou fanta",
        "foto": "https://tse2.mm.bing.net/th/id/OIP.sc_KcWsdKKnKqSpEqkVe-QHaFh?pid=ImgDet&w=195&h=145&c=7&o=7&rm=3",
        "preco": 6.0
    },
    {
        "id": 3,
        "nome": "Suco Detox 500ml",
        "descricao": "couve, limão, gengibre e maçã",
        "foto": "https://th.bing.com/th/id/OIP.0ahdusSlLdz4qJfPt5I_2gHaD5?w=304&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        "preco": 9.9
    },
    {
        "id": 4,
        "nome": "Água Mineral 500ml",
        "descricao": "sem gás",
        "foto": "data:image/webp;base64,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",
        "preco": 4.5
    }
]


 

 

 app.get("/marmitas", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.send(marmitas)
 })
 app.get("/saladas", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.send(saladas)
 })
 app.get("/bebidas", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.send(bebidas)
 })

 app.get("/marmitas/:id", function (req, res){
    let id = req.params.id
    res.send(itensCardapio[id])
 })
 

 app.listen(3000) 