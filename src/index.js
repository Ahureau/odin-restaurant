import './style.css';
import {homeModule} from './modules/homepage.js';
import {menuModule} from './modules/menu.js';

const content = document.querySelector("#content");

const home = function(){
    homeModule.addToPage(content);
};

const menu = function(){
    menuModule.addToPage(content);
}

menu();