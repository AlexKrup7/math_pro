const actions = ['+', '-']
const inputAnswer = document.getElementById('inputAnswer')
const exam = document.getElementById('exam')
const task = document.getElementById('task')
const counter = document.getElementById('count')
let countdown
const timerDisplay = document.querySelector('.timer_display-left')
let seconds = 10
document.addEventListener ('keyup', event => {
    if(event.code === 'Enter' ) {
        const ex = examination(inputAnswer, result)
    return ex
    }
})
let count = 0


function getRandomnumber(min, max) {
    return Math.random() * (max - min) + min
  }

function getAll(){
    num1 = Math.trunc(getRandomnumber(1, 100))
    num2 = Math.trunc(getRandomnumber(1, 100))
    randomActionIndex = Math.floor(Math.random() * 2)
    expression = randomTask(num1,num2, actions[randomActionIndex])
    result = (randomActionIndex === 0) ? num1 + num2 : num1 - num2
}

getAll()

function randomTask(num1, num2, action) {
    return num1 + action + num2
}

function printTask (expression) {
    task.textContent = expression
}

function printCounter() {
    counter.textContent = count
}
timer(seconds)
printTask(expression)
printCounter(counter)

function examination(inputAnswer, trueSolution) {
    const userAnswer = Number(inputAnswer.value)

    if (userAnswer === trueSolution) {
        count++
        getAll()
        printTask(expression)
        printCounter()
        document.getElementById('inputAnswer').value=''
        return timer(seconds)
        }
    else {
        alert ('Твой счет : ' + count)
        count = 0
        getAll()
        printTask(expression)
        printCounter()
        document.getElementById('inputAnswer').value=''
        return timer(seconds)
    }
}

exam.onclick = function () {
    const ex = examination(inputAnswer, result)
    return ex
    
}

function timer(seconds) {
  clearInterval(countdown)
  const сurrentTime = Date.now()
  const endTime = сurrentTime + seconds * 1000
  displayTimer(seconds)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000)
    if(secondsLeft < 0) {
      alert ('Твой счет : ' + count)
      getAll()
      printTask(expression)
      printCounter()
      document.getElementById('inputAnswer').value=''
      clearInterval(countdown)
      return timer(seconds)

      
    }
    displayTimer(secondsLeft);
  }, 1000);
}

function displayTimer(seconds) {
  const remainderSeconds = seconds % 60
  const display = `${remainderSeconds}`
  document.title = display
  timerDisplay.textContent = display
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
  }