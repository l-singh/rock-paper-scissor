const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Error');
}
};
function getComputerChoice (){
  const number = Math.floor(Math.random() * 3);
  switch(number){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;  
  }
};
function determineWinner (userChoice, computerChoice){
  if(userChoice === computerChoice){
    return('game was a tie');
  }// tie case
  if(userChoice ==='rock'){
    if(computerChoice ==='paper'){
      return('computer won');
    }else{
      return('user won');  
    }
  }// rock case
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return ('user won');
    } else {
      return('computer won');
  }
  }//paper case
  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return ('user won');
    } else {
      return('computer won');
  }
  }//scissor case
  };
function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
  console.log('computer threw: '+ computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
