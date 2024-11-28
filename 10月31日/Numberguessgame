
function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type="number";
    input.max=100;
    input.min=0;
    input.placeholder = "好きな数字を入力してください(1-100)"
    let button = document.createElement("button");
    button.textContent="予想"
    button.addEventListener("click",function(){
        const userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
            message.textContent="正解!!"
        }else if(userGuess > randomNumber){
            message.textContent = "値が高いんよ！"
        }else{
            message.textContent = "値が小さいんよ！"
        }
    })




    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
    
}