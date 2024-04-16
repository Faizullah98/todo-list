// Variables 

const addBtn = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById("input-task");

// Event listner for add button 

addBtn.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let chekButton = document.createElement('button');
    chekButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    chekButton.classList.add('checkButton');
    task.appendChild(chekButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // validation 

    if(inputTask.value === ""){
        alert("Please Enter a Task");
    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    chekButton.addEventListener('click',function(){
        chekButton.parentElement.style.textDecoration = "line-through"
    })

    deleteButton.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
});