const result = document.querySelector('.result')
const showChoiceplayMachine =document.getElementById('choiceplayMachine')
const yourScore = document.querySelector('.showScoreHuman')
const machineScore = document.querySelector('.showMachineScore')

let humanScoreNumber=0
let machineScoreNumber=0

    const playHuman = (human) =>{
    playGame(human, playMachine())
}

const playMachine = () =>{
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() *3)
    if(randomNumber === 0){
        showChoiceplayMachine.innerHTML = 'Alexa: &#x1F44A'
    }else if(randomNumber === 1)
    showChoiceplayMachine.innerHTML = 'Alexa: &#x1F590'
    else 
    showChoiceplayMachine.innerHTML = 'Alexa: &#x1F596'
    
    return choices[randomNumber]
}

const playGame = (human, machine)=>{
    console.log('Humano: ' + human + ' -- Máquina: ' + machine)

    if(human === machine){
        result.innerHTML = "Empate &#x1F3B3"
    }else if((human === "paper" && machine==="rock")     ||
               ( human==="rock" && machine==="scissors") ||
               (human==="scissors" && machine==="paper")){

                humanScoreNumber++
                yourScore.innerHTML=humanScoreNumber
        result.innerHTML = "Você GANHOU! &#x1F389"
    }else{
        machineScoreNumber++
        machineScore.innerHTML=machineScoreNumber
        result.innerHTML = "Você PERDEU! &#x1F641"
    }
}