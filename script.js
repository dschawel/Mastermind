//Setting variables
let turn = 1
let playerOne
let playerTwo
let code = {}
let codeColors = ["🔴", "🔵", "🟢", "🟡"]
let answerColors = ["🟤", "⚪️", "⚫️"]
let win = ["🟤", "🟤", "🟤", "🟤"]
let codeWin = []

//Setting up turns 
const turns = () => {
    if (turn % 2 === 0) {
        document.getElementById('message').textContent = "Player Two's turn." 
        // checkForWin(arrPlayerTwo, 'playerTwo')
    } else if (turn % 2 !== 0) {
        if (turn === 1) {
            document.getElementById('message').textContent = "Player One, set your code."   
        } else {
            document.getElementById('message').textContent = "Player One, set your answer pegs"
        }
    }
    //Iterating through turns and if turn is greater than 22 display message that Player Two did not crack the code
    turn++
    if (turn > 22) {
        document.getElementById('message').textContent = "You did not crack the code. Player One wins."
    }
}  


//Set hide button to hide the code
const hideCode = () => {
    document.getElementById('row11col3').style.visibility = 'hidden'
    document.getElementById('row11col4').style.visibility = 'hidden'
    document.getElementById('row11col5').style.visibility = 'hidden'
    document.getElementById('row11col6').style.visibility = 'hidden'
    if (turn === 2) {
        turns()
    }
}
//Adding event listener to hide button and running hideCode function
document.getElementById('hide').addEventListener('click', hideCode)

//Setting up the submit button
const submitGuess = () => {
    //Checking for win, if the code is not correct, go to next turn and reset the code object
    turns()
    checkForWin()
    code = {}
}
//Adding event listener to the submit button and running the submitGuess function
document.getElementById('submit').addEventListener('click', submitGuess)

//Setting up the replay button
const replayGame = () => {
    window.location.reload()
}
//Adding event listener to replay button
document.getElementById('replay').addEventListener('click', replayGame)

//Set the Reveal button to show the code
const showCode = () => {
    document.getElementById('row11col3').style.visibility = 'visible'
    document.getElementById('row11col4').style.visibility = 'visible'
    document.getElementById('row11col5').style.visibility = 'visible'
    document.getElementById('row11col6').style.visibility = 'visible'
}
document.getElementById('reveal').addEventListener('click', showCode)

//Setting function so player can guess a color on each black circle
const guessCode = e => {
    //Setting up a way to loop through each color when the black circles are clicked
    let index = document.getElementById(e.target.id).getAttribute('data-index')
    index = parseInt(index) + 1
    if (index >= codeColors.length) {
        index = 0
    }
    document.getElementById(e.target.id).textContent = codeColors[index]  
    document.getElementById(e.target.id).setAttribute('data-index', index)
}

//Setting event listeners for the black circles so the player can guess.  Not DRY hoping to clean up later
document.getElementById('col2').addEventListener('click', guessCode)
document.getElementById('col3').addEventListener('click', guessCode)
document.getElementById('col4').addEventListener('click', guessCode)
document.getElementById('col5').addEventListener('click', guessCode)
document.getElementById('r2c2').addEventListener('click', guessCode)
document.getElementById('r2c3').addEventListener('click', guessCode)
document.getElementById('r2c4').addEventListener('click', guessCode)
document.getElementById('r2c5').addEventListener('click', guessCode)
document.getElementById('r3c2').addEventListener('click', guessCode)
document.getElementById('r3c3').addEventListener('click', guessCode)
document.getElementById('r3c4').addEventListener('click', guessCode)
document.getElementById('r3c5').addEventListener('click', guessCode)
document.getElementById('r4c2').addEventListener('click', guessCode)
document.getElementById('r4c3').addEventListener('click', guessCode)
document.getElementById('r4c4').addEventListener('click', guessCode)
document.getElementById('r4c5').addEventListener('click', guessCode)
document.getElementById('r5c2').addEventListener('click', guessCode)
document.getElementById('r5c3').addEventListener('click', guessCode)
document.getElementById('r5c4').addEventListener('click', guessCode)
document.getElementById('r5c5').addEventListener('click', guessCode)
document.getElementById('r6c2').addEventListener('click', guessCode)
document.getElementById('r6c3').addEventListener('click', guessCode)
document.getElementById('r6c4').addEventListener('click', guessCode)
document.getElementById('r6c5').addEventListener('click', guessCode)
document.getElementById('r7c2').addEventListener('click', guessCode)
document.getElementById('r7c3').addEventListener('click', guessCode)
document.getElementById('r7c4').addEventListener('click', guessCode)
document.getElementById('r7c5').addEventListener('click', guessCode)
document.getElementById('r8c2').addEventListener('click', guessCode)
document.getElementById('r8c3').addEventListener('click', guessCode)
document.getElementById('r8c4').addEventListener('click', guessCode)
document.getElementById('r8c5').addEventListener('click', guessCode)
document.getElementById('r9c2').addEventListener('click', guessCode)
document.getElementById('r9c3').addEventListener('click', guessCode)
document.getElementById('r9c4').addEventListener('click', guessCode)
document.getElementById('r9c5').addEventListener('click', guessCode)
document.getElementById('r10c2').addEventListener('click', guessCode)
document.getElementById('r10c3').addEventListener('click', guessCode)
document.getElementById('r10c4').addEventListener('click', guessCode)
document.getElementById('r10c5').addEventListener('click', guessCode)

//Setting up the function to allow the player to cycle through the answer colors
const getAnswer = e => {
    let index = document.getElementById(e.target.id).getAttribute('data-index')
    index = parseInt(index) + 1
    if (index >= answerColors.length) {
        index = 0
    }
    document.getElementById(e.target.id).textContent = answerColors[index]
    document.getElementById(e.target.id).setAttribute('data-index', index)
    //Taking the current value of e.target.id and index at that id and pushing it to the empty code object
    code[e.target.id] = answerColors[index]
}

//Setting event listeners for answer slots. Not DRY, hope to clean it up later
document.getElementById('col6').addEventListener('click', getAnswer)
document.getElementById('col7').addEventListener('click', getAnswer)
document.getElementById('col8').addEventListener('click', getAnswer)
document.getElementById('col9').addEventListener('click', getAnswer)
document.getElementById('r2c6').addEventListener('click', getAnswer)
document.getElementById('r2c7').addEventListener('click', getAnswer)
document.getElementById('r2c8').addEventListener('click', getAnswer)
document.getElementById('r2c9').addEventListener('click', getAnswer)
document.getElementById('r3c6').addEventListener('click', getAnswer)
document.getElementById('r3c7').addEventListener('click', getAnswer)
document.getElementById('r3c8').addEventListener('click', getAnswer)
document.getElementById('r3c9').addEventListener('click', getAnswer)
document.getElementById('r4c6').addEventListener('click', getAnswer)
document.getElementById('r4c7').addEventListener('click', getAnswer)
document.getElementById('r4c8').addEventListener('click', getAnswer)
document.getElementById('r4c9').addEventListener('click', getAnswer)
document.getElementById('r5c6').addEventListener('click', getAnswer)
document.getElementById('r5c7').addEventListener('click', getAnswer)
document.getElementById('r5c8').addEventListener('click', getAnswer)
document.getElementById('r5c9').addEventListener('click', getAnswer)
document.getElementById('r6c6').addEventListener('click', getAnswer)
document.getElementById('r6c7').addEventListener('click', getAnswer)
document.getElementById('r6c8').addEventListener('click', getAnswer)
document.getElementById('r6c9').addEventListener('click', getAnswer)
document.getElementById('r7c6').addEventListener('click', getAnswer)
document.getElementById('r7c7').addEventListener('click', getAnswer)
document.getElementById('r7c8').addEventListener('click', getAnswer)
document.getElementById('r7c9').addEventListener('click', getAnswer)
document.getElementById('r8c6').addEventListener('click', getAnswer)
document.getElementById('r8c7').addEventListener('click', getAnswer)
document.getElementById('r8c8').addEventListener('click', getAnswer)
document.getElementById('r8c9').addEventListener('click', getAnswer)
document.getElementById('r9c6').addEventListener('click', getAnswer)
document.getElementById('r9c7').addEventListener('click', getAnswer)
document.getElementById('r9c8').addEventListener('click', getAnswer)
document.getElementById('r9c9').addEventListener('click', getAnswer)
document.getElementById('r10c6').addEventListener('click', getAnswer)
document.getElementById('r10c7').addEventListener('click', getAnswer)
document.getElementById('r10c8').addEventListener('click', getAnswer)
document.getElementById('r10c9').addEventListener('click', getAnswer)

//Setting up function so player can set code on the code line
const setCode = e => {
    let index = document.getElementById(e.target.id).getAttribute('data-index')
    index = parseInt(index) + 1
    if (index >= codeColors.length) {
        index = 0
    }
    document.getElementById(e.target.id).textContent = codeColors[index]
    document.getElementById(e.target.id).setAttribute('data-index', index)
}

//Setting event listeners for code slots
document.getElementById('code1').addEventListener('click', setCode)
document.getElementById('code2').addEventListener('click', setCode)
document.getElementById('code3').addEventListener('click', setCode)
document.getElementById('code4').addEventListener('click', setCode)

const checkForWin = () => {
    //Taking the values from the code object and placing them in the codeWin array
    //If win is true, display the win message
    let codeWin = Object.values(code)
    for (let i = 0; i < codeWin.length; i++) {
        if (codeWin[i] === win[i] && codeWin.length === win.length) {
            console.log(codeWin)
            console.log(win)
        } else {
            return false
        }
        // Code only reached if true
        document.getElementById('message').textContent = "Congratulations, you cracked the code!"
        showCode()
        document.getElementById('WinSound').play()  
    }    
}



//Setting up the DOM & calling the turns function
document.addEventListener('DOMContentLoaded', () => {
    turns()
})



//Realized I didn't need to go through finding all the combinations
//Setting the function to check for win scenario
// const checkForWin = (code) => {
//     let possibleWins = [
//         [0, 0, 0, 0], [0, 2, 0, 0], [0, 2, 2, 0], [0, 2, 2, 2], [0, 2, 0, 2], [0, 0, 2, 0], [0, 0, 2, 2], [0, 0, 0, 2], [0, 1, 0, 0], [0, 1, 1, 0], [0, 1, 0, 1], [0, 1, 1, 1], [0, 0, 1, 0], [0, 0, 1, 1], [0, 0, 0, 1], [0, 3, 0, 0], [0, 3, 0, 3], [0, 3, 3, 0], [0, 3, 3, 3], [0, 0, 3, 0], [0, 0, 3, 3], [0, 0, 0, 3], [0, 2, 1, 0], [0, 2, 1, 3], [0, 1, 2, 0], [0, 1, 2, 3], [0, 3, 2, 0], [0, 2, 3, 0], [0, 3, 2, 1], [0, 2, 2, 1], [0, 2, 2, 3], [0, 1, 1, 2], [0, 1, 1, 3], [0, 3, 3, 2], [0, 3, 3, 1], [0, 3, 1, 2], [2, 2, 2, 2], [2, 0, 2, 2], [2, 0, 0, 2], [2, 0, 2, 0], [2, 0, 0, 0], [2, 2, 0, 2], [2, 2, 0, 0], [2, 2, 2, 0], [2, 1, 2, 2], [2, 1, 1, 2], [2, 1, 2, 1], [2, 1, 1, 1], [2, 2, 1, 2], [2, 2, 1, 1], [2, 2, 2, 1], [2, 3, 2, 2], [2, 3, 2, 3], [2, 3, 3, 2], [2, 3, 3, 3], [2, 2, 3, 2], [2, 2, 3, 3], [2, 2, 2, 3], [2, 0, 1, 2], [2, 0, 1, 3], [2, 1, 0, 2], [2, 1, 0, 3], [2, 1, 3, 2], [2, 3, 1, 2], [2, 0, 0, 1], [2, 0, 0, 3], [2, 1, 1, 0], [2, 1, 1, 3], [2, 3, 3, 0], [2, 3, 3, 1], [2, 3, 1, 0], [2, 0, 3, 1], [1, 1, 1, 1], [1, 0, 1, 1], [1, 0, 0, 1], [1, 0, 1, 0], [1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [1, 1, 1, 0], [1, 2, 1, 1], [1, 2, 2, 1], [1, 2, 1, 2], [1, 2, 2, 2], [1, 1, 2, 1], [1, 1, 2, 2], [1, 1, 1, 2], [1, 3, 1, 1], [1, 3, 1, 3], [1, 3, 3, 1], [1, 3, 3, 3], [1, 1, 3, 1], [1, 1, 3, 3], [1, 1, 1, 3], [1, 2, 3, 1], [1, 2, 3, 0], [1, 3, 2, 1], [1, 3, 0, 2], [1, 3, 0, 1], [1, 3, 2, 1], [1, 0, 0, 2], [1, 0, 0, 3], [1, 2, 2, 0], [1, 2, 2, 3], [1, 3, 3, 0], [1, 3, 3, 2], [1, 0, 2, 3], [1, 2, 0, 3], [3, 3, 3, 3], [3, 0, 3, 3], [3, 0, 0, 3], [3, 0, 3, 0], [3, 0, 0, 0], [3, 3, 0, 3], [3, 3, 0, 0], [3, 3, 3, 0], [3, 1, 3, 3], [3, 1, 1, 3], [3, 1, 3, 1], [3, 1, 1, 1], [3, 3, 1, 3], [3, 3, 1, 1], [3, 3, 3, 1], [3, 2, 3, 3], [3, 2, 3, 2], [3, 2, 2, 3], [3, 2, 2, 2], [3, 3, 2, 3], [3, 3, 2, 2], [3, 3, 3, 2], [3, 0, 1, 3], [3, 0, 1, 2], [3, 1, 0, 3], [3, 1, 0, 2], [3, 0, 2, 3], [3, 0, 1, 3], [3, 0, 0, 1], [3, 0, 0, 2], [3, 2, 2, 0], [3, 2, 2, 1], [3, 1, 1, 0], [3, 1, 1, 2], [3, 2, 1, 0], [3, 0, 2, 1] 
//     ]
//     //Loop through possibleWins 
//     for (let i = 0; i < possibleWins.length; i++) {
//             if (win == true) {
//                 if (code.includes(possibleWins[i])) {
//                 win = true
//                 document.getElementById('message').textContent = `You cracked the code!`
//             } else {
//                 win = false
//             }
//         }
//     }
// }   

// tried to do drag and drop, this was my code
// const pegs = document.querySelectorAll('.peg')
// const empites = document.querySelectorAll('.empty')

// //Setting drag functions
// const dragStart = () => {
//     this.className += ' hold'
// }
// const dragEnd = () => {
//     this.className = 'peg'
// }
// const dragOver = (e) => {
//     e.preventDefault()
// }
// const dragEnter = (e) => {
//     e.preventDefault()
//     this.className += ' hovered'
// }
// const dragLeave = () => {
//     this.className = 'empty'
// }
// const dragDrop = (e) => {
//     this.className = 'empty'
//     let data = e.dataTransfer.getData('id')
//     e.target.append(document.getElementById(data))
//     console.log(data)
// }
// //Setting up listeners for the pegs.  Tried querySelectorAll for the pegs but couldn't get that to work.  I know this isn't DRY.
// document.getElementById('red-peg').addEventListener('dragstart', dragStart)
// document.getElementById('red-peg').addEventListener('dragend', dragEnd)
// document.getElementById('blue-peg').addEventListener('dragstart', dragStart)
// document.getElementById('blue-peg').addEventListener('dragend', dragEnd)
// document.getElementById('green-peg').addEventListener('dragstart', dragStart)
// document.getElementById('green-peg').addEventListener('dragend', dragEnd)
// document.getElementById('yellow-peg').addEventListener('dragstart', dragStart)
// document.getElementById('yellow-peg').addEventListener('dragend', dragEnd)
// document.getElementById('brown-peg').addEventListener('dragstart', dragStart)
// document.getElementById('brown-peg').addEventListener('dragend', dragEnd)
// document.getElementById('white-peg').addEventListener('dragstart', dragStart)
// document.getElementById('white-peg').addEventListener('dragend', dragEnd)

// //Setting up listeners for empty circles & looping through them
// const empties = document.querySelectorAll('.empty')
//     for (const empty of empties) {
//         empty.addEventListener('dragover', dragOver)
//         empty.addEventListener('dragenter', dragEnter)
//         empty.addEventListener('dragleave', dragLeave)
//         empty.addEventListener('drop', dragDrop)
//     }
