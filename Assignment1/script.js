const products = [
    { productName: "candy", description: "High performance laptop", price: 1000 },
    { productName: "chocolate", description: "Latest model smartphone", price: 800 },
    { productName: "ice cream", description: "Portable tablet device", price: 600 },
];

function fetchProducts() {
    return products.map(product => ({
        name: product.productName,
        description: product.description,
        price: product.price
    }));
}

function displayProducts() {
    const container = document.getElementById('products-container');
    
    fetchProducts().forEach(product => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <hr>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);
