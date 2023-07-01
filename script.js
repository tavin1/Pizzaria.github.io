let carrinho = [];

// Função para adicionar uma pizza ao carrinho
function addToCart(pizza) {
  carrinho.push(pizza);
  showCart();
  alert("Pizza " + pizza + " adicionada ao carrinho!");
}

// Função para mostrar o carrinho de compras
function showCart() {
  let carrinhoItems = document.getElementById("carrinho-items");
  carrinhoItems.innerHTML = "";

  for (let i = 0; i < carrinho.length; i++) {
    let li = document.createElement("li");
    li.innerText = carrinho[i];
    carrinhoItems.appendChild(li);
  }
}

// Função para confirmar o pedido
function confirmarPedido() {
  if (carrinho.length > 0) {
    let confirmacao = confirm("Deseja confirmar o pedido?");

    if (confirmacao) {
      alert("Pedido confirmado! Obrigado pela preferência!");
      carrinho = []; // Limpar o carrinho após confirmar o pedido
      showCart(); // Atualizar o carrinho exibindo que está vazio
    }
  } else {
    alert("Não há itens no carrinho. Adicione pizzas antes de confirmar o pedido.");
  }
}

// Função para excluir todos os itens do carrinho
function excluirItensCarrinho() {
  if (carrinho.length > 0) {
    let confirmacao = confirm("Deseja excluir todos os itens do carrinho?");

    if (confirmacao) {
      carrinho = []; // Limpar o carrinho
      showCart(); // Atualizar o carrinho exibindo que está vazio
      alert("Itens do carrinho excluídos com sucesso!");
    }
  } else {
    alert("Não há itens no carrinho.");
  }
}

// Função para voltar ao menu inicial
function voltarAoMenu() {
  let confirmacao = confirm("Deseja voltar ao menu inicial?");

  if (confirmacao) {
    // Redirecionar para a página inicial
    window.location.href = "index.html";
  }
}
