let clickHandler = (i) => {
    console.log(i ,"clicked");
    let aud = new Audio(audio[i]);
    aud.play();
}

let btns = Array.from(document.querySelectorAll(".drum"));
const audio = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
const keys = ["w", "a", "s", "d", "j", "k", "l"];

btns.forEach( (element, index) => {
    element.addEventListener("click", () => {
        clickHandler(index);
    });
});

document.addEventListener("keypress", (e) => {
    switch (e.key) {
        case keys[0]:
            let aud0 = new Audio(audio[0]);
            aud0.play();
            break;

        default:
            break;
    }
})
