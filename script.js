
var popupOpenBtn = document.querySelector(".popup-open-btn");
var popupCloseBtn = document.querySelector(".popup-close-btn");


popupOpenBtn.addEventListener("click", function(){
    document.body.classList.add("popup-active");
});

popupCloseBtn.addEventListener("click" , function(){
    document.body.classList.remove("popup-active");
});