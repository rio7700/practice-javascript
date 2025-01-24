function RPS(){
    const choices =["gu","choki","pa"];
    let handImage=""
    //この書き方は、配列です。c言語参照
    //let select = document.createElement("select");
    //let option1 = document.createElement("option");
    //let option2 = document.createElement("option");
    //let option3= document.createElement("option");
    // const gu = "gu";
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option1.value = "choki";
    // option1.textContent = "choki";
    // select.appendChild(option2);
    // option1.value = "pa";
    // option1.textContent = "pa";
    // select.appendChild(option3);
    // gameContainer.appendChild(select);

    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice =>{
    let option = document.createElement("option");
    option.value = choice;
    option.textContent = choice;
    option.id = choice;
    select.appendChild(option);
});
    gameContainer.appendChild(select);

    let choicebutton = document.createElement("button")
    choicebutton.textContent="決定"
    
    gameContainer.appendChild(choicebutton)


    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "300px";
    image.style.height ="400px";

    let enemyImage = document.createElement("img");
    enemyImage.alt="choice";
    enemyImage.style.width = "300px";
    enemyImage.style.height ="400px";


    choicebutton.addEventListener("click",function(){
    switch(select.value){
        case"gu":
        image.src = "gu.jpg";
        break;
       
        case"choki":
        image.src = "DSC_0272.jpg";
        break;
        
        case"pa":
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_j-0rtxmTLo5kclVg1zdnKNb9DcFpiGNM8g&s";
        break;

        default:
        break;
    }    
    let enemyHand = choices[Math.floor(Math.random() * choices.length)];
    switch(enemyHand){
        case"gu":
        enemyImage.src = "gu.jpg";
        break;
       
        case"choki":
        enemyImage.src = "DSC_0272.jpg";
        break;
        
        case"pa":
        enemyImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_j-0rtxmTLo5kclVg1zdnKNb9DcFpiGNM8g&s";
        break;

        default:
        break;
    }    
    

    })    
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);
}

        //forEach 配列など複数のデータがあるもの使える。全部やる関数。
        //配列.forEach(配列の中身 => {命令})