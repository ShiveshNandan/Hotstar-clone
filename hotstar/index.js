alert("this is a clone website");
let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
    image: "images/slider 2.png"
  },
  {
    name: "loki",
    des:
      "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers Endgame ",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
    image: "images/slider 3.png"
  },
  {
    name: "RAYA and The Last DRAGON",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore mollitia autem nobis, dolorem exercitationem minus commodi voluptates iure quas qui eveniet necessitatibus?",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "The movie follows Luca, Alberto, and Giulia's story of friendship and adventure in the Italian Riviera. Recently, Enrico Casarosa, director of Luca, revealed how his childhood inspired the movie. On Disney's official Twitter account, Enrico Casarosa shared how his story helped create Luca's story",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  
    //create DOM element
    let slide= document.createElement("div");
    var imgElement= document.createElement("img");
    let content = document.createElement("div");
    let h1= document.createElement("h1");
    let p= document.createElement("p");

    //attaching all elemnets
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
  slideIndex++;

    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if(sliders.length){
      sliders[0].style.marginLeft = `calc(-${100*(sliders.length - 2)}% - ${
        30 * (sliders.length -2)
      }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();   
}

setInterval(()=>{
    createSlide();
},3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () =>{
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () =>{
    let video = item.children[1];
    video.pause();
  });
})

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});