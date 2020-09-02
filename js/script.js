var loginLink = document.querySelector(".login-link");
var popupLogin = document.querySelector(".modal-login");
var popupOverlay = document.querySelector(".modal-overlay");
var popupLoginClose = popupLogin.querySelector(".modal-close");
var inputLogin = popupLogin.querySelector(".user-login-icon");
var inputPassword = popupLogin.querySelector(".user-password-icon");
var popupLoginForm = popupLogin.querySelector("form");
var mapLink = document.querySelector(".map-link");
var mapButton = document.querySelector(".map-button");
var popupMap = document.querySelector(".modal-map");
var popupMapClose = popupMap.querySelector(".modal-close");

//открыть модальное окно входа на сайт
loginLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupLogin.classList.add("modal-show");
    popupLogin.classList.add("modal-show-animate");
    popupOverlay.classList.add("modal-show");
    inputLogin.focus();
});

//закрыть модальное окно входа на сайт
popupLoginClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupOverlay.classList.remove("modal-show");
    popupLogin.classList.remove("modal-show");
    popupLogin.classList.remove("modal-show-animate");
    popupLogin.classList.remove("modal-error")
});

window.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 27 && (popupLogin.classList.contains("modal-show") || popupMap.classList.contains("modal-show"))) {
        evt.preventDefault();
        popupOverlay.classList.remove("modal-show");
        popupLogin.classList.remove("modal-show");
        popupLogin.classList.remove("modal-show-animate");
        popupLogin.classList.remove("modal-error");
        popupMap.classList.remove("modal-show");
        popupMap.classList.remove("modal-show-animate");
    }
});

//проверка ввода данных в форму 
popupLoginForm.addEventListener("submit", function(evt) {
    if (!inputLogin.value || !inputPassword.value) {
        evt.preventDefault();
        popupLogin.classList.add("modal-error")
    }
});

//открыть модальное окно с картой
mapButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
    popupMap.classList.add("modal-show-animate");
    popupOverlay.classList.add("modal-show");
})

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
    popupMap.classList.add("modal-show-animate");
    popupOverlay.classList.add("modal-show");
})

//закрыть модальное окно с картой 
popupMapClose.addEventListener("click", function(evt) {
    popupMap.classList.remove("modal-show");
    popupMap.classList.remove("modal-show-animate");
    popupOverlay.classList.remove("modal-show");
})