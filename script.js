document.addEventListener("DOMContentLoaded", () => {
  function apenasNumeros(valor) {
    return /^[0-9]+$/.test(valor);
  }

  function validarCPF(cpf) {
    return /^[0-9]{11}$/.test(cpf);
  }

  function validarTelefone(telefone) {
    return /^[0-9]{11}$/.test(telefone); // DDD + número
  }

  function validarCNPJ(cnpj) {
    return /^[0-9]{14}$/.test(cnpj);
  }

  function validarEmail(email) {
    // Regex simples para formato válido
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Clientes
  const formCliente = document.getElementById("formCliente");
  if (formCliente) {
    formCliente.addEventListener("submit", (e) => {
      e.preventDefault();
      const cpf = document.getElementById("cpf").value;
      const telefone = document.getElementById("telefoneCliente").value;
      const email = document.getElementById("emailCliente").value;

      if (!validarCPF(cpf)) {
        alert("CPF inválido! Deve conter exatamente 11 dígitos numéricos.");
        return;
      }
      if (!validarTelefone(telefone)) {
        alert("Telefone inválido! Deve conter DDD + número (11 dígitos).");
        return;
      }
      if (!validarEmail(email)) {
        alert("Email inválido! Use o formato correto (ex: nome@dominio.com).");
        return;
      }
      alert("Cliente cadastrado com sucesso!");
    });
  }

  // Fornecedores
  const formFornecedor = document.getElementById("formFornecedor");
  if (formFornecedor) {
    formFornecedor.addEventListener("submit", (e) => {
      e.preventDefault();
      const cnpj = document.getElementById("cnpj").value;
      const telefone = document.getElementById("telefone").value;
      const email = document.getElementById("email").value;

      if (!validarCNPJ(cnpj)) {
        alert("CNPJ inválido! Deve conter exatamente 14 dígitos numéricos.");
        return;
      }
      if (!validarTelefone(telefone)) {
        alert("Telefone inválido! Deve conter DDD + número (11 dígitos).");
        return;
      }
      if (!validarEmail(email)) {
        alert("Email inválido! Use o formato correto.");
        return;
      }
      alert("Fornecedor cadastrado com sucesso!");
    });
  }
});


// formulário de vendas
const formVenda = document.getElementById("formVenda");
if (formVenda) {
    formVenda.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Coleta os dados
        const dados = {
            clienteVenda: document.getElementById("clienteVenda").value,
            produtoVenda: document.getElementById("produtoVenda").value,
            quantidadeVenda: document.getElementById("quantidadeVenda").value,
            precoUnitario: document.getElementById("precoUnitario").value
        };

        // Envia para o servidor (Requisito 7)
        fetch('http://localhost:3000/registrar-venda', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        .then(response => response.text())
        .then(msg => {
            alert(msg); // Exibe a lógica adicional que veio do servidor
        });
    });
}

fetch('http://localhost:3000/cadastrar-cliente', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cpf, telefone, email }) // Envia os dados para o Node.js
})
.then(response => response.text())
.then(mensagem => alert(mensagem)); // Exibe a resposta que veio do servidor
