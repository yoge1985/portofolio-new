const quotesEl = document.querySelector('.quotes');
const quotes = [
    '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',

    '“First, solve the problem. Then, write the code.”',

    '“Code is like humor. When you have to explain it, it’s bad.”',

    '“There is an easy way and a hard way. The hard part is finding the easy way.”'
];

let count = -1;

function showQuotes() {
    quotesEl.style.opacity = 1;
    if (count < quotes.length -1) {
        count ++;
    } else {
        count = 0;
    }
    quotesEl.innerHTML = quotes[count];
    setTimeout(() => {
        animate();
    }, 5000);
}

function animate() {
    quotesEl.style.opacity = 0;
    setTimeout(() => {
        showQuotes();
    }, 1000);
}
        
document.onload = showQuotes();

AOS.init({
    delay:200,
    duration: 1500,
    once: false,
    mirror: false,
});

