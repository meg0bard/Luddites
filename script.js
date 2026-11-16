const spreads = [
    "img/spreads/spread01.png",
    "img/spreads/spread02.png",
    "img/spreads/spread03.png",
    "img/spreads/spread04.png",
    "img/spreads/spread05.png",
    "img/spreads/spread06.png",
    "img/spreads/spread07.png",
    "img/spreads/spread08.png",
    "img/spreads/spread09.png",
    "img/spreads/spread10.png",
    "img/spreads/spread11.png",
    "img/spreads/spread12.png",
    "img/spreads/spread13.png",
    "img/spreads/spread14.png",
    "img/spreads/spread15.png",
    "img/spreads/spread16.png",
    "img/spreads/spread17.png",
    "img/spreads/spread18.png",
    "img/spreads/spread19.png",
    "img/spreads/spread20.png",
    "img/spreads/spread21.png",
    "img/spreads/spread22.png",
    "img/spreads/spread23.png",
    "img/spreads/spread24.png",
    "img/spreads/spread25.png",
    "img/spreads/spread26.png",
];

let currentSpread = 0;

const spreadImage = document.getElementById("spread");

document.getElementById("next").addEventListener("click", function() {
    currentSpread++;

    if (currentSpread >= spreads.length) {
        currentSpread = 0;
    }

    spreadImage.src = spreads[currentSpread];
});

document.getElementById("prev").addEventListener("click", function() {
    currentSpread--;

    if (currentSpread < 0) {
        currentSpread = spreads.length - 1;
    }

    spreadImage.src = spreads[currentSpread];
});