// src/index.js
import odinImage from "./food.png";

const image = document.createElement("img");
const title = document.createElement("h1");
title.innerText = "My Restaurant Homepage";
image.src = odinImage;
image.classList.add('food-image');

export const mainTitle = document.createElement("div");

mainTitle.appendChild(title);
mainTitle.appendChild(image);

image.style.height = "300px";


