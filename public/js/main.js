const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
// selects the id timer submit in the dom and listens for a click to set a new timer    
let startTiming
document.querySelector('#timerSubmit').addEventListener('click', () => {
    startTiming = document.querySelector('#time').value
    console.log(startTiming)
    localStorage.setItem('timer', startTiming)
})

console.log(localStorage.getItem('timer'))
// gets time from local storage and uses that for the timer
 let time = +localStorage.getItem('timer') < 1 ? +localStorage.getItem('timer') * 100 : +localStorage.getItem('timer') * 60;
 const count = document.querySelector('#countdown')
 // updates the timer
 function updateTimer(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60; 
    seconds = seconds < 10 ? '0' + seconds : seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--
 }

document.querySelector('#start-timer').addEventListener('click', startTimer)
 function startTimer(){
    // runs the updateTimer function every second
   setInterval(updateTimer, 1000)
 }
