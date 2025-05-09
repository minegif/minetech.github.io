// Quantity Update Function
function updateQuantity(productId, change) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const priceLabel = document.getElementById(`price-${productId}`);
    const quantityPrice = document.getElementById(`cost-${productId}`);
    const price = parseInt(priceLabel.textContent);
    
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    
    // Ensure quantity stays between 1-99
    currentQuantity = Math.max(1, Math.min(99, currentQuantity));
    quantityInput.value = currentQuantity;
    quantityPrice.textContent = "UGX " + (currentQuantity * price).toLocaleString();
}

// Cart Management Functions
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, productPrice, productImage, productId) {
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
    let cart = getCart();
    
    // Find existing item by ID (new parameter)
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex > -1) {
        // Update existing item's quantity
        cart[productIndex].quantity = quantity; // Set to current input value
    } else {
        // Add new item with ID
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: quantity
        });
    }
    
    setCart(cart);
    updateCartIcon();
    showToast(`${productName} (${quantity}) updated in cart`);
}

// UI Updates
function updateCartIcon() {
    const cart = getCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartIcon = document.getElementById('cart-count');
    if (cartIcon) cartIcon.textContent = itemCount;
}

function showToast(message) {
    // Implement your toast notification UI here
    console.log(message); // Temporary for debugging
}

// Cart Page Functions
function initializeCartPage() {
    if (!document.getElementById('cart-items')) return;
    
    const cart = getCart();
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-amount');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }
    
    let html = '';
    let grandTotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        
        html += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" width="80" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>UGX ${item.price.toLocaleString()} × 
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="updateCartItemQuantity('${item.id}', this.value)">
                    </p>
                </div>
                <div class="item-total">UGX ${itemTotal.toLocaleString()}</div>
                <button onclick="removeFromCart('${item.id}')">×</button>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    totalElement.textContent = `UGX ${grandTotal.toLocaleString()}`;
}

function updateCartItemQuantity(productId, newQuantity) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity = parseInt(newQuantity);
        setCart(cart);
        initializeCartPage(); // Refresh display
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    setCart(cart);
    initializeCartPage(); // Refresh display
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    updateCartIcon();
    initializeCartPage(); // Will only run on cart page
});
