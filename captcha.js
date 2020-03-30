const createRandomSymbols = () => {
    let randomSymbols = '';
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+';
    for (let i = 0; i < 7; i++) {
        randomSymbols += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return randomSymbols;
};

const functionResult = createRandomSymbols();

const renderRandomSymbols = () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.font = "30px Verdana";
    ctx.strokeStyle = "#5B7C9F";
    ctx.strokeText(functionResult, 55, 50);
};

renderRandomSymbols();

const checkSymbols = () => {
    let input = document.getElementById('input');
    if (functionResult === input.value) {
        input.style.border = "2px solid #39A849";
    } else {
        input.style.border = "2px solid #EA3808";
    }
};

let button = document.querySelector('.button');
button.addEventListener('click', checkSymbols);