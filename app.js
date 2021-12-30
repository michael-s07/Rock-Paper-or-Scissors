const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ||userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Error! Not Found');
    }
  };
  
  
  console.log(getUserChoice('Rock'));
  console.log(getUserChoice('leaf'));
  
  function getComputerChoice(){
    ranNum = Math.floor(Math.random()*3)
    switch (ranNum){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'The Game is a tie.'
    }
    if(userChoice === 'bomb'){
      return 'You Won!'
    }
    if (userChoice === 'rock'){
      if(computerChoice ==='paper'){
        return 'Computer  Wins'
      }else{
        return 'You won!'
      }
    }
    if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer win!';
    } else {
      return 'You won!';
    }
  }
  }
  
  console.log(determineWinner('paper', 'scissors')); 
  console.log(determineWinner('paper', 'paper')); 
  console.log(determineWinner('bomb', 'rock')); 
  
  const playGame = () => {
     const userChoice = getUserChoice('scissors');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();