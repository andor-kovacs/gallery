// -----------------------order-------------------------------
function add() {
    var sum = 0;
    let result = 0;
    for (let i = 3; i < 9; i++) {
        let numbers = parseInt(document.querySelector(`.bk${i}`).value);
        document.getElementById("answer-pieces").value = sum;
        sum += numbers;
        console.log(sum);
        console.log(numbers);
        if (numbers > 0) {
            let prices = parseInt(document.querySelector(`.price${i}`).getAttribute('data-price'));
            result += numbers * prices;
            document.getElementById("answer-price").value = result;
            console.log(result);
        }
    }
}

//-----------------------hide-navbar-----------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0px";
    } else {
        document.querySelector(".navbar").style.top = "-1500px";
    }
    prevScrollpos = currentScrollPos;
}