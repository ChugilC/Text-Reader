const main = document.querySelector('main');
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
    {
        image: "./img/thirsty.jpg",
        text: "I'm Thirsty"
    },
    {
        image: "./img/happy.jpg",
        text: "I'm Happy"
    },
    {
        image: "./img/home.jpg",
        text: "I Want To Go Home"
    },
    {
        image: "./img/hungry.jpg",
        text: "I'm Hungry"
    },
    {
        image: "./img/outside.jpg",
        text: "I want To Go Outside"
    },
    {
        image: "./img/grandmas.jpg",
        text: "I want To Go To Grandmas"
    },
    {
        image: "./img/tired.jpg",
        text: "I'm Tired"
    }
];

data.forEach(createBox);

function createBox(item) {
   const box = document.createElement('div');

   const { image, text } = item;

   box.classList.add('box');
   box.innerHTML = `
   <img src="${image}" alt="${text}"/>
   <p class="info">${text}</p>
   `;

   main.appendChild(box);
}