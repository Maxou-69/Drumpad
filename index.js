let body = document.querySelector('div')
let audioElement = new Audio("./src/sound_1.mp3")
let lettre_key = {
    32: "Beatbox",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
}
Object.entries(lettre_key).forEach(([key, value]) => {
    let div = document.createElement('div');
    div.innerHTML = value;
    div.setAttribute('data-key', key);
    div.setAttribute('class', "letters")
    body.appendChild(div);
});

document.addEventListener('keydown', (event) => {
    let keyCode = event.keyCode;
    let letterDiv = document.querySelector(`div[data-key='${keyCode}']`);
    if (letterDiv) {
        letterDiv.classList.add('active');
        audioElement.play()

    }
});