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