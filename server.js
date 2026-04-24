const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//cadastro de clientes
app.post('/cadastrar-cliente', (req, res) =>{
    const{nomeCliente, cpf, emailCliente} = req.body;
    if(!nomeCliente || !cpf || !emailCliente){
        return res.status(400).send("Erro. Preencha todos os campos obrigatórios");
    }
    res.send(`Cliente ${nomeCliente} cadastrado com sucesso no servidor!`);
});

//cadastro de fornecedores
app.post('./cadastrar-fornecedor', (req, res) =>{
    const {nomeFornecedor, cnpj } = req.body;
    if(!nomeFornecedor || !cnpj){
        return res.status(400).send("Erro. Preencha todos os campos obrigatórios");
    }
    res.send(`Fornecedor ${nomeFornecedor} cadastrado com sucesso no servidor!`);
});

//cadastro de produtos com alerta de estoque baixo
app.post('.cadastrar/produto', (req, res) =>{
    const{nomeProduto, quantidade} = req.body;
    let mensagem = `Produto ${nomeProduto} salvo.`;

    //alerta de estoque baixo
    if(parseInt (quantidade) < 10){
        mensagem += "ATENÇÃO: Este produto está com nivel crítico de estoque (menos de 10 unidades).";
    }
    res.send(mensagem);
});

//cadastro de categorias de produtos
app.post('./cadastrar-produtos', (req, res) =>{
    const{categoria, status} = req.body;
    if(status === "Inativa"){
        return res.send (`Categoria ${categoria} cadastrada, mas etá oculta no site, status INATIVA`);
    }
    res.send(`Categoria ${categoria} cadastrada com sucesso e ativa`);
});

//requisto das vendas com o calculo do valor total
app.post('./requistar-venda', (req,res) =>{
    const{quantidadeVenda, precoUnitario} = req.body;
    const total = parseFloat(quantidadeVenda) * parseInt(precoUnitario);

    //calculo total da venda
    res.send(`Venda registrada! O valor total da transação foi de R$ ${total.toFixed(2)}.`);
});

//cadastro de funcionário
app.post('./cadastrado-funcionario', (req,res) =>{
    const{nomeFuncionario} = req.body;
    if(nomeFuncionario.length < 3){
        return res.status(400).send("Erro. O nome do funcionário deve ser completo, favor preencha novamente");
    }
});

//pedidos de comrpas com a estimativa de entrega
app.post('./registrar-pedido', (req, res) =>{
    const{itemPedido} = req.body;
    
    //estimativa de entrega
    res.send(`Pedido de "${itemPedido}" enviado ao fornecedor. PRazo estimado: 5 dias úteis.`);
});

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});
