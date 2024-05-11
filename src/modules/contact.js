const contactModule = (function () {

    // Find us section
    const address = document.createElement("div");
    address.classList.add("contactSection");

    const headerFind = document.createElement("h1");
    headerFind.textContent = "Find us";
    address.appendChild(headerFind);

    const findDetails = document.createElement("div");
    findDetails.classList.add("contactDetails");
    address.appendChild(findDetails);

    const addressLineOne = document.createElement("p");
    addressLineOne.textContent = "Oudegracht aan de Werf 154";
    addressLineOne.classList.add("boldText");
    findDetails.appendChild(addressLineOne);

    const addressLineTwo = document.createElement("p");
    addressLineTwo.textContent = "3511 AL Utrecht, Netherlands";
    findDetails.appendChild(addressLineTwo);


    // Reserve a table section
    const phone = document.createElement("div");
    phone.classList.add("contactSection");

    const headerReserve = document.createElement("h1");
    headerReserve.textContent = "Reserve a table";
    phone.appendChild(headerReserve);

    const phoneDetails = document.createElement("div");
    phoneDetails.classList.add("contactDetails");
    phone.appendChild(phoneDetails);

    const reservePhone = document.createElement("p");
    reservePhone.textContent = "By phone";
    reservePhone.classList.add("boldText");
    phoneDetails.appendChild(reservePhone);

    const reservePhoneNumber = document.createElement("p");
    reservePhoneNumber.textContent = "+31 20 123 4567";
    phoneDetails.appendChild(reservePhoneNumber);

    // Function to build the page from all previous elements
    const addToPage = function (parent) {
        parent.style.gap = "4rem";
        parent.appendChild(address);
        parent.appendChild(phone);
    }

    return {
        addToPage,
    }

})();

export { contactModule };