
// create a two player Tic-Tac-Toe game. The users should be able to click to place
// their X or O and if they win the program should mention their win in the DOM.
//
//A game of Tic Tac Toe that will be played between two players.
//One of the players will choose ‘O’ and the other ‘X’ to mark their cells.
//The game ends when one of the players has one whole row/ column/ diagonal filled with their character (‘O’ or ‘X’).
//If no one wins, there will be an alert that says DRAW!
//If someone wins it'll alert Winner!
// this is the winning combinations.
// objectn winCombo

//<==============House Cass Worked on this Together=======================>
//Ibrahim, Johnbel, Shawn, and Rahma


//the selectors
const button = document.getElementById('restartButton')
const cells = [...document.getElementsByClassName('cell')]
const title = document.getElementById('title')
//game object
const game = {

//empty array that will change after each click
  board: ['','','','','','','','',''],
//tracks players turn
  turn: 0,
//tracks all the event listeners
addClickEvents: ()=>{
cells.forEach(x=>x.addEventListener('click', game.makeMoneyMove))
},

//removes the event listerns so you cannot double click
removeClickEvents: ()=>{
  cells.forEach(x=>x.removeEventListener('click', game.makeMoneyMove))
},
//moves on to the next turn by increments
nextTurn: ()=>{game.turn++},

//resets becak to the inital state of the game by return back to the empty array, changes the title back to the initial name, removes all click events
restart: ()=>{
  game.board=['','','','','','','','','']
  game.turn = 0
  cells.forEach(x=>x.classList='cell')
  game.addClickEvents()
  button.style.display='none'
  title.innerHTML = 'Tic-Tac-Toe'
  delete game.win
},

//holds the array of the different winning conditions
winState: [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
],

//The check for win method and its conditions is a for loop that loops through in order to check if a player has won and removed the click events and restarts depending on the state of the game
checkForWin: ()=>{

for (var i = 0; i < 8; i++) {
    let combo = game.winState[i]

    if ((game.board[combo[0]]=== game.board[combo[1]] && game.board[combo[1]]=== game.board[combo[2]]) && game.board[combo[0]]!==''){
game.win = 89

title.innerHTML = (game.board[combo[0]]+' wins')

game.removeClickEvents()

button.style.display='block'
        break
      }
  if((game.board.every(x=>x!==''))&&(!game.win)){

    title.innerHTML = ('Draw')

    button.style.display='block'
        break;
      }
    }
  },

//method that manages the players moves
  makeMoneyMove: (e)=>{
console.log(e.target.id)
  //Removes event listener to only allow one click
  e.target.removeEventListener('click', game.makeMoneyMove )

  //conditional that checks the game for the next turn
  if(game.turn%2){

    //adds a class that allows the X to pop on the game borad
    e.target.classList.add("x")
  //changes the name to show player 2 turn
    game.board[e.target.id]='Player 2'
//consitently checks for the win
    game.checkForWin()
}
  else {
    //adds a class that allows the O to pop on the game borad
        e.target.classList.add('circle')
    //changes the name to show player 1 turn
        game.board[e.target.id]='Player 1'
    //chacks to see if anyone won
       game.checkForWin()
}
//chages on to the next turn
    game.nextTurn()
    
}
}
//adds a cell event listener
game.addClickEvents()







//<========================Non Object Oriented Draft=========================>



// //Array that represents current state of the game, everything is empty at the beginning
// // value will change after each click of a cell
// let gameBoard = ['', '', '', '', '', '', '', '', '']
// //declared function
// let win = false
//
// function checkForWin() {
//   // three dimisasional array of winning Combinations, different winning combinations
//   //diagonal and horizontal
//   let winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   // looping through the winning Combinations and check
//   for (var i = 0; i < winningCombinations.length; i++) {
//     // Combo is an array
//     //Array within an array
//     let combo = winningCombinations[i]
//     //checking if
//     if (gameBoard[combo[0]] === '' || gameBoard[combo[1]] === '' || gameBoard[combo[2]] === '') {
//
//       // console.log(win)
//       //
//       // console.log(gameBoard)
//       continue
//     }
//     // console.log(gameBoard.indexOf(''))
//     if (gameBoard[combo[0]] === gameBoard[combo[1]] && gameBoard[combo[1]] === gameBoard[combo[2]]) {
//       title.innerHTML = (gameBoard[combo[0]] + ' Won')
//       win = true
//       console.log(win)
//       cells.forEach(x => x.removeEventListener('click', clickHandle))
//       restartButton.style.display = "block"
//       break
//     }
//   }
// }
//
//
//
// // if board is full, and no empty strings
// const restart = () => {
//   gameBoard = ['', '', '', '', '', '', '', '', '']
//   TicTacToe.turn = 0
//   win = false
//   cells.forEach(x => x.classList = 'cell')
//   cells.forEach(x => x.addEventListener('click', clickHandle))
//   restartButton.style.display = "none"
//   title.innerHTML = ("Tic Tac Toe ")
// }
// var title = document.getElementById('title');
// var restartButton = document.getElementById("restartButton");
// restartButton.addEventListener("click", restart)
//
//
// //defining an object tictatoe
// const TicTacToe = {
//   turn: 0,
//   nextTurn: () => {
//     TicTacToe.turn++
//   },
// }
// const cells = [...document.getElementsByClassName('cell')]
// const clickHandle = (e) => {
//   e.target.removeEventListener('click', clickHandle)
//   if (TicTacToe.turn % 2 === 0) {
//     e.target.classList.add("x")
//     gameBoard[e.target.id] = 'Player Two'
//     // console.log(gameBoard)
//     checkForWin()
//   } else {
//     e.target.classList.add('circle')
//     gameBoard[e.target.id] = 'Player One'
//     // console.log(gameBoard)
//     checkForWin()
//   }
//   TicTacToe.nextTurn()
//
//   if (gameBoard.indexOf('') === -1 && win === false) {
//     title.innerHTML = ("Its a Draw")
//     console.log(win)
//     restartButton.style.display = "block"
//   }
// }
//
// cells.forEach(x => {
//   return x.addEventListener('click', clickHandle)
// })
// //setting the property value to zero
// //implemting nextTurn each time user click on the dom
// //
