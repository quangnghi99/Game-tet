// Sử dụng thư viện QR Code để tạo mã QR
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://example.com/lien-ket-den-li-xi-tet", // Đặt liên kết của bạn ở đây
    width: 200,
    height: 200,
});

// Nếu bạn muốn thay đổi nội dung mã QR, chỉ cần gọi lại hàm makeCode với nội dung mới:
// qrcode.makeCode("nội dung mới");
