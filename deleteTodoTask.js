// Delete Task From Todo
const deleteTask = (dlt) => {
    var index = document.getElementById(dlt.id);
    index = index.id;
    var last = index.toString().split('btnDelete', 2);
    
    // todo.splice(last[1],1);

    var todos = JSON.parse(localStorage.getItem("myTodo"));
    todos.splice(last[1],1);
    localStorage.setItem("myTodo", JSON.stringify(todos));

    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => {
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Deleted Successfully";

    display();
    
    console.log("Task Permanently Deleted From Todo");
    console.log(todo);
}