document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const searchInput = document.getElementById('search');
    const products = document.querySelectorAll('.product');

    function filterProducts() {
        const selectedTags = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector('h1').textContent.toLowerCase();
            const matchesSearch = productName.includes(searchTerm);
            const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => productName.includes(tag));

            if (matchesSearch && matchesTags) {
                product.style.display = 'block'; // Show product
            } else {
                product.style.display = 'none'; // Hide product
            }
        });
    }

    // Attach event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    searchInput.addEventListener('input', filterProducts);
});
