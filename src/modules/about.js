// This is the module for the "home" page of Belle Botanique.

import insideImg from "../images/restaurantInside.png";

const aboutModule = (function () {

    const header = document.createElement("h1");
    header.textContent = "About Belle Botanique";

    const aboutContain = document.createElement("div");
    aboutContain.classList.add("aboutContain");

    const opener = document.createElement("p");
    aboutContain.appendChild(opener);
    opener.innerText = `
                        A place where the love for vegan cuisine and the artistry of gastronomy come together in perfect harmony. Belle Botanique represents passion for sustainability and culinary excellence, a dining experience that celebrates the purest tastes of the earth.

                        Every day, as dawn breaks, Belle Botanique’s kitchen is a canvas of colours and aromas, with chefs transforming the freshest local and seasonal vegetables, fruits, and herbs into culinary creations.

                        The restaurant’s ambiance mirrors the ethos of its menu—reclaimed wood,  handcrafted pottery, and an indoor garden. Sunlight streams through large windows, casting a welcoming glow over the dining area.`;

    const inside = new Image(900, 900);
    aboutContain.appendChild(inside);
    inside.src = insideImg;
    inside.style.width = "750px";
    inside.style.height = "750px";
    inside.alt = "View of the inside of the restaurant with lush plants and a glass ceiling";

    const closer = document.createElement("p");
    aboutContain.appendChild(closer);
    closer.innerText = `
                        At Belle Botanique, each meal is an expression of excellence, a commitment to the philosophy that when you respect the ingredients and their origins, the result transcends food—it becomes an experience, a celebration of well–being and the pleasures of plant–based eating.

                        With the changing seasons, the menu evolves, offering guests a constant array of new, exciting dishes that capture the essence of the moment. Belle Botanique is more than a restaurant; it’s a testament to the idea that with creativity and care, vegetables can indeed take center stage in the world of fine dining.`;

    // Function to build the page from all previous elements
    const addToPage = function (parent) {
        parent.style.gap = "1rem";
        parent.appendChild(header)
        parent.appendChild(aboutContain);
    }

    return {
        addToPage,
    }

})();

export { aboutModule };