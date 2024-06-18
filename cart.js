// Adicione esta variável no início do cart.js
let cartItems = [];

// Função para exibir os itens do carrinho
function displayCartItems() {
  const cartItemsSection = document.getElementById('cart-items');

  // Limpar conteúdo existente
  cartItemsSection.innerHTML = '';

  // Verificar se o carrinho está vazio
  if (cartItems.length === 0) {
    cartItemsSection.innerHTML = '<p>O seu carrinho está vazio.</p>';
    return;
  }

  // Criar elementos para cada item do carrinho
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';

    // Simulando informações do produto; você pode adaptar conforme necessário
    cartItemElement.innerHTML = `
      <p><strong>Produto:</strong> ${item.name}</p>
      <p><strong>Preço:</strong> $${item.price.toFixed(2)}</p>
      <hr>
    `;

    cartItemsSection.appendChild(cartItemElement);
  });
}

// Chamar a função para exibir os itens do carrinho ao carregar a página
window.onload = displayCartItems;