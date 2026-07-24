/* Dữ liệu sản phẩm thật, trích từ file Nhom_3.xlsx (STT, nhóm hàng, mặt hàng, giá bán) */

var CAT_STYLE = {
  "Áo thun trơn": "#F5F3EF",
  "Áo thun in hình": "#EDEAE3",
  "Áo thun thể thao": "#F0EDE7",
  "Áo thun có cổ": "#EBE7DF",
  "Áo thun thêu hình": "#F3F0E9",
  "Áo thun cặp": "#EFEBE3",
  "Áo thun tay dài": "#F1EDE5",
};

var CAT_ICON = {
  "Áo thun trơn": "👕",
  "Áo thun in hình": "🎨",
  "Áo thun thể thao": "🏃",
  "Áo thun có cổ": "🎽",
  "Áo thun thêu hình": "🧵",
  "Áo thun cặp": "👬",
  "Áo thun tay dài": "🧥",
};

var PRODUCTS = [
  {stt:1,  cat:"Áo thun trơn", name:"Áo thun trơn màu trắng cổ tròn tay ngắn thường ngày rộng rãi", price:57000, img:"assets/images/prod-01.png"},
  {stt:2,  cat:"Áo thun trơn", name:"Áo thun trơn màu đen cổ tròn tay ngắn thường ngày rộng rãi", price:53000, img:"assets/images/prod-02.png"},
  {stt:3,  cat:"Áo thun trơn", name:"Áo thun cotton hình mèo", price:123000, img:"assets/images/prod-03.png"},
  {stt:4,  cat:"Áo thun trơn", name:"Áo phông Bitcoin Heartbeat", price:163000, img:"assets/images/prod-04.png"},
  {stt:5,  cat:"Áo thun trơn", name:"Áo thun nữ cổ tròn kẻ sọc ngắn tay phong cách retro", price:78000, img:"assets/images/prod-05.png"},
  {stt:6,  cat:"Áo thun in hình", name:"Áo phông nữ 2025 phong cách mới mùa hè chất liệu cotton", price:88000, img:"assets/images/prod-06.png"},
  {stt:7,  cat:"Áo thun in hình", name:"Áo phông nữ 2025 phong cách mới mùa hè chất liệu cotton (bản 2)", price:116000, img:"assets/images/prod-07.png"},
  {stt:8,  cat:"Áo thun in hình", name:"Áo thun nữ cotton cổ tròn, hình đáng yêu", price:107000, img:"assets/images/prod-08.png"},
  {stt:9,  cat:"Áo thun in hình", name:"Áo thun nữ cotton cổ tròn, hình đáng yêu (bản 2)", price:179000, img:"assets/images/prod-09.png"},
  {stt:10, cat:"Áo thun in hình", name:"Áo họa tiết hoạt hình", price:140000, img:"assets/images/prod-10.png"},
  {stt:11, cat:"Áo thun thể thao", name:"Áo thun thể thao nữ tay dài", price:140000, img:"assets/images/prod-11.png"},
  {stt:12, cat:"Áo thun thể thao", name:"Áo thun thể thao nữ tay dài (bản 2)", price:169000, img:"assets/images/prod-12.png"},
  {stt:13, cat:"Áo thun thể thao", name:"Áo thun thể thao croptop tay ngắn", price:185000, img:"assets/images/prod-13.png"},
  {stt:14, cat:"Áo thun thể thao", name:"Áo thun thể thao tay ngắn", price:122000, img:"assets/images/prod-14.png"},
  {stt:15, cat:"Áo thun thể thao", name:"Áo thun thể thao nam", price:61000, img:"assets/images/prod-15.png"},
  {stt:16, cat:"Áo thun có cổ", name:"Áo Polo trơn", price:179000, img:null},
  {stt:17, cat:"Áo thun có cổ", name:"Áo Polo trơn (bản 2)", price:180000, img:"assets/images/prod-17.jpg"},
  {stt:18, cat:"Áo thun có cổ", name:"Áo Polo có khóa keo", price:93000, img:"assets/images/prod-18.jpg"},
  {stt:19, cat:"Áo thun có cổ", name:"Áo Polo có khóa keo (bản 2)", price:160000, img:null},
  {stt:20, cat:"Áo thun có cổ", name:"Áo Polo tay dài", price:187000, img:"assets/images/prod-20.jpg"},
  {stt:21, cat:"Áo thun thêu hình", name:"Áo thun thêu hoa", price:98000, img:"assets/images/prod-21.png"},
  {stt:22, cat:"Áo thun thêu hình", name:"Áo thun thêu hình", price:171000, img:"assets/images/prod-22.png"},
  {stt:23, cat:"Áo thun thêu hình", name:"Áo thun chất dày", price:164000, img:"assets/images/prod-23.png"},
  {stt:24, cat:"Áo thun thêu hình", name:"Áo thun tay ngắn mùa hè phong cách thời trang", price:203000, img:"assets/images/prod-24.png"},
  {stt:25, cat:"Áo thun thêu hình", name:"Áo thun châu Âu thêu cao cấp", price:137000, img:"assets/images/prod-25.png"},
  {stt:26, cat:"Áo thun cặp", name:"Áo cặp form rộng thời trang thường ngày", price:170000, img:"assets/images/prod-26.jpg"},
  {stt:27, cat:"Áo thun cặp", name:"Áo thun cặp cotton kiểu Mỹ in họa tiết", price:201000, img:"assets/images/prod-27.jpg"},
  {stt:28, cat:"Áo thun cặp", name:"Áo thun cặp tay phối màu thêu hoa lá", price:57000, img:"assets/images/prod-28.jpg"},
  {stt:29, cat:"Áo thun cặp", name:"Áo thun cặp form rộng phong cách Mỹ", price:142000, img:"assets/images/prod-29.jpg"},
  {stt:30, cat:"Áo thun cặp", name:"Áo thun cặp tay raglan phối màu retro kiểu Mỹ, in chữ/họa tiết xích", price:178000, img:"assets/images/prod-30.jpg"},
  {stt:31, cat:"Áo thun tay dài", name:"Áo thun tay dài phong cách Mỹ", price:88000, img:"assets/images/prod-31.png"},
  {stt:32, cat:"Áo thun tay dài", name:"Áo thun tay dài phong cách streetwear cao cấp", price:214000, img:"assets/images/prod-32.png"},
  {stt:33, cat:"Áo thun tay dài", name:"Áo thun tay họa tiết chữ đơn giản", price:244000, img:"assets/images/prod-33.jpg"},
  {stt:34, cat:"Áo thun tay dài", name:"Áo thun tay họa tiết chữ đơn giản (bản 2)", price:259000, img:"assets/images/prod-34.jpg"},
  {stt:35, cat:"Áo thun tay dài", name:"Áo thun tay dài phong cách Y2K", price:242000, img:"assets/images/prod-35.jpg"},
];

function fmtVND(n){ return n.toLocaleString('vi-VN') + 'đ'; }

function findProduct(stt){
  stt = Number(stt);
  for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].stt === stt) return PRODUCTS[i]; }
  return null;
}

var NO_IMG_SVG = '<div class="noimg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5-9 9"/></svg><span>Ảnh đang cập nhật</span></div>';

function productThumbHTML(p){
  return p.img
    ? '<img src="'+p.img+'" alt="'+p.name+'" loading="lazy">'
    : NO_IMG_SVG;
}
