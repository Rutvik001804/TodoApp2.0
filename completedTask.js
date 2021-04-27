// Task Go To Todo to Completed Task
const completedTask = (ele) => {
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btncompleted', 2);
    
    // completedTodo.push(todo[last[1]]);
    // todo.splice(last[1],1);

    var todos = JSON.parse(localStorage.getItem("myTodo"));
    var completedTodos = JSON.parse(localStorage.getItem("myCompletedTodo"));

    completedTodos.push(todos[last[1]]);
    todos.splice(last[1],1);

    localStorage.setItem("myTodo", JSON.stringify(todos));
    localStorage.setItem("myCompletedTodo", JSON.stringify(completedTodos));

    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Completed Successfully";

    display();
    
    console.log("Task Go To Completed");
    console.log(completedTodo);
}