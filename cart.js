document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const deleteButton = document.querySelector('.delete-btn');

    // Initialize cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart count in header
    cartCount.textContent = cart.length;

    // Check if cart is empty
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty!</li>';
    } else {
        // Display cart items
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartItemsList.appendChild(li);
        });
    }

    // Back button functionality
    const backButton = document.querySelector('.back-btn');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html#products'; // Navigate back to product page
    });

    // Delete all items from cart
    deleteButton.addEventListener('click', () => {
        // Clear local storage
        localStorage.removeItem('cart');

        // Clear cart items array
        cart = [];
        
        // Update cart count
        cartCount.textContent = cart.length;

        // Clear displayed cart items
        cartItemsList.innerHTML = '<li>Your cart is empty!</li>';
    });
});
