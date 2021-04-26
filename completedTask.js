// Task Go To Todo to Completed Task
const completedTask = (ele) => {
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btncompleted', 2);
    
    completedTodo.push(todo[last[1]]);
    todo.splice(last[1],1);

    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Completed Successfully";

    display(this.todo, this.completedTodo);
    
    console.log("Task Go To Completed");
    console.log(completedTodo);
}