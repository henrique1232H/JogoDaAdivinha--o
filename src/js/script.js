let count = 0;

const takeQuerySelector = () => {
    const buttonGame = document.querySelectorAll("button")[1];
    const title = document.querySelector(".title");
    const position = document.querySelector(".position");
    const divResult = document.querySelector(".result");
    const buttonBack = document.querySelectorAll("button")[0];
    const p = title.querySelector(".p");
    
    
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
        takeQuery.divResult.classList.add("hide");
        takeQuery.title.classList.remove("hide");
        takeQuery.position.classList.remove("hide");
        resetCount();
        resetP();
        addKeyEnter();
        
    })
    
    addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            takeQuery.divResult.classList.add("hide");
            takeQuery.title.classList.remove("hide");
            takeQuery.position.classList.remove("hide")
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
    
    if(check > 10 || check < 0) {

        takeQuery.p.innerHTML = " *Insira um número entre 1 e 10";
        takeQuery.p.style.color = "red";
        return;
    }

    
    count++;
    
    
    if(result === check) {
        
        takeQuery.title.classList.add("hide");
        takeQuery.position.classList.add("hide");
        takeQuery.divResult.classList.remove("hide");
        
        buttonBack();
        
        
    } else {
        
        pAnimation();
        takeQuery.p.innerHTML = `Errou! o número é ${result}`;
        
    };


}

const matchNumber = () => {
    
    takeQuery.buttonGame.addEventListener("click", () => {
        match();
       
    });
};


matchNumber();