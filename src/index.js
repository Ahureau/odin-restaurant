import './style.css';
import {homeModule} from './modules/homepage.js';
import {menuModule} from './modules/menu.js';
import {contactModule} from './modules/contact.js';
import { aboutModule } from './modules/about.js';

// Select on DOM

const domSelector = (function(){
    const content = document.querySelector("#content");

    const nav = document.querySelector("nav");

    return {
        content,
        nav,
    }
})();

// Add to page

const pageAdd = (function(){

const home = function(){
    homeModule.addToPage(domSelector.content);
};

const menu = function(){
    menuModule.addToPage(domSelector.content);
}

const contact = function(){
    contactModule.addToPage(domSelector.content);
}

const about = function(){
    aboutModule.addToPage(domSelector.content);
}

return {
    home,
    menu,
    contact,
    about,
}
})();

pageAdd.home();

// Clear page

const pageClear = function(){

    const mainContent = domSelector.content;

    while (mainContent.firstChild){
        mainContent.removeChild(mainContent.lastChild);
    }
};

// Update navigation to show selection

const navSelect = function(selected){
    const children = domSelector.nav.children;
    for (let i = 0; i < children.length; i++){
        children[i].classList.remove("selected");
    }
    if (selected !== domSelector.nav){
        selected.classList.add("selected");};
}

// Navigation event listeners

domSelector.nav.addEventListener("click", (event) => {
    let button = event.target
    let buttonId = button.id;
    if (button !== domSelector.nav){
    navSelect(button);
    pageClear();
    switch (buttonId) {
        case "home":
            pageAdd.home();
            break;
        case "menu":
            pageAdd.menu();
            break;
        case "contact":
            pageAdd.contact();
            break;
        case "about":
            pageAdd.about();
            break;
    }};
})