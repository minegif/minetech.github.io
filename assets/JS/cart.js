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
    let cart = getCart();
    const productIndex = cart.findIndex(item => item.name === productName);
    
    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }
    
    setCart(cart);
    updateCartIcon();
}

function getCart() {
    const cartCookie = getCookie('cart');
    return cartCookie ? JSON.parse(cartCookie) : [];
}

function setCart(cart) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    document.cookie = `cart=${JSON.stringify(cart)};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function updateCartIcon() {
    const cart = getCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = itemCount;
}

document.addEventListener('DOMContentLoaded', updateCartIcon);


//Update cart page
function updateCartPage() {
    const cart = getCart();
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let totalAmount = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add('cart-item-image');

        const itemDetails = document.createElement('div');
        itemDetails.textContent = `${item.name} - UGX ${item.price} x ${item.quantity} = UGX ${itemTotal}`;
        itemDetails.classList.add('cart-item-details');

        cartItem.appendChild(itemImage);
        cartItem.appendChild(itemDetails);
        cartItems.appendChild(cartItem);
    });

    document.getElementById('total-amount').textContent = totalAmount;
}

function clearCart() {
    setCart([]);
    updateCartIcon();
    updateCartPage();
}

if (document.getElementById('cart-items')) {
    updateCartPage();
}
     document.addEventListener('DOMContentLoaded', () => {
    updateCartPage();  // Run this only if it's the cart page
});
