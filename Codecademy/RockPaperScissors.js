const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  //bomb is extra easter egg challenge
  if(['bomb','rock', 'paper', 'scissors'].includes(userInput)){
    return userInput
  }else{
    console.log("Error")
  }
}
//console.log(getUserChoice('rock'))
function getComputerChoice(){
  let num = Math.floor(Math.random()*3)
  if(num === 0){
    return 'rock'
  }else if(num === 1){
    return 'paper'
  }else{
    return 'scissors'
  }
}
//console.log(getComputerChoice())
function determineWinner(userChoice,computerChoice){
  //win every time with bomb
  if(userChoice === 'bomb'){
    return "user wins BOOM"
  }
  if(userChoice === computerChoice){
    return "tie game"
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "computer wins"
    }else{
      return "user wins"
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return "computer wins"
    }else{
      return "user wins"
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return "computer wins"
    }else{
      return "user wins"
    }
  }
}
//console.log(determineWinner(getUserChoice('rock'), getComputerChoice()))
function playGame(){
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice()
  console.log(`${userChoice} and ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
