const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener("click", () => {
    const data = taskInput.value

    const li = document.createElement("li")
    const node = document.createTextNode(data)
    li.appendChild(node)
   
    li.addEventListener("click", () => {
        li.classList.toggle("completed")
    })
    

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    deleteBtn.style.marginLeft = "10px"

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li)
    })

 


    taskList.appendChild(li)
    li.appendChild(deleteBtn) 
    
  
    
    taskInput.value = ""
    
})

