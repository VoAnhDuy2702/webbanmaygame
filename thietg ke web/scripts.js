function filterProducts(category) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
        if (category === 'all' || cat.getAttribute('data-category') === category) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}

function addToCart(productName) {
    alert(productName + " đã được thêm vào giỏ hàng!");
}

// Mặc định hiển thị tất cả sản phẩm khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    filterProducts('all');
});
