let player ={
    name: "You have",
    chips: 200
}

let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el");


let sumEl=document.getElementById("sum-el");
// console.log(sumEl)

let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");

playerEl.textContent= player.name+ ": $"+ player.chips;

function startGame(){
    isAlive=true;
    let firstcard=getRandomNumber();
    let secondcard=getRandomNumber();
    
    cards=[firstcard,secondcard];

    sum=firstcard+secondcard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent="cards:";
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }

    sumEl.textContent="sum:"+sum;

    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You've got BlackJack";
        hasBlackJack=true;
    }
    else{
        message="You're out of the game";
        isAlive=false;
        sum=0;
    }
    messageEl.textContent=message;
}


function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomNumber();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}


function getRandomNumber(){
    let num=Math.floor(Math.random()*13)+1;
    if(num===1){
        return 11;
    }
        
    else if(num>10) {
        return 10;
    }
    else{
        return num;
    }
}