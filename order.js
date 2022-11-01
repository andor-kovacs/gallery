function add() {

    var sum = 0;
    for (let i = 3; i < 9; i++) {
        let numbers = parseInt(document.querySelector(`.bk${i}`).value);
        sum += numbers;
        document.getElementById("answer-pieces").value = sum;
    }
    var result = 0;

    for (let j = 3; j < 4; j++) {
        let prices = parseInt(document.querySelector(`.price${j}`).value);
        console.log(prices)
        result += prices;
        document.getElementById("answer-price").value = result;
    }


}