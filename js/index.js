function showProducts(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; 

    const products = [
        { id: 1, name: 'Товар 1', price: 100 },
        { id: 2, name: 'Товар 2', price: 150 },
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} - ${product.price} грн`;
        productItem.onclick = () => showProductInfo(product);
        productsContainer.appendChild(productItem);
    });
}

function showProductInfo(product) {
    const productInfoContainer = document.getElementById('productInfo');
    productInfoContainer.innerHTML = '';

    const productInfo = document.createElement('div');
    productInfo.innerHTML = `
        <h2>${product.name}</h2>
        <p>Ціна: ${product.price} грн</p>
        <button onclick="buyProduct('${product.name}')">Купити</button>
    `;

    productInfoContainer.appendChild(productInfo);
}

function buyProduct(productName) {
    alert(`Товар "${productName}" куплено!`);
    resetApp();
}

function resetApp() {
    const productsContainer = document.getElementById('products');
    const productInfoContainer = document.getElementById('productInfo');

    productsContainer.innerHTML = '';
    productInfoContainer.innerHTML = '';
}