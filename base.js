const actions = ['+', '-']
const inputAnswer = document.getElementById('inputAnswer')
const exam = document.getElementById('exam')
const task = document.getElementById('task')
const counter = document.getElementById('count')
const modal = document.querySelector('modal');
const close = document.querySelector('close');
document.addEventListener ('keyup', event => {
    if(event.code === 'Enter' ) {
        const ex = examination(inputAnswer, result)
    return ex
    }
})
let count = 0


function getRandomnumber(min, max) {
    return Math.random() * (max - min) + min;
  }

function getAll(){
    num1 = Math.trunc(getRandomnumber(1, 500))
    num2 = Math.trunc(getRandomnumber(1, 500))
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
printTask(expression)
printCounter(counter)

function examination(inputAnswer, trueSolution) {
    const userAnswer = Number(inputAnswer.value)

    if (userAnswer === trueSolution) {
        count++
        console.log(count)
        getAll()
        printTask(expression)
        printCounter()
        document.getElementById('inputAnswer').value=''
        console.log(result)
        }
    else {
        alert ('Ваш счет : ' + count)
        count = 0
        console.log(count)
        getAll()
        printTask(expression)
        printCounter()
        document.getElementById('inputAnswer').value=''
        console.log(result)
        
    }
}

exam.onclick = function () {
    const ex = examination(inputAnswer, result)
    return ex
    
}

console.log(result)