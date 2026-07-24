/* Giỏ hàng dùng chung cho toàn bộ site — lưu trong localStorage, hoạt động thật
   khi mở trực tiếp file (file://) hoặc host lên bất kỳ web server nào. */

var CART_KEY = 'dearself_cart_v1';

function cartRead(){
  try{
    var raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}

function cartWrite(cart){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }catch(e){}
  updateCartBadges();
  document.dispatchEvent(new CustomEvent('cart:change'));
}

function cartAdd(stt, qty){
  qty = qty || 1;
  var cart = cartRead();
  stt = String(stt);
  cart[stt] = (cart[stt] || 0) + qty;
  cartWrite(cart);
}

function cartSetQty(stt, qty){
  var cart = cartRead();
  stt = String(stt);
  qty = Math.max(0, Math.floor(qty) || 0);
  if(qty <= 0){ delete cart[stt]; } else { cart[stt] = qty; }
  cartWrite(cart);
}

function cartRemove(stt){
  var cart = cartRead();
  delete cart[String(stt)];
  cartWrite(cart);
}

function cartClear(){
  cartWrite({});
}

function cartDetailedItems(){
  var cart = cartRead();
  var out = [];
  Object.keys(cart).forEach(function(stt){
    var p = findProduct(stt);
    if(p) out.push(Object.assign({}, p, {qty: cart[stt]}));
  });
  return out;
}

function cartCount(){
  var cart = cartRead();
  var total = 0;
  Object.keys(cart).forEach(function(k){ total += cart[k]; });
  return total;
}

function cartSubtotal(){
  return cartDetailedItems().reduce(function(sum, item){ return sum + item.price * item.qty; }, 0);
}

var FREE_SHIP_THRESHOLD = 300000;
var SHIP_FEE = 25000;

function cartShippingFee(){
  var sub = cartSubtotal();
  if(sub === 0) return 0;
  return sub >= FREE_SHIP_THRESHOLD ? 0 : SHIP_FEE;
}

function cartGrandTotal(){
  return cartSubtotal() + cartShippingFee();
}

function updateCartBadges(){
  var n = cartCount();
  document.querySelectorAll('.cart-count').forEach(function(el){ el.textContent = n; });
}

/* ---------- Toast thông báo nhỏ dùng chung ---------- */
function showToast(msg){
  var el = document.getElementById('globalToast');
  if(!el){
    el = document.createElement('div');
    el.id = 'globalToast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(function(){ el.classList.remove('show'); }, 2200);
}

/* ---------- Mini giỏ hàng (drawer) dùng chung ở header ---------- */
function renderMiniCart(){
  var itemsEl = document.getElementById('cartItems');
  var subtotalEl = document.getElementById('cartSubtotal');
  var totalEl = document.getElementById('cartTotal');
  if(!itemsEl) return;

  var items = cartDetailedItems();
  if(items.length === 0){
    itemsEl.innerHTML = '<p class="cart-empty">Giỏ hàng trống. Hãy chọn một chiếc áo ưng ý nhé!</p>';
  } else {
    itemsEl.innerHTML = items.map(function(p){
      var thumb = p.img
        ? '<img src="'+p.img+'" alt="'+p.name+'">'
        : '👕';
      return '' +
        '<div class="cart-line">' +
          '<div class="thumb">'+thumb+'</div>' +
          '<div class="info">' +
            '<div class="n">'+p.name+'</div>' +
            '<div class="p">'+p.qty+' × '+fmtVND(p.price)+'</div>' +
          '</div>' +
          '<button class="rm" data-stt="'+p.stt+'">Xoá</button>' +
        '</div>';
    }).join('');
  }

  if(subtotalEl) subtotalEl.textContent = fmtVND(cartSubtotal());
  if(totalEl) totalEl.textContent = fmtVND(cartGrandTotal());

  itemsEl.querySelectorAll('.rm').forEach(function(btn){
    btn.addEventListener('click', function(){
      cartRemove(btn.getAttribute('data-stt'));
      renderMiniCart();
    });
  });
}

/* ---------- Header: mở/đóng giỏ hàng, active nav link ---------- */
function initHeader(){
  updateCartBadges();
  renderMiniCart();
  document.addEventListener('cart:change', renderMiniCart);

  var overlay = document.getElementById('overlay');
  var drawer = document.getElementById('cartDrawer');
  var cartBtn = document.getElementById('cartBtn');
  var cartClose = document.getElementById('cartClose');

  function openCart(){ if(overlay && drawer){ overlay.classList.add('open'); drawer.classList.add('open'); } }
  function closeCart(){ if(overlay && drawer){ overlay.classList.remove('open'); drawer.classList.remove('open'); } }

  if(cartBtn) cartBtn.addEventListener('click', function(e){ e.preventDefault(); openCart(); });
  if(cartClose) cartClose.addEventListener('click', closeCart);
  if(overlay) overlay.addEventListener('click', closeCart);

  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('nav.links');
  if(burger && navLinks){
    burger.addEventListener('click', function(){
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.links a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === current) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', initHeader);

/* ---------- Gắn sự kiện "Thêm vào giỏ" cho một lưới sản phẩm bất kỳ ---------- */
function bindAddToCartButtons(container){
  container.addEventListener('click', function(e){
    var btn = e.target.closest('.add-btn');
    if(!btn) return;
    var stt = btn.getAttribute('data-stt');
    var p = findProduct(stt);
    if(!p) return;
    cartAdd(stt, 1);
    showToast('Đã thêm "'+p.name+'" vào giỏ hàng');
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(function(){ btn.classList.remove('added'); btn.textContent = '+'; }, 900);
  });
}
