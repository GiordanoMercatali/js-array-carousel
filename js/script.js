const itemsElem  = document.querySelector(".items");
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

let currentImageIndex = 0;

for (let i = 0; i < images.length; i++) {
    // const element = images[i];
    console.log(images[i]);

    /*if (i === 0) {
        itemsElem.innerHTML += `<div class="item active"><img src="${element}" alt=""></div>`
    } else{
        itemsElem.innerHTML += `<div class="item"><img src="${element}" alt=""></div>`
    }*/

    itemsElem.innerHTML += `<div class="item"><img src="${images[i]}" alt=""></div>`
};

const item = document.querySelectorAll(".item");
console.log(item);

item[currentImageIndex].classList.add("active");

document.getElementById("next-btn").addEventListener("click", function() {
        
    if(currentImageIndex < images.length - 1){
        item[currentImageIndex].classList.remove("active");
        currentImageIndex++;
        item[currentImageIndex].classList.add("active");
    }
});

document.getElementById("prev-btn").addEventListener("click", function() {
        
    if(currentImageIndex > 0){
        item[currentImageIndex].classList.remove("active");
        currentImageIndex--;
        item[currentImageIndex].classList.add("active");
    }
}); 