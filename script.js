
// <!-- ======================= slideimage javascript =================== -->
console.log("the page  is live")
// creating a array for text 
let sliderContent={
    head:[
"CREATING THE BEST. DAY. EVER.",
"WE CREATE. YOU CELEBRATE.",
"LET,S MAKE UNFORGETABLE MEMORIES TOGETHER"
],
content:[
"Relax while we create the experience of a lifetime",
"Handling the stress so your event is a success",
"Every love story is beautiful, but yours should be unique"
]
}
//creating a array for the image location
let imageSlide=[
"img/slide1.jpg",
"img/slide2.jpg",
"img/slide3.jpg"
]

// declaring all the variables
let sliderActive=0;
let dot=document.querySelectorAll(".dot");
let reach_sliderImg=document.querySelector(".reach_sliderImg");
let textArrow=document.querySelector(".textArrow");
let sliderImg=document.querySelector(".sliderImg");
let head__sliderImg=document.querySelector(".head__sliderImg");
let box__sliderImg=document.querySelector(".box__sliderImg");
let content__sliderImg=document.querySelector(".content__sliderImg");
let arrow=document.querySelector(".arrow__sliderImg");
let headPart=document.querySelector(".headPart");
let handBurger=document.querySelector(".handBurger");
let closeBurger=document.querySelector(".closeBurger");



//changing the readmore to arrow 
reach_sliderImg.addEventListener("mouseenter",()=>{
    textArrow.classList.add("none");
    arrow.classList.remove("none");
})
reach_sliderImg.addEventListener("mouseleave",()=>{
    textArrow.classList.remove("none");
    arrow.classList.add("none");
})
// changing the background image with click and setinterval
 const slidetime=setInterval(sliders, 6000);
 function sliders(){
    sliderActive++;
    slider()
 }
function slider(){
   
    sliderImg.style.backgroundImage=`url("${imageSlide[sliderActive]}")`
    head__sliderImg.innerHTML=sliderContent.head[sliderActive];
    content__sliderImg.innerHTML=sliderContent.content[sliderActive];
    box__sliderImg.classList.add("animi__box");
    setTimeout(() => {
      box__sliderImg.classList.remove("animi__box");
    }, 2000);
    dot.forEach((e,index)=>{
        if(index==sliderActive){
            e.classList.add("active_dot")
        }
        else{
            e.classList.remove("active_dot")
        }
    })
    if(sliderActive>1){
        sliderActive=-1;
    }
  
}
dot.forEach((e,index)=>{
   e.addEventListener('click',()=>{
    sliderActive=index;
    slider()
   })
})

// hand-burger and nav bar in responsive page
handBurger.addEventListener('click',()=>{
    headPart.classList.add("flex")
    console.log("why")
});
closeBurger.addEventListener('click',()=>{
    headPart.classList.remove("flex")
    console.log("why")
})
window.addEventListener('scroll',()=>{
    headPart.classList.remove("flex")
})

// <!-- ======================= about section =================== -->
//declaration
let content2_about= document.querySelector(".content2__about");
let readMore_about= document.querySelector(".readMore__about")

//cerating the readmore button
function readMore(){
 content2_about.classList.toggle('none');
 if (readMore_about.innerHTML === "Read More") {
    readMore_about.innerHTML = "Read Less";
  } else {
    readMore_about.innerHTML = "Read More";
  }
}
console.log("hello")

var swiper = new Swiper(".card__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  speed:1000,
  autoplay:{
      delay:4000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 2,
        
      },
      850: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".card__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        
        },
        768: {
          slidesPerView: 2,
          
        },
        850: {
          slidesPerView: 3,
        },
      },
  });


// <!-- ======================= testimonial =================== -->

  var swiper = new Swiper(".card__slider2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        
        },
        850: {
          slidesPerView: 1,
        },
      },
  });



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 1800,
  reset: false,
});

sr.reveal(`.box__sliderImg , 
         
         .footer__content`, {
  origin: 'bottom',
  interval: 200,
})

sr.reveal(`.testi__container,.head__about`, {
  origin: 'left',
  interval: 200,
})

sr.reveal(`.share__data, .swiper-wrapper1,.content1__about`, {
  origin: 'right'
})
