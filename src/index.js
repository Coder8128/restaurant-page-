// index.js
// greeting.js
export const greeting = "Hello, Odinite!";

console.log(greeting);

// src/index.js
import odinImage from "./food.png";

const image = document.createElement("img");
image.src = odinImage;
image.classList.add('food-image');

document.querySelector(".img").appendChild(image);
