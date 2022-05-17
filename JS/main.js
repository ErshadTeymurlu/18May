let taskInput = document.querySelector("input")
let btnAdd = document.querySelector(".btn-add");
let taskContainer = document.querySelector(".tasks .list-group");
let btnDeleteAll = document.querySelector(".btn-delete");
let taskDate = new Date();
window.addEventListener('keyup', event=>{
    if(event.keyCode === 13){
        if(!taskInput.value.trim() == ""){
            let getDateOfTask = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(); 
        newTask = "<li class = 'list-group-item'>" + taskInput.value + " (" + getDateOfTask +")"+ "</li>";
        taskContainer.innerHTML = newTask + taskContainer.innerHTML;
        taskInput.value="";
        }
        else{
            alert("Can't add empty task!");
        }
    }
})
btnDeleteAll.addEventListener("click",()=>{
    taskContainer.innerHTML = "";
    alert("All tasks deleted!");
})
btnAdd.addEventListener('click',()=>{
    if(!taskInput.value.trim() == ""){
        let getDateOfTask = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear();
        newTask = "<li class = 'list-group-item'>" + taskInput.value + " (" + getDateOfTask + ")" + "</li>";
        taskContainer.innerHTML = newTask + taskContainer.innerHTML;
        taskInput.value = "";
    }
    else{
        alert("Can't add empty task!")
    }
})