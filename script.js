const circleLocation = document.querySelector('#colors');

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
    const allCircles = document.getElementsByClassName('ball');
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
                document.querySelector('#answer').innerHTML = "Acertou!";
            } else {
                document.querySelector('#answer').innerHTML = "Errou! Tente novamente"
            }
        }
    })
}

window.onload = () => {
    guessColor();
    createCircle();
    circleBGColor();
}