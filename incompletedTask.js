// Task Go To Completed to Todo Task
const incompletedTask = (ele) => {
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btnincompleted', 2);
    
    // todo.push(completedTodo[last[1]]);
    // completedTodo.splice(last[1],1);

    var todos = JSON.parse(localStorage.getItem("myTodo"));
    var completedTodos = JSON.parse(localStorage.getItem("myCompletedTodo"));

    todos.push(completedTodos[last[1]]);
    completedTodos.splice(last[1],1);
    
    localStorage.setItem("myTodo", JSON.stringify(todos));
    localStorage.setItem("myCompletedTodo", JSON.stringify(completedTodos));
    
    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Back Todo Successfully";

    display();
    
    console.log("Task Back To Go Todo");
    console.log(completedTodo);
}