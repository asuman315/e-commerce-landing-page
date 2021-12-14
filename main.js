// Hamburger/Mobile menu
const menuBtns = document.querySelectorAll('.menu-btn');
const navList = document.querySelector('.nav-list');
const slide = document.getElementById('.slide')

menuBtns.forEach((menuBtn) => {
 menuBtn.addEventListener('click', () => {
      if (!navList.classList.contains('show')) {
       navList.classList.add('show')
      } else {
       navList.classList.remove('show')
      }
 })
})

//  Manual Slide Show
const images = ['images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg', 'images/image-product-1.jpg'];

const prevIcon = document.querySelector('.prev-icon');
const nextIcon = document.querySelector('.next-icon');
const slideImg = document.querySelector('.slide-img')

let index = 0;

nextIcon.addEventListener('click', () => {
    index++;
    if (index > images.length - 1) {
     index = 0;
    }
    clearInterval(autoPlay);
    slideImage();
})
prevIcon.addEventListener('click', () => {
    index--;
    if (index < 0) {
     index = images.length - 1;
    } 
    slideImage();
    clearInterval(autoPlay);
})
const slideImage = () => {
 return slideImg.src = images[index]
}

//Auto slide Show
const autoPlay = 
    setInterval(() => {
        index++;
        if (index > images.length - 1) {
         index = 0;
        } 
        slideImage();
       }, 3000)

//Thumbnail show
const thumbImages = document.querySelectorAll('.thumb-img');
const thumbnails = document.querySelector('.thumbnails');

thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener('click', (e) => {
        thumbImage.classList.remove('checked-thumbimg')
        clearInterval(autoPlay);
        let style = thumbImage.classList;
        if(style.contains('thumb-img1')) {
            index = 3;
            slideImage();
        }
        else if(style.contains('thumb-img2')) {
            index = 0; 
            slideImage();
        }
        else if(style.contains('thumb-img3')) {
            index = 1; 
            slideImage();
        }
        else {
            index = 2; 
            slideImage();
        }
    });
})

thumbnails.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
        if(id) {
            thumbImages.forEach((thumbImage) => {
                thumbImage.classList.remove('checked-thumbimg');
                e.target.classList.add('checked-thumbimg')
               console.log(thumbImage);
            });
        };
    
})

// Increasing and reducing number of items in cart 
const add = document.querySelector('.add');
const reduce = document.querySelector('.reduce');
const count = document.querySelector('.count');
const countIcon = document.querySelector('.count-icon');
//Checkout selectors
const numbOfItems = document.querySelector('.item-number');
const totalPrice = document.querySelector('.total-price');
const textContainer = document.querySelector('.text-container');
const cartImage = document.querySelector('.cart');
const checkoutContainer = document.querySelector('.checkout-container');
const emptyCheckout = document.querySelector('.empty-checkout');

let counter = 0;
// Calculating total cost of items added to cart
const totalCost = () => {
    let dollar = '$';
    let priceSum = counter * 125.00;
    dollar += priceSum;
    totalPrice.textContent = dollar; 
};

// Event Listeners for 'plus' and 'minus' icons
add.addEventListener('click', () => {
  counter++;
  count.textContent = counter;
  countIcon.textContent = counter;
  //For checkout 
 numbOfItems.textContent = counter;
 totalCost();
});

//textContainer.textContent = 'Your cart is empty'

reduce.addEventListener('click', () => {
  counter--;
  if(counter <= 0) {
      counter = 0;
  }
  count.textContent = counter;
  countIcon.textContent = counter;
   //For checkout 
   numbOfItems.textContent = counter;
   totalCost();
});

// Event listeners of the cart icon
cartImage.addEventListener('click', () => {
checkoutContainer.classList.toggle('show-checkout')
})







