let count = 0;

const takeQuerySelector = () => {
    const p = document.querySelectorAll("p")[1];
    const buttonGame = document.querySelectorAll("button")[1];
    const title = document.querySelector("div.title");
    const position = document.querySelector("div.position");
    const divResult = document.querySelector("div.result");
    const buttonBack = document.querySelectorAll("button")[0];
    
    
    return {
        p: p,
        buttonGame: buttonGame,
        title: title,
        position: position,
        divResult: divResult,
        buttonBack: buttonBack
    }
}

const takeQuery = takeQuerySelector();

const randomNumberFunction = () => {
    return Math.round(Math.random( ) * (10 - 0) + 0)
}


const  checkInput = () => {
    const input = document.querySelector("input").value;
    const inputNumber = Number(input);
    return inputNumber;
}

const resetCount = () => {
    count = 0;
}

const resetP = () => {
    takeQuery.p.innerHTML = "";
}


const buttonBack = () => {

    takeQuery.buttonBack.style.cursor = "pointer";

    const h1 = takeQuery.divResult.querySelector("h1");

    h1.innerHTML = `Você acertou em ${count} tentativas!`;
    h1.style.fontWeight = "400"


    takeQuery.buttonBack.addEventListener("click", () => {
        takeQuery.divResult.style.display = "none";
        takeQuery.title.style.display = "block";
        takeQuery.position.style.display = "block";
        resetCount();
        resetP();
        addKeyEnter();
        
    })
    
    addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            takeQuery.divResult.style.display = "none";
            takeQuery.title.style.display = "block";
            takeQuery.position.style.display = "block";
            resetCount();
            resetP();
            addKeyEnter();
        }
    })
}


const pAnimation = () => {

    
    takeQuery.p.classList.add("animacao");
    
    setTimeout(() => {
        takeQuery.p.classList.remove("animacao");
    }, 1000);
    
}

const match = () => {
    const result = randomNumberFunction();
    const check = checkInput();
    
    if(check > 10) {
        takeQuery.p.innerHTML = " *Insira um número entre 1 e 10";
        takeQuery.p.style.color = "red";
        return;
    }
    
    count = count + 1;
    
    
    if(result === check) {
        
        takeQuery.title.style.display = "none";
        takeQuery.position.style.display = "none";
        takeQuery.divResult.style.display = "flex";
        
        buttonBack();
        
        
    } else {
        
        pAnimation();
        takeQuery.p.innerHTML = `Errou! o número é ${result}`;
        takeQuery.p.style.color = "#34355B";
        takeQuery.p.style.display = "flex";
        takeQuery.p.style.justifyContent = " center";
        
    };
}

const matchNumber = () => {
    
    takeQuery.buttonGame.addEventListener("click", () => {
        match();
       
    });
};

const addKeyEnter = () => {

   addEventListener("keypress", (e) => {
     if(e.key === "Enter"){
        match();
     }
   })
}

matchNumber();
addKeyEnter();
