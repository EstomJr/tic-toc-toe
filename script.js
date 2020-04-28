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

        //variavel para definir qual player vai jogar, x or o 
        let el = CheckPlay(player1, player2);

        // verifica se ja tem x ou o
        if (this.childNodes.length == 0) {

            //adcionar o elemente aos boxes
            let cloneEl = el.cloneNode(true);
            //inserindo o elemento
            this.appendChild(cloneEl);

            //computador jogada
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            //checar vitoria
            checkWin();

        }
    });
}

//chegar quem é o jogador da rodada
function CheckPlay(player1, player2) {
    if (player1 == player2) {
        //x
        el = x;
    } else {
        //0
        el = o;
    }

    return el;
}

function checkWin() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    //horinzontal 
    //
    if (b1.childNodes.length > 0 && b2.childNodes > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
            console.log('X venceu')

        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            console.log('O venceu')
        }
    }
}