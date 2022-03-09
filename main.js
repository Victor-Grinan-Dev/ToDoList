
//reading DOM
const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("#add");
const list = document.querySelector("#list");
const response = document.querySelector("#response");
const clear = document.querySelector("#clear");
let taskId = 0;

//functions
const actionToTake = (e) => {
    e.preventDefault();
    console.log(e.path[2].id)
    if (e.path[0].id.includes("task")){
        const currenItem = document.querySelector(`#${e.path[0].id}`);       
        scratchThat(currenItem);

    }else if (e.path[0].id.includes("delete")){
        console.log(e.path);
        const currenItem = document.querySelector(`#${e.path[1].id}
    `); 
    deleteTask(currenItem);
    }
}

const scratchThat = (listItem) => {
    listItem.classList.toggle("scratched");
    console.log(listItem.classList)
}

const deleteTask = (listItem) => {
    listItem.remove();
    if (list.childElementCount === 0){
        taskId = 0;
    }
}

const addTask = (event) => {
    event.preventDefault();
    if(input.value){
        taskId ++;
        response.classList.add("invisible");
        list.innerHTML += `
        <li id="li${taskId}"> 
            <h3 class="task" id="task${taskId}">${taskId} - ${input.value}</h3><button id="deleteBtn${taskId}" class="deleteBtn">X</button>
        </li>
        `
        input.value = ""; 
    }else{
        response.classList.remove("invisible");
    } 
}

const clearList = () => {
    taskId = 0
    list.innerHTML = "";
}

addBtn.addEventListener("click", addTask);
list.addEventListener("click", actionToTake);
clear.addEventListener("click", clearList);


