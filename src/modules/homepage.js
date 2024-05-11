// This is the module for the "home" page of Belle Botanique.

import beetrootImg from "../images/beetroot.png";

const homeModule = (function(){

    const header = document.createElement("h1");
    header.textContent = "Welcome to Belle Botanique";

    const opener = document.createElement("p");
    opener.textContent = "We elevate humble vegetables to extraordinary heights";

    const beet = new Image(475, 385);
    beet.src = beetrootImg;
    beet.alt = "minimalistic drawing of a beet";

    const closer = document.createElement("p");
    closer.textContent = "Local  ❦  Seasonal  ❦  Creative";

    // Function to build the page from all previous elements
    const addToPage = function(parent){
        parent.style.gap = "2rem";
        parent.appendChild(header)
        parent.appendChild(opener);
        parent.appendChild(beet);
        parent.appendChild(closer);
    }

    return {
        addToPage,
    }

})();

export {homeModule};