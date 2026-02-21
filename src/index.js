import { mainTitle } from "./home.js";
import { block } from "./menu.js";
import { aboutBlock } from "./about.js";



document.querySelectorAll("button").forEach(x => x.addEventListener("click", (event) => {
    console.log(event.target.id);
    document.querySelector("#content").innerHTML = "";
    if (event.target.id == "home") {
        document.querySelector("#content").appendChild(mainTitle);
    }
    else if (event.target.id == "menu") {
        document.querySelector("#content").appendChild(block);
    }
    else if (event.target.id == "about") {
        document.querySelector("#content").appendChild(aboutBlock);
    }

}));



