document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const cartCount = document.querySelector('.cart-count');

    // Initialize cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart count on page load
    cartCount.textContent = cart.length;

    // Add event listener to Buy Now buttons
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const name = product.querySelector('.product-name').textContent;
            const price = product.querySelector('.product-price').textContent;

            addToCart(name, price);
        });
    });

    // Add product to cart and update local storage
    function addToCart(name, price) {
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.length; // Update cart count
    }

    // Navigate to cart page on clicking the cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', () => {
        window.location.href = 'cart.html'; // Redirect to cart page
    });
});
