const products = [
    { name: "iPhone 14", price: 69999, oldPrice: 74999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg" },
    { name: "Samsung Galaxy S23", price: 74999, oldPrice: 79999, rating: "★★★★★", image: "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" },
    { name: "OnePlus 11", price: 56999, oldPrice: 60999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg" },
    { name: "Redmi Note 12 Pro", price: 24999, oldPrice: 27999, rating: "★★★★☆", image: "https://media.ldlc.com/r1600/ld/products/00/06/04/77/LD0006047745.jpg" },
    { name: "HP Pavilion 15", price: 54999, oldPrice: 59999, rating: "★★★★☆", image: "https://tse1.mm.bing.net/th/id/OIP.31QB1IZt7CJkSFG3ZHuiJQHaHa?pid=Api&P=0&h=180" },
    { name: "Dell Inspiron 14", price: 49999, oldPrice: 55999, rating: "★★★★☆", image: "https://microless.com/cdn/products/9f9211f083358b68c3f04b4315393791-hi.jpg" },
    { name: "Lenovo IdeaPad 3", price: 42999, oldPrice: 47999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_.jpg" },
    { name: "MacBook Air M1", price: 84999, oldPrice: 92999, rating: "★★★★★", image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" },
    { name: "Men's Running Shoes", price: 1999, oldPrice: 2999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1500_.jpg" },
    { name: "Women's Handbag", price: 1299, oldPrice: 1999, rating: "★★★★★", image: "https://tse1.mm.bing.net/th/id/OIP.mSYJaLLS_4u3LTKqdsddvAHaHa?pid=Api&P=0&h=180" },
    { name: "Men's Casual T-Shirt", price: 599, oldPrice: 999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/71-3HjGNDUL._UL1500_.jpg" },
    { name: "Women's Kurti", price: 899, oldPrice: 1499, rating: "★★★★☆", image: "https://assets0.mirraw.com/images/8708098/SA-2363_1_zoom.jpeg?1612875826" },
    { name: "Bluetooth Headphones", price: 1799, oldPrice: 2499, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg" },
    { name: "Smart Watch", price: 2999, oldPrice: 3999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg" },
    { name: "Backpack", price: 999, oldPrice: 1499, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/71Aik1DUQ-L.jpg" },
    { name: "Sunglasses", price: 699, oldPrice: 999, rating: "★★★★☆", image: "https://tse4.mm.bing.net/th/id/OIP.rHg2myihndAlsN4BSRy0LQHaDa?pid=Api&P=0&h=180" },
];

let cart = [];

// Show section by ID
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    if (id === 'products') displayProducts();
    if (id === 'cart') displayCart();
}

// Display products
function displayProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div class="rating">${product.rating}</div>
            <div>
                <span class="price">₹${product.price}</span>
                <span class="old-price">₹${product.oldPrice}</span>
            </div>
            <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// Add product to cart
function addToCart(product) {
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${product.name} added to cart!`);
}

// Display cart items
function displayCart() {
    const container = document.getElementById("cart-container");
    container.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const div = document.createElement("div");
        div.textContent = `${item.name} - ₹${item.price}`;
        container.appendChild(div);
    });
    document.getElementById("total-price").innerText = total;
}

// Search products
function performSearch() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = products.filter(p => p.name.toLowerCase().includes(query));
    const container = document.getElementById("search-results");
    container.innerHTML = "";
    if(results.length === 0) {
        container.textContent = "No products found!";
        return;
    }
    results.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div class="rating">${product.rating}</div>
            <div>
                <span class="price">₹${product.price}</span>
                <span class="old-price">₹${product.oldPrice}</span>
            </div>
            <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// Simulate payment
function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Payment successful! Total: ₹${cart.reduce((sum,p)=>sum+p.price,0)}`);
    cart = [];
    document.getElementById("cart-count").innerText = 0;
    showSection('products');
}

// Show products by default
showSection('products');
