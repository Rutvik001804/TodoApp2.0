// Todo Task Array
var todo = [];
// Completed Task Array
var completedTodo = [];
console.log(todo);

const display =  (todo,completedTodo) => {
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

    if(todo.length == 0) {
        $(list).append('<li class="no-todo-task" id="no-todo-task">No Tasks. Add Some Tasks</li>');
    }
    else {
        for(let i=0; i<todo.length; i++) {
            let html = '<div class="info-todo">' + 
                            '<button class="completed" id="btncompleted'+i+'" onclick="completedTask(this)">' + 
                                '<i class="fa fa-square-o"></i></button>' + 
                            '<li class="list-todo">'+todo[i]['task']+'</li>' + 
                            '<button class="edit" id="btnEdit'+i+'" onclick="editTask(this)">' + 
                                '<i class="fa fa-edit"></i></button>' + 
                            '<button class="delete" id="btnDelete'+i+'" onclick="deleteTask(this)">' + 
                                '<i class="fa fa-trash"></i></button>'
                        '</div>';
            $(list).append(html);
        }
    }

    if(completedTodo.length == 0) {
        $(listCompleted).append('<li class="no-completed-task" id="no-completed-task">No Completed Tasks</li>');
    }
    else {
        for(let j=0; j<completedTodo.length; j++) {
            let html = '<div class="info-completed">' + 
                            '<button class="incompleted" id="btnincompleted'+j+'" onclick="incompletedTask(this)">' + 
                                '<i class="fa fa-square-o"></i></button>' + 
                            '<li class="list-completed">'+completedTodo[j]['task']+'</li>' + 
                            '<button class="delete" id="deleteBtn'+j+'" onclick="removeTask(this)">' + 
                                '<i class="fa fa-trash"></i></button>'
                        '</div>';
            $(listCompleted).append(html);
        }
    }
}