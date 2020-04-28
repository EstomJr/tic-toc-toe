let x = document.querySelector('.x');
let o = document.querySelector('.o');
//let boxes = document.querySelectorAll(".box")
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons button');
let message = document.querySelector('#message');
let messageTxt = document.querySelector('#message p ');
let secondPlayer;

//contador

let player1 = 0;
let player2 = 0;
console.log(boxes)
    //evento de cliques
for (let i = 0; i < boxes.length; i++) {
    // quando clicar
    boxes[i].addEventListener("click", function() {
        console.log("entrou")

        let el;

        if (player1 == player2) {
            //x
            el = x;
        } else {
            //0
            el = o;
        }

        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

    });
}