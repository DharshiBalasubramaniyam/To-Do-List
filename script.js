let addTask = document.getElementById("plus-icon");
let task = document.getElementById("task-input");
let tasklist = document.getElementById("task-container");
let select = document.getElementById("select");
console.log(select);

const activities = tasklist.childNodes;
select.addEventListener("change", (e) => {
    console.log(activities);

    activities.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("complete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "In progress":
                console.log("ji");
                if(!todo.classList.contains("complete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            default:
                break;
        }
    })
})

addTask.addEventListener("click", () => {
    console.log(task.value);

    if (task.value=="") {
        alert("Please Enter a task!");
        return;
    }

    let taskRow = document.createElement("li");
    taskRow.classList.add("taskRow");

    let taskItem = document.createElement("div");
    taskItem.textContent = task.value;
    taskItem.classList.add("taskitem");

    let completeIcon = document.createElement("div");
    completeIcon.innerHTML = "<i class=\"fa fa-check\" aria-hidden=\"true\"></i>";
    completeIcon.classList.add("complete-icon");
    completeIcon.addEventListener("click", () => {
        if(taskRow.classList.contains("complete")) {
            taskRow.classList.remove("complete");
        } else {
            taskRow.classList.add("complete");
        }
        
    })
    
    let deleteIcon = document.createElement("div");
    deleteIcon.innerHTML = "<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>";
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", () => {
        taskRow.remove();
    });

    taskRow.appendChild(taskItem);
    taskRow.appendChild(completeIcon);
    taskRow.appendChild(deleteIcon);

    tasklist.appendChild(taskRow);

    task.value = "";
})
