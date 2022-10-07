
const ride = document.querySelector("#ride");
const crash = document.querySelector("#crash");
const hi_hat = document.querySelector("#hi-hat");
const floor_tom = document.querySelector("#floor-tom");
const medium_tom = document.querySelector("#medium-tom");
const high_tom = document.querySelector("#high-tom");
const snare = document.querySelector("#snare");
const bass_drum = document.querySelector("#bass-drum");


ride.addEventListener("click", () => {
    let ride = new Audio();
    ride.src = "ride.wav";
    ride.play();
});

crash.addEventListener("click", () => {
    let crash = new Audio();
    crash.src = "crash.wav";
    crash.play();
});

hi_hat.addEventListener("click", () => {
    let hi_hat = new Audio();
    hi_hat.src = "hi-hat.wav";
    hi_hat.play();
});

floor_tom.addEventListener("click", () => {
    let floor_tom = new Audio();
    floor_tom.src = "floor-tom.wav";
    floor_tom.play();
});

medium_tom.addEventListener("click", () => {
    let medium_tom = new Audio();
    medium_tom.src = "medium-tom.wav";
    medium_tom.play();
});

high_tom.addEventListener("click", () => {
    let high_tom = new Audio();
    high_tom.src = "high-tom.wav";
    high_tom.play();
});

snare.addEventListener("click", () => {
    let snare = new Audio();
    snare.src = "snare.wav";
    snare.play();
});

bass_drum.addEventListener("click", () => {
    let bass_drum = new Audio();
    bass_drum.src = "bass-drum.wav";
    bass_drum.play();
});
