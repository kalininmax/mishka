const page = document.querySelector('.page');
const menu = document.querySelector('.main-navigation');
const burgerButton = menu.querySelector('.main-navigation__toggle');
const slides = document.querySelectorAll('.slider__item');
const toggleBack = document.querySelector('.slider__toggle--back');
const toggleNext = document.querySelector('.slider__toggle--next');
const modalToCart = document.querySelector('.to-cart');
const overlay = document.querySelector('.overlay');
const orderLink = document.querySelectorAll('.add-to-cart');

if(slides.length > 0) {
  function slider(slides, btnBack, btnNext) {
    var i = 0;
    slides[i].classList.add('slider__item--active');

    btnBack.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (i > 0) {
        btnNext.removeAttribute("disabled", "disabled");
        slides[i].classList.remove('slider__item--active');
        i--;
        slides[i].classList.add('slider__item--active');
      }
      if (i == 0) {
        btnBack.setAttribute("disabled", "disabled");
      }
    });

    btnNext.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (i < slides.length - 1) {
        btnBack.removeAttribute("disabled", "disabled");
        slides[i].classList.remove('slider__item--active');
        i++;
        slides[i].classList.add('slider__item--active');
      }
      if (i === slides.length - 1) {
        btnNext.setAttribute("disabled", "disabled");
      }
    });
  }
  slider(slides, toggleBack, toggleNext);
}



function initMenu() {
  page.classList.remove('no-js')
  menu.classList.remove('main-navigation--opened');
}

initMenu();

function toggleMenu() {
  burgerButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('main-navigation--opened');
  });
}

toggleMenu();

if(overlay) {
  function openModal(openButton) {
    openButton.forEach(function(item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        overlay.style.display = "block";
        page.style.overflow = "hidden"
        modalToCart.classList.add('page__modal--opened');
      });
    });
  }

  openModal(orderLink);

  function closeModal(modalToCart) {
    window.addEventListener('keydown', function(evt) {
      evt.preventDefault();
      if (evt.key === 'Escape') {
        overlay.style.display = "none";
        page.style.overflow = "visible"
        modalToCart.classList.remove('page__modal--opened');
      }
    });
    overlay.addEventListener('click', function(evt) {
      evt.preventDefault();
      overlay.style.display = "none";
      page.style.overflow = "visible"
      modalToCart.classList.remove('page__modal--opened');
    });
  };

  closeModal(modalToCart);
}
