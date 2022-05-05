const slides = document.querySelector(".home-container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

slides.forEach(function(slide,index){
    slide.style.left= `${index * 100}%`;

});

let counter = 0;
next.addEventListener ('click', function () {
    counter++;
    carousel();
});
prev.addEventListener ('click', function () {
    counter--;
    carousel();
});


function carousel(){

    if(counter === slides.length){
        counter =0;
    }

    if (counter < 0) {
        counter = slides.length -1;
    }


    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}