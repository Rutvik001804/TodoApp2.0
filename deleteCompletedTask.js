// Delete Task From Completed Task
const removeTask = (dlt) => {
    var index = document.getElementById(dlt.id);
    index = index.id;
    var last = index.toString().split('deleteBtn', 2);
    
    // completedTodo.splice(last[1],1);

    var completedTodos = JSON.parse(localStorage.getItem("myCompletedTodo"));
    completedTodos.splice(last[1],1);
    localStorage.setItem("myCompletedTodo", JSON.stringify(completedTodos));
    
    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Deleted Successfully";

    display();

    console.log("Task Permanently Deleted From Completed Task");
    console.log(completedTodo);
}