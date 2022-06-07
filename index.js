let tasks = []
let amts = []
let task = "TEST TASK"
let total_amt = 0;
let wash = false;
let mow = false;
let pull = false;
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const sendBtn = document.getElementById("send-btn")
const removeBtn = document.getElementById("remove-btn")
const TaskUlEl = document.getElementById("ul-task-el")
const AmtUlEl = document.getElementById("ul-amt-el")
const TotalAmtEl = document.getElementById("total-amt-el")
const wash_amt = 10
const mow_amt = 20
const pull_amt = 30
/*const task =[
    {name:'Wash car', price:10, id:1}
    {name:'Mow lawn', price:20, id:2}
    {name:'Pull weeds', price:30, id:3}
]*/
/*listTasks = `
            <li>
                <p>
                    ${task}
                </p>
            </li>
        `
listAmts = `
            <li>
                <p>
                    ${amt}
                </p>
            </li>
        `
        
TaskUlEl.innerHTML = listTasks
AmtUlEl.innerHTML = listAmts
*/

/*Event listeners that check for jobs added. Job can only be added once.*/
washBtn.addEventListener("click", function() {
    if (wash === false) {
        tasks.push("Wash car")
        amts.push(wash_amt)
        total_amt += wash_amt
        console.log(tasks)
        /*TaskUlEl.textContent = tasks[0]*/
        render()
        /*Set to true so it cannot be added again*/
        wash = true
    }
})
mowBtn.addEventListener("click", function() {
    if (mow === false) {
        tasks.push("Mow lawn")
        amts.push(mow_amt)
        total_amt += mow_amt
        console.log(tasks)
        render()
        /*Set to true so it cannot be added again*/
        mow = true
    }
})
pullBtn.addEventListener("click", function() {
    if (pull === false) {
        tasks.push("Pull weeds")
        amts.push(pull_amt)
        total_amt += pull_amt
        console.log(tasks)
        render()
        /*Set to true so it cannot be added again*/
        pull = true
    }
})

/*Clear tasks and amounts when sending invoice. Reinitalize bools*/
sendBtn.addEventListener("click", function() {
    tasks = []
    amts = []
    total_amt = 0
    wash = false
    mow = false
    pull = false
    render()
})


/*Render updated screen*/
function render(){
    TaskUlEl.textContent = ""
    AmtUlEl.textContent = ""
    /*Render out tasks*/
    for (let i = 0; i < tasks.length; i++){
            TaskUlEl.innerHTML += `
            <li>
                ${tasks[i]}
            </li>
        `
    }
    /*Render out amounts for each task*/
    for (let j = 0; j < amts.length; j++){
            AmtUlEl.innerHTML += `
            <li>
                $${amts[j]}
            </li>
        `
    }
    /* Render total amount that needs to be charged*/
    TotalAmtEl.textContent = "$" + total_amt
}