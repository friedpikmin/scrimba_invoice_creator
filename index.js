const jobBtns = document.getElementById("job-btns")
const sendBtn = document.getElementById("send-btn")
//const removeBtn = document.getElementById("remove-btn")
const TaskUlEl = document.getElementById("ul-task-el")
const AmtUlEl = document.getElementById("ul-amt-el")
const TotalAmtEl = document.getElementById("total-amt-el")
const taskGroup = document.getElementById("tasks")
const tasks = [
    {name: "Wash car", price: 10, id: "1"},
    {name: "Mow lawn", price: 20, id: "2"},
    {name: "Pull weeds", price: 30, id: "3"}
]
const selectedTasks = new Set()

/*Render task buttons*/
for (let task of tasks){
   jobBtns.innerHTML += `
            <button value = "${task.id}">
                ${task.name}: $${task.price} 
            </button>
            `
}
//Initialize total amount
TotalAmtEl.textContent = "$" + 0

//Event listeners that check for jobs added. Task can only be added once.
jobBtns.addEventListener("click", function(e) {
    const target = e.target
    if (target.tagName === 'BUTTON'){
        const obj = tasks.find( task => task.id === target.value)
        selectedTasks.add(obj)
    }
    render(selectedTasks)
})

//Send Invoice (Clear)
sendBtn.addEventListener("click", function() {
    selectedTasks.clear()
    render(selectedTasks)
})

//Delete task from list
taskGroup.addEventListener("click", function(e) {
    const target = e.target
    if (target.tagName === 'BUTTON'){
        //The html/target ID is prefixed with an 'r'. So we need to remove that in order for target ID = set ID.
        removeTask(target.id.slice(1))
        render(selectedTasks)
    }
})

// Remove task from set
function removeTask(item){
    selectedTasks.forEach(task => {
        if(task.id === item) {
            selectedTasks.delete(task)
        }
    })
}
// Render updated screen
function render(tasks){
    //Initialize task list and amounts
    let taskList = ""
    let price = ""
    let total_amt = 0
    //List each task and amount
    for (let task of tasks){
            taskList += `<li>${task.name} <button id="r${task.id}">remove</button></li>`
            price += `<li>$${task.price}</li>`
            total_amt += task.price
    }
    TaskUlEl.innerHTML = taskList
    AmtUlEl.innerHTML = price
    TotalAmtEl.textContent = "$" + total_amt
}
