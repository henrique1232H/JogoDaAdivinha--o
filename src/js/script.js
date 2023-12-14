let count = 0;

const randomNumberFunction = () => {
    return Math.round(Math.random( ) * (10 - 1) + 1)
}


const  checkInput = () => {
    const input = document.querySelector("input").value;
    const inputNumber = Number(input);
    return inputNumber;
}

const resetCount = () => {
    count = 0
}


const buttonBack = (title, position, divResult, count) => {
    const buttonBack = document.querySelectorAll("button")[0];
    buttonBack.style.cursor = "pointer";

    const h1 = divResult.querySelector("h1");

    h1.innerHTML = `Você acertou em ${count} tentativas!`;
    h1.style.fontWeight = "400"


    buttonBack.addEventListener("click", () => {
        divResult.style.display = "none";
        title.style.display = "block";
        position.style.display = "block";
        resetCount();
        
    })
}

const p = document.querySelectorAll("p")[1]

const pAnimation = () => {

    
    p.classList.add("animacao");
    
    setTimeout(() => {
        p.classList.remove("animacao");
    }, 1000);
    
}



const matchNumber = () => {
    
    const buttonGame = document.querySelectorAll("button")[1];
    const title = document.querySelector("div.title");
    const position = document.querySelector("div.position");
    const divResult = document.querySelector("div.result");
    
    buttonGame.addEventListener("click", () => {
        const check = checkInput();
        count = count + 1;

        const result = randomNumberFunction();
        
        if(result === check) {
            
            title.style.display = "none";
            position.style.display = "none";
            divResult.style.display = "flex";
            
            buttonBack(title, position, divResult, count);
            
            
        } else {
            
            pAnimation();
            p.innerHTML = `Errou! o número é ${result}`;
            
        }
    })
}


matchNumber()