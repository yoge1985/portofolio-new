const inputEl = document.querySelector('.form__input');
const btn = document.getElementById('btn');
const resetEl = document.querySelector('.reset');
const resultEl = document.getElementById('result');

let value = 0;

const checkValue = (char) => {
    switch (char) {
        case "א":
            value += 1;
            break;
        case "ב":
            value += 2
            break;
        case "ג":
            value += 3
            break;
        case "ד":
            value += 4
            break;
        case "ה":
            value += 5
            break;
        case "ו":
            value += 6
            break;
        case "ז":
            value += 7
            break;
        case "ח":
            value += 8
            break;
        case "ט":
            value += 9
            break;
        case "י":
            value += 10
            break;
        case "כ":
        case "ך":
            value += 20
            break;
        case "ל":
            value += 30
            break;
        case "מ":
        case "ם":
            value += 40
            break;
        case "ןנ":
        case "ן":
            value += 50
            break;
        case "ס":
            value += 60
            break;
        case "ע":
            value += 70
            break;
        case "פ":
        case "ף":
            value += 80
            break;
        case "צ":
        case "ץ":
            value += 90
            break;
        case "ק":
            value += 100
            break;
        case "ר":
            value += 200
            break;
        case "ש":
            value += 300
            break;
        case "ת":
            value += 400
            break;
        case " ":
        case '"':
        case "-":
            value += 0
            break;
        default:
            value = 0;
    }
}

const getString = () => {
    const input = inputEl.value;
    [...input].forEach((char) => {
        checkValue(char);
    });
}


const checkResult = () => {
    if (value === 0) {
        alert("Error! Please try again");
        inputEl.value = '';
    }
    else {
        showResult();
    }
}

showResult = () =>  {
    const endValue =  value.toLocaleString();
    resultEl.innerText = endValue;
}

resetValue = ()  => value = 0;
reset = ()  => resultEl.innerText = '';

const start = (e) => {
    e.preventDefault();
    resetValue();
    getString();
    checkResult();
}


btn.addEventListener('click', start);
resetEl.addEventListener('click', reset);