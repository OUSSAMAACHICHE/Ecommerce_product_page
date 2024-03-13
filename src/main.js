// selct element dom
const header = document.getElementById('header');
const clsoe = document.getElementById('close');
const aside = document.getElementById('aside');
const overlay = document.getElementById('overlay');
const openM = document.getElementById('open');
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart_shop');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const amount = document.getElementById('amount');
let contentToCart = document.getElementById('cart_content');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const thumbnailImgs = document.querySelectorAll('.thumb_imgs img');
const mainImgs = document.querySelector('.imgs');



// Lihgt box menu 
const lightBox = document.getElementById('light_box');
const closeBox = document.getElementById('close_box');


let clearCartButton;
// get images 
let imgs = Array.from(document.querySelectorAll('.imgs > img'));

let indexOfImg = 0;




// hidde navbar when scrolling
window.addEventListener('scroll', function () {
  // hidde the nav menu 
  aside.classList.remove('active');
  // hidde the overlay
  overlay.classList.remove('active');
})
// show navbar menu
openM.onclick = () => {
  // add overlay when clicked openMenu
  overlay.classList.toggle('active');
  // show navigation menu 
  aside.classList.toggle('active');

}
// hidde navbar menu
clsoe.onclick = () => {

  // hidde the nav menu 
  aside.classList.remove('active');
  // hidde the overlay
  overlay.classList.remove('active');

}
// hidde menu cart when click anywhere
document.body.onclick = (e) => {

  if (!cart.contains(e.target) && e.target !== cartShop) {
    cart.classList.remove('active');
    cart.classList.add('scale-0');
  }
  // check if cart el have active class
  if (cart.classList.contains('active')) {
    // hidde next arrow
    next.style.display = 'none';
    // hidde previous arrow
    previous.style.display = 'none';
  } else {
    next.style.display = 'block';
    previous.style.display = 'block';
  }

}
// show cart menu
cartShop.onclick = () => {

  cart.classList.toggle('active');
  cart.classList.toggle('scale-0');
  document.getElementById('notification').innerText = "";
  document.getElementById('notification').style.opacity = 0;


}

// click next 
next.addEventListener('click', nextImg);
// click previous
previous.addEventListener('click', prevImg);

// nextImg function
function nextImg() {

  if (indexOfImg < imgs.length - 1) {
    // increase index of img
    indexOfImg++;
    // delete disabled class from previous btn
    previous.classList.remove('disabled');
    // call slideImgs function
    slideImgs();

  } else {
    // add disabled class to next btn (no-drop, opacity 0.5)
    next.classList.add('disabled');
  }
}
// nextImg function
function prevImg() {

  if (indexOfImg > 0) {
    // decrease index of img
    indexOfImg--;
    // delete disabled class from next btn
    next.classList.remove('disabled');
    slideImgs();
  } else {
    // add disabled class to previous btn
    previous.classList.add('disabled');

  }
}

// trigger slideImgs funtion
slideImgs();
// slide img function 
function slideImgs() {
  // delete all active classes from images 
  imgs.forEach(img => {
    img.classList.remove('active');
  });
  // add active class on current img 
  imgs[indexOfImg].classList.add('active');

}


showInfoCart();

function showInfoCart() {
  let cartContent;

  document.getElementById('add').addEventListener('click', () => {

    document.getElementById('notification').innerText = amount.value;
    document.getElementById('notification').style.opacity = 1;

    if (amount.value > 1) {
      cartContent = `
      <div class="flex items-center justify-between">
           <img src="./images/image-product-1-thumbnail.jpg" alt="product-1" class="w-10 rounded-md">
           <p class="text-neutral-darkgrayishblue mx-3 text-sm">
             Fall Limited Edition Sneakers <br>
             $125.00 x ${amount.value} <span class="font-bold text-neutral-verydarkblue">$${(amount.value * 125.00).toFixed(2)}</span>
           </p>
           <img id="clearCart" src="./images/icon-delete.svg" alt="delete_icon" class="cursor-pointer">
           </div>
           <button type="button" class="custom-btn max-w-[90%] mx-auto md:mt-1">Checkout</button>
     `;
    } else {
      cartContent = `
      <div class="flex items-center justify-between">
           <img src="./images/image-product-1-thumbnail.jpg" alt="product-1" class="w-10 rounded-md">
           <p class="text-neutral-darkgrayishblue mx-3 text-sm">
             Fall Limited Edition Sneakers <br>
             $125.00 <span class="font-bold text-neutral-verydarkblue">$125.00</span>
           </p>
           <img id="clearCart" src="./images/icon-delete.svg" alt="delete_icon" class="cursor-pointer">
         </div>
         <button type="button" class="custom-btn max-w-[90%] mx-auto md:mt-1">Checkout</button>
     `;
    }
    
    contentToCart.innerHTML = cartContent;

    // Adding event listener to the clearCart icon
    let clearCartButton = document.getElementById('clearCart');
    clearCartButton.addEventListener('click', () => {
      // Delete the content of the cart
      contentToCart.innerHTML = ` <p class="text-neutral-darkgrayishblue mx-3 text-sm w-full text-center">Your Cart Is Empty</p>`;
      // Call the showInfoCart function again to update the cart
      showInfoCart();
    });

  });

}

// click plusBtn to trigger plusamount function
plusBtn.addEventListener('click', plusAmount);
// click minusBtn to trigger minusAmount function
minusBtn.addEventListener('click', minusAmount);


function plusAmount() {
  if (amount.value < 10) {
    amount.value++;
  }
}

function minusAmount() {

  if (amount.value > 1) {
    amount.value--;
  }

}


// thubmnail imgags 
thumbnailImgs.forEach(img => {

  // click thumb img
  img.addEventListener('click', (e) => {
    // loop through thumb imgs and remove active classes
    thumbnailImgs.forEach(im => {
      im.classList.remove('active');
    })
    // add active class on the clicked img
    e.target.classList.add('active');
    // loop through imgs 
    imgs.forEach(img => {

      img.classList.remove('active');
      // add active class on clicked img
      if(e.target.alt === img.alt) {
        img.classList.add('active');
      }

    });

  });

});
// click main img show light box menu
mainImgs.onclick = lightBoxContent;

// light box function
function lightBoxContent() {

  // check viewport width show lightbox menu
  if(window.innerWidth > 768) {
    lightBox.classList.add('active');
    overlay.classList.add('active');
  }

}

// close the light box menu 
closeBox.onclick = function() {
  lightBox.classList.remove('active')
  overlay.classList.remove('active')
}
// index of thumb images 
let lightBoxIndex = 1;
// select previous and next buttons 
const nextBox = document.getElementById('next_box');
const previousBox = document.getElementById('previous_box');

// show next image
nextBox.onclick = function() {
  if(lightBoxIndex < imgs.length) {
    lightBoxIndex++;
    previousBox.style.cursor = 'pointer';
    changeLightBoxes();
  } else {
    nextBox.style.cursor = 'no-drop';
  }
}
// show previous image
previousBox.onclick = function() {
  if(lightBoxIndex > 1) {
    nextBox.style.cursor = 'pointer';
    lightBoxIndex--;
    changeLightBoxes();
  } else {
    previousBox.style.cursor = 'no-drop';
  }
}

changeLightBoxes();

function changeLightBoxes() {

  document.getElementById('light_box_img').src = `./images/image-product-${lightBoxIndex}.jpg`;
  document.getElementById('light_box_img').alt = `product-${lightBoxIndex}`;

}

let thumbLightBox = document.querySelectorAll('#thumb_light_box img');

thumbLightBox.forEach((e,i) => {

  e.addEventListener('click', function() {
    lightBoxIndex = i + 1;
    changeLightBoxes();

    if(lightBoxIndex < imgs.length) {
      nextBox.style.cursor = 'pointer';
    }
    if(lightBoxIndex > 1) {
      previousBox.style.cursor = 'pointer';
    }
  })

})