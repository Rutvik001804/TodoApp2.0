// Todo Task Array
var todo = [];
// Completed Task Array
var completedTodo = [];

if(localStorage.getItem("myTodo") === null) {
    localStorage.setItem("myTodo", '[]');
}
if(localStorage.getItem("myCompletedTodo") === null) {
    localStorage.setItem("myCompletedTodo", '[]');
}

const display =  () => {
    var list = document.getElementById('remaining-tasks');
    var listCompleted = document.getElementById('completed-tasks');

    $("#new_title").val("");
    $("#new_task").val("");
    $("#myInput1").val("");
    
    list.innerHTML = '';
    listCompleted.innerHTML = '';

    document.getElementById("filter-task").selectedIndex = 0;
    $("#search-todo-msg").hide();
    $("#search-completed-msg").hide();

    var todos = JSON.parse(localStorage.getItem("myTodo"));
    var completedTodos = JSON.parse(localStorage.getItem("myCompletedTodo"));

    if(todos.length == 0) {
        $(list).append('<li class="no-todo-task" id="no-todo-task">No Tasks. Add Some Tasks</li>');
    }
    else {
        for(let i=0; i<todos.length; i++) {
            let html = '<div class="info-todo">' + 
                            '<button class="completed" id="btncompleted'+i+'" onclick="completedTask(this)">' + 
                                '<i class="fa fa-square-o"></i></button>' + 
                            '<li class="list-todo">'+todos[i]['task']+'</li>' + 
                            '<button class="edit" id="btnEdit'+i+'" onclick="editTask(this)">' + 
                                '<i class="fa fa-edit"></i></button>' + 
                            '<button class="delete" id="btnDelete'+i+'" onclick="deleteTask(this)">' + 
                                '<i class="fa fa-trash"></i></button>'
                        '</div>';
            $(list).append(html);
        }
    }

    if(completedTodos.length == 0) {
        $(listCompleted).append('<li class="no-completed-task" id="no-completed-task">No Completed Tasks</li>');
    }
    else {
        for(let j=0; j<completedTodos.length; j++) {
            let html = '<div class="info-completed">' + 
                            '<button class="incompleted" id="btnincompleted'+j+'" onclick="incompletedTask(this)">' + 
                                '<i class="fa fa-check-square-o"></i></button>' + 
                            '<li class="list-completed">'+completedTodos[j]['task']+'</li>' + 
                            '<button class="delete" id="deleteBtn'+j+'" onclick="removeTask(this)">' + 
                                '<i class="fa fa-trash"></i></button>'
                        '</div>';
            $(listCompleted).append(html);
        }
    }
}