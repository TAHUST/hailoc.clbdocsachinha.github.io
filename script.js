const locThanhImages = [
    'images/locthanh1.png',
    // Thêm nhiều đường dẫn hình ảnh khác ở đây
];

function randomLocThanh() {
    const randomIndex = Math.floor(Math.random() * locThanhImages.length);
    const resultImage = document.getElementById('resultImage');
    const downloadButton = document.getElementById('downloadButton');

    // Cập nhật src của hình ảnh và hiển thị nó
    resultImage.src = locThanhImages[randomIndex];
    resultImage.style.display = 'block';

    // Cập nhật href của nút download và hiển thị nó
    downloadButton.href = locThanhImages[randomIndex];
    downloadButton.style.display = 'inline-block';
}
// Tạo hiệu ứng hoa rơi
function createFallingFlower() {
    const flowerTypes = ['images/hoadao.png', 'images/baolixi.png'];
    const flowerContainer = document.getElementById('falling-flowers');
    const flower = document.createElement('img');

    flower.src = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.className = 'flower';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian rơi ngẫu nhiên từ 2 đến 5 giây

    flowerContainer.appendChild(flower);

    // Loại bỏ phần tử hoa sau khi hoàn thành hiệu ứng
    flower.addEventListener('animationend', () => {
        flowerContainer.removeChild(flower);
    });
}

// Tạo hoa rơi mỗi 300ms
setInterval(createFallingFlower, 400);
