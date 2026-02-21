

export const block = document.createElement("div");
const title = document.createElement("h1");
const list = document.createElement("ul");

let menu = ["Ratatouile", "Croissant", "Pasta Carbonara"];

menu.forEach(x => {
    let i = document.createElement("li");
    i.innerText = x;
    list.appendChild(i);
})

title.innerText = "Menu: ";


block.appendChild(title);
block.appendChild(list);

