// Код для корзины товара

let basketCounterHtml = document.querySelector('.header__basket-number');
let basketCounter = 0;

function countCartItems() {

   basketCounter++;
   basketCounterHtml.innerText = basketCounter.toString();

}

window.addEventListener('DOMContentLoaded', function () {
   const products = document.querySelectorAll('.product'),
      buttons = document.querySelectorAll('.header__button'),
      openBtn = document.querySelector('.open');

   function createCart() {
      let cart = document.createElement('div'),
         field = document.createElement('div'),
         heading = document.createElement('h2'),
         closeBtn = document.createElement('button');

      cart.classList.add('cart');
      field.classList.add('cart-field');
      closeBtn.classList.add('close');

      heading.textContent = "В нашей корзине:";
      closeBtn.textContent = "Закрыть";

      document.body.appendChild(cart);
      cart.appendChild(heading);
      cart.appendChild(field);
      cart.appendChild(closeBtn);
   }
   createCart();

   let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      close = document.querySelector('.close');

   function openCart() {
      cart.style.display = 'block';
   }

   function closeCart() {
      cart.style.display = 'none';
   }

   openBtn.addEventListener('click', openCart);
   close.addEventListener('click', closeCart);

   for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
         let item = products[i].cloneNode(true),
            btn = item.querySelector('.header__button');

         btn.remove();
         field.appendChild(item);
         products[i].remove();

         countCartItems();

      });
   }
});
// Код подсчета товара в корзине

// Код сбросить галочки с checkbox
NodeList.prototype.forEach = Array.prototype.forEach;
document.getElementById("clear").addEventListener("click", function (e) {
   var formBlock = document.getElementById("formId");
   var inputArr = formBlock.querySelectorAll("input[type=checkbox]");
   inputArr.forEach(function (el) {
      el.checked = false;
   });
});
// Фильтр по Brands
const filterBrands = document.querySelectorAll('.product');

document.querySelector('form').addEventListener('click', event => {
   if (event.target.tagName !== 'INPUT') return false;

   let filterClass = event.target.dataset['f'];

   filterBrands.forEach(elem => {
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
         elem.classList.add('hide');
      }
      else {
         elem.classList.remove('hide');
      }
   });
});
// Фильтр по Brands
