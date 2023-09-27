const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions) {
    let content = desc.innerText;
    if (content.length > 250) {
        content = content.slice(0, 250);
        content += " <a href='#'>...</a>";
        desc.innerHTML = content;
    }
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });


const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
};

const sortByRating = (parkA, parkB) => {
    const parkARatingStr = parkA.querySelector(".rating-display div").innerText;
    const ratingA = parseFloat(parkARatingStr);
    const parkBRatingStr = parkB.querySelector(".rating-display div").innerText;
    const ratingB = parseFloat(parkBRatingStr);
    return ratingB - ratingA;
};
  
const nameSorterClickHandler = (event) => sorterClickHandler(event, sortByName);

const ratingSorterClickHandler = (event) => sorterClickHandler(event, sortByRating);

const sorterClickHandler = (event, sortBy) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort(sortBy);
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
}

// The code that runs once the DOM is loaded
const main = () => {
    const nameSorter = document.querySelector("#name-sorter");
    nameSorter.addEventListener("click", nameSorterClickHandler);
  
    const ratingSorter = document.querySelector("#rating-sorter");
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

window.addEventListener("DOMContentLoaded", main);