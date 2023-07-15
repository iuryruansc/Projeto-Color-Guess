const circleLocation = document.querySelector('#colors');
const allCircles = document.getElementsByClassName('ball');
let score = 0;

// função para criar os círculos 
const createCircle = () => {
    for (let index = 0; index < 6; index += 1) {
        const circle = document.createElement('div');
        circle.classList.add('ball');
        circleLocation.appendChild(circle);
    }
}

// função para atribuir cores
const circleBGColor = () => {
    var newArray = [];
    for (let index = 0; index < allCircles.length; index += 1) {
        const backgroundRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        allCircles[index].style.backgroundColor = backgroundRGB;
        newArray.push(backgroundRGB);
    }
    document.querySelector('#rgb-color').innerHTML = newArray[Math.floor(Math.random() * newArray.length)]
}

// função de click nos círculos
const guessColor = () => {
    circleLocation.addEventListener('click', (event) => {
        const circle = event.target;
        if (circle.classList.contains('ball')) {
            if (document.querySelector('#rgb-color').innerHTML === circle.style.backgroundColor) {
                document.querySelector('#answer').innerHTML = "<strong>Acertou! Tente Novas Cores!</strong>";
                score += 3;
            } else {
                document.querySelector('#answer').innerHTML = "<strong>Errou! Tente novamente</strong>"
                if (score <= 0) {
                    score = 0
                } else {
                    score -= 3;
                }
            }
        }
        document.querySelector('#score').innerHTML = `Seu Placar: ${score}`;
    })
}

// função para resetar o jogo
const resetGame = () => {
    circleBGColor();
    document.querySelector('#answer').innerHTML = '<strong>Escolha uma cor</strong>';
}

// função para aumentar a dificuldade
const increaseDifficulty = () => {
    const newCircle = document.createElement('div');
    newCircle.classList.add('ball');
    const backgroundRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    newCircle.style.backgroundColor = backgroundRGB;
    circleLocation.appendChild(newCircle);
    circleBGColor();
}

// função para diminuir dificuldade
const decreaseDifficulty = () => {
    circleLocation.lastElementChild.remove();
    circleBGColor();
}

const buttonRemove = document.querySelector('#remove');
buttonRemove.addEventListener('click', decreaseDifficulty);

const buttonIncrease = document.querySelector('#increase');
buttonIncrease.addEventListener('click', increaseDifficulty);

const buttonReset = document.querySelector('#reset-game');
buttonReset.addEventListener('click', resetGame);

window.onload = () => {
    guessColor();
    createCircle();
    circleBGColor();
}