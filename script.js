const products = {
    "Mobiles": [
        {
            name: "iPhone 14",
            price: 69999,
            oldPrice: 74999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"
        },
        {
            name: "Samsung Galaxy S23",
            price: 74999,
            oldPrice: 79999,
            rating: "â˜…â˜…â˜…â˜…â˜…",
            image: "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg"
        },
        {
            name: "OnePlus 11",
            price: 56999,
            oldPrice: 60999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"
        },
        {
            name: "Redmi Note 12 Pro",
            price: 24999,
            oldPrice: 27999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://media.ldlc.com/r1600/ld/products/00/06/04/77/LD0006047745.jpg"
        }
    ],

    "Laptops": [
        {
            name: "HP Pavilion 15",
            price: 54999,
            oldPrice: 59999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://tse1.mm.bing.net/th/id/OIP.31QB1IZt7CJkSFG3ZHuiJQHaHa?pid=Api&P=0&h=180"
        },
        {
            name: "Dell Inspiron 14",
            price: 49999,
            oldPrice: 55999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://microless.com/cdn/products/9f9211f083358b68c3f04b4315393791-hi.jpg"
        },
        {
            name: "Lenovo IdeaPad 3",
            price: 42999,
            oldPrice: 47999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_.jpg"
        },
        {
            name: "Apple MacBook Air M1",
            price: 84999,
            oldPrice: 92999,
            rating: "â˜…â˜…â˜…â˜…â˜…",
            image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
        }
    ],

    "Fashion": [
        {
            name: "Men's Running Shoes",
            price: 1999,
            oldPrice: 2999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1500_.jpg"
        },
        {
            name: "Women's Handbag",
            price: 1299,
            oldPrice: 1999,
            rating: "â˜…â˜…â˜…â˜…â˜…",
            image: "https://tse1.mm.bing.net/th/id/OIP.mSYJaLLS_4u3LTKqdsddvAHaHa?pid=Api&P=0&h=180"
        },
        {
            name: "Men's Casual T-Shirt",
            price: 599,
            oldPrice: 999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/71-3HjGNDUL._UL1500_.jpg"
        },
        {
            name: "Women's Kurti",
            price: 899,
            oldPrice: 1499,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://assets0.mirraw.com/images/8708098/SA-2363_1_zoom.jpeg?1612875826"
        }
    ],

    "Accessories": [
        {
            name: "Bluetooth Headphones",
            price: 1799,
            oldPrice: 2499,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"
        },
        {
            name: "Smart Watch",
            price: 2999,
            oldPrice: 3999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
        },
        {
            name: "Backpack",
            price: 999,
            oldPrice: 1499,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://m.media-amazon.com/images/I/71Aik1DUQ-L.jpg"
        },
        {
            name: "Sunglasses",
            price: 699,
            oldPrice: 999,
            rating: "â˜…â˜…â˜…â˜…â˜†",
            image: "https://tse4.mm.bing.net/th/id/OIP.rHg2myihndAlsN4BSRy0LQHaDa?pid=Api&P=0&h=180"
        }
    ]
};

let cartCount = 0;

function displayProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    for (let category in products) {

        const title = document.createElement("h2");
        title.className = "category-title";
        title.textContent = category;
        container.appendChild(title);

        const section = document.createElement("div");
        section.className = "products";

        products[category].forEach(product => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <div class="rating">${product.rating}</div>
                <div>
                    <span class="price">â‚¹${product.price}</span>
                    <span class="old-price">â‚¹${product.oldPrice}</span>
                </div>
                <button onclick="addToCart()">Add to Cart</button>
            `;

            section.appendChild(card);
        });

        container.appendChild(section);
    }
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

displayProducts();
