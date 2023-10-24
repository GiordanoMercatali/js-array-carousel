const itemsElem  = document.querySelector(".items");
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImageIndex = 0;

for (let i = 0; i < images.length; i++) {
    const element = images[i];
    console.log(element);

    if (i === 0) {
        itemsElem.innerHTML += `<div class="item active"><img src="${element}" alt=""></div>`
    } else{
        itemsElem.innerHTML += `<div class="item"><img src="${element}" alt=""></div>`
    }
}

nextBtn.addEventListener("click", function() {
    
    if(currentImageIndex < images.length - 1){
        itemsElem.classList.remove("active");
        currentImageIndex++;
        itemsElem.classList.add("active");
    }
});

prevBtn.addEventListener("click", function() {

    if(currentImageIndex > 0){
        itemsElem.classList.remove("active");
        currentImageIndex--;
        itemsElem.classList.add("active");
    }
});