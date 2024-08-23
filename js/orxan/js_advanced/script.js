let Arr = [
    {
        src: "images/animal-1.jpg",
        class: "animal",
    },
    {
        src: "images/animal-2.jpg",
        class: "animal",
    },
    {
        src: "images/city-1.jpg",
        class: "city",
    },
    {
        src: "images/city-2.jpg",
        class: "city",
    },
    {
        src: "images/nature-1.jpg",
        class: "nature",
    },
    {
        src: "images/nature-2.jpg",
        class: "nature",
    },
];

let animalBtn = document.querySelector("#animals");
let cityBtn = document.querySelector("#cities");
let natureBtn = document.querySelector("#nature");
let allBtn = document.querySelector("#all");
let images = document.querySelector(".images");



function addAllImages(Arr){
    images.innerHTML = "";
    Arr.forEach((item) => {
        let img = document.createElement("img");
        img.src = item.src;
        img.classList.add(item.class);
        images.append(img);
    });
};
let filter = (classImg) => {
    images.innerHTML = "";
    Arr.forEach((item) => {
        if (item.class === classImg) {
            let img = document.createElement("img");
            img.src = item.src;
            img.classList.add(item.class);
            images.append(img);
        }
    });
};

addAllImages(Arr);
allBtn.addEventListener("click", () => addAllImages(Arr));
animalBtn.addEventListener("click", () => filter("animal"));
cityBtn.addEventListener("click", () => filter("city"));
natureBtn.addEventListener("click", () => filter("nature"));