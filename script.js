// Adicione ao final do script.js
function addToCart(productId) {
    // Simulando um objeto de produto; você pode adaptar conforme necessário
    
    let product = 
      id: productId,
      name: `Produto ${productId}`,
      price: 19.99 // Adapte o preço conforme necessário
    };
  
    // Adicionando o produto ao carrinho
    cartItems.push(product);
  
    // Atualizando a contagem no carrinho
    updateCartCount();
  
    // Redirecionar para a página do carrinho
    window.location.href = 'carrinho.html';