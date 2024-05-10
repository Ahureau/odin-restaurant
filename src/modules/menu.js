// This is the module for the "menu" page of Belle Botanique.

// The current menu, which will be used to print out the UI menu
const menu = {
    "Entrée": {
        "Soupe du Jour": "Chef’s daily creation with seasonal vegetables. €7",
        "Salade Verte": "Mixed greens, heirloom tomatoes, radish, and house vinaigrette. €9",
    },
    "Plats Principaux": {
        "Tarte aux Légumes": "Seasonal vegetable tart with a flaky, butter–free crust. €14",
        "Ratatouille Belle": "Classic Provençal stewed vegetable dish, Belle Botanique style. €16",
        "Boulettes de Champignons": "Mushroom ‘meatballs’ in a rich tomato sauce. €15",
    },
    "Accompagnements": {
        "Légumes Rôtis": "Roasted root vegetables with thyme and rosemary. €6",
        "Purée de Panais": "Creamy parsnip puree with a hint of nutmeg. €5",
    },
    "Desserts": {
        "Mousse au Chocolat Noir": "Silky dark chocolate mousse made with avocado. €8",
        "Tarte aux Pommes": "Apple tart with almond frangipane and caramel drizzle. €9",
    },
    "Boissons": {
        "Vin Biologique": "Selection of organic red, white, and rosé wines. Glass €6 / Bottle €22",
        "Jus Frais": "Freshly squeezed juice of the day. €4",
    },
}


// This creates a li from two items
const menuLine = function(item, description){

    // li that will be added to the menuItemCreator ul
    const line = document.createElement("li");
    line.classList.add("listItem");

    // actual item
    const itemName = document.createElement("p");
    itemName.classList.add("itemName");
    itemName.textContent = item;

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("itemDesc");
    itemDesc.textContent = `— ${description}`;

    // add to li
    line.appendChild(itemName);
    line.appendChild(itemDesc);

    return line;
};

const menuSectionCreator = function(sectionHeader, menuSection){
    
    // Div to contain the section of the menu
    const menuItemContain = document.createElement("div");
    menuItemContain.classList.add("menuItem");

    // Header for that section
    const sectionHead = document.createElement("h2");
    sectionHead.textContent = sectionHeader;
    menuItemContain.appendChild(sectionHead);

    // Item list
    const itemList = document.createElement("ul");
    menuItemContain.appendChild(itemList);

    // menuLines iteration to add to the menuItemContain
    for (const menuItem in menuSection) {
        const section = menuLine(menuItem, menuSection[menuItem]);
        itemList.appendChild(section);
    };

    return menuItemContain;
};

const buildMenu = function(){

    const menuBuilt = document.createElement("div");
    menuBuilt.classList.add("menuBuilt");

    for (const section in menu){
        const menuSection = menuSectionCreator(section, menu[section]);
        menuBuilt.appendChild(menuSection);
    }

    return menuBuilt;
}

// Parces through the whole menu to combine everything, adds a title on top
const menuModule = (function(){

    const header = document.createElement("h1");
    header.textContent = "Seasonal Menu";

    // Function to build the page from all previous elements
    const addToPage = function (parent) {
        parent.style.gap = "4rem";
        parent.appendChild(header);
        parent.appendChild(buildMenu());
    }

    return{
        addToPage,
    }
})();

export {menuModule};