function updateQuantity(productId, change) {
            
            const quantityInput = document.getElementById(`quantity-${productId}`);
            
            const priceLabel = document.getElementById(`price-${productId}`);
            const quantityPrice = document.getElementById(`cost-${productId}`);
            const price =parseInt(priceLabel.textContent)
            
            let currentQuantity = parseInt(quantityInput.value);

            currentQuantity += change;
            if (currentQuantity < 1) {
                currentQuantity = 1;
            }

            quantityInput.value = currentQuantity;
            
          quantityPrice.textContent = "UGX " + (currentQuantity * price).toLocaleString();
            
            

        }
        
        
  function addToCart(productName, productPrice, productImage) {
    const quantity = parseInt(document.getElementById('quantity-product1').value);
    let cart = getCart();
    const productIndex = cart.findIndex(item => item.name === productName);
    
    if (productIndex > -1) {
        cart[productIndex].quantity += quantity;
    } else {
        cart.push({ 
            name: productName, 
            price: productPrice, 
            image: productImage, 
            quantity: quantity 
        });
    }
    
    setCart(cart);
    updateCartIcon();
    console.log("Current cart:", getCart());  // Debug log
}
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartIcon() {
    const cart = getCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = itemCount;
}

document.addEventListener('DOMContentLoaded', updateCartIcon);


//Update cart page
function updateCartPage() {
    try {
        const cart = getCart();
        const cartItems = document.getElementById('cart-items');
        const totalElement = document.getElementById('total-amount');
        
        // Check if elements exist
        if (!cartItems || !totalElement) {
            console.error('Required cart elements not found');
            return;
        }

        // Clear previous items
        cartItems.innerHTML = '';

        // Handle empty cart
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <a href="products.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            `;
            totalElement.textContent = '0';
            return;
        }

        let grandTotal = 0;
        let html = '';

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;

            html += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image-container">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='assets/images/default-product.jpg'">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="product-title">${item.name}</h4>
                        <div class="price-info">
                            <span class="unit-price">UGX ${item.price.toLocaleString()}</span>
                            <div class="quantity-controls">
                                <button class="qty-btn minus" onclick="updateCartItemQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="qty-btn plus" onclick="updateCartItemQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                            <span class="item-total">UGX ${itemTotal.toLocaleString()}</span>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });

        cartItems.innerHTML = html;
        totalElement.textContent = `UGX ${grandTotal.toLocaleString()}`;

    } catch (error) {
        console.error('Error updating cart page:', error);
        // Fallback display
        document.getElementById('cart-items').innerHTML = `
            <div class="error-message">
                <p>Unable to load cart contents. Please try again.</p>
            </div>
        `;
    }
}

// New supporting functions
function updateCartItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity = newQuantity;
        setCart(cart);
        updateCartPage();
        updateCartIcon();
    }
}
function clearCart() {
    setCart([]);
    updateCartIcon();
    updateCartPage();
}

if (document.getElementById('cart-items')) {
    updateCartPage();
}
console.log(localStorage.getItem('cart'));
     
