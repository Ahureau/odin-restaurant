import './style.css';
import {homeModule} from './modules/homepage.js';
import {menuModule} from './modules/menu.js';
import {contactModule} from './modules/contact.js';
import { aboutModule } from './modules/about.js';

const content = document.querySelector("#content");

const home = function(){
    homeModule.addToPage(content);
};

const menu = function(){
    menuModule.addToPage(content);
}

const contact = function(){
    contactModule.addToPage(content);
}

const about = function(){
    aboutModule.addToPage(content);
}

about();