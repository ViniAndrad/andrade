const verifyBtn = document.getElementById('verify'); 
const container = document.querySelector('.container');
const centerDiv = document.querySelector('.center-div');

const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');

verifyBtn.addEventListener('click', verifyInput);

function verifyInput() {
    const nome = nomeInput.value.toLowerCase();
    const sobrenome = sobrenomeInput.value.toLowerCase();

    if (!nome || !sobrenome) {
        alert("insira as informações por favor");
        return;
    }

    if (nome === "raiane" && sobrenome === "klingel") {
        startPanning();
    } else {
        alert("Sai pra lá chulé");
    }
}

const paneColors = ["black", "red", "yellow"];
let isPanning = false;

function screenPanningColor() {
    let randomInt = Math.floor(Math.random() * paneColors.length);
    let color = paneColors.at(randomInt);
    return color;
}

function startPanning() {
    isPanning = true;
    document.getElementById('panningSound').play();

    setTimeout(startDialog, 3000);
    centerDiv.style.display = "none";

    PanningScreen();
}

function PanningScreen() {
    let panInterval = setInterval(() => {
        if (!isPanning) {
            clearInterval(panInterval);
            return;
        }
        
        container.style.backgroundColor = screenPanningColor();
    }, 100);
}

function stopPanning() {
    isPanning = false;
    container.style.backgroundColor = "black";
}

let messages = [
".first-message", 
".second-message",
".third-message",
".fourth-message",
".fifth-message",
".sixth-message",
".seventh-message",
".eighth-message",
".ninth-message",
".tenth-message",
".eleventh-message",
".twelvth-message",
".thirteenth-message"
]

let lastElement;
let interval = 1000;
let isGifShowing = false;

function startDialog() {
    setTimeout(stopPanning, 3000);
    lastElement = null;
    messages.forEach((message, index) => {
        let delay = 1000 + index * 4000;
        showDialog(message, delay);
    });
  }

function showDialog(classname, delay) {
    setTimeout(() => {
        if (lastElement) {
            document.querySelector(lastElement).style.display = "none";
        }

        if (classname === ".ninth-message") {
            container.style.backgroundColor = "#ff7289";
        }

        if (classname === ".tenth-message") {
            document.getElementById('legoMusic').play();
        }

        if (classname === ".thirteenth-message") {
            container.style.backgroundColor = "#ffc0cb"
        }

        document.querySelector(classname).style.display = "block";
        lastElement = classname;
    }, delay);
}

const noButton = document.getElementById('no');
noButton.addEventListener('click', randomPosition);

function randomPosition() {
    let newX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    let newY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

    noButton.style.position = "absolute";
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
}

const yesButton = document.getElementById('yes');
yesButton.addEventListener('click', () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=5514998601057&text=Oiii%2C+vamos+assistir+qual+filme%3F&type=phone_number&app_absent=0"
});
