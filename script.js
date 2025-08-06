"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  });
}

/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});


// product Link modal dropdown

const productLink = document.querySelector('.navbar-link[href="product.html"]');
const productModal = document.getElementById('productModal');

// Open modal
productLink.addEventListener('click', function (e) {
  e.preventDefault();
  productModal.style.display = 'flex';
});

// Close on outside click
window.addEventListener('click', function (e) {
  if (e.target === productModal) {
    productModal.style.display = 'none';
  }
});

// ESC key to close
window.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    productModal.style.display = 'none';
  }
});


// product Link modal dropdown footer
const modal = document.getElementById("productModal");
const btn = document.getElementById("openProductModal");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "flex";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

