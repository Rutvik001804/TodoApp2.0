// Todo Task Array
var todo = [];
// Completed Task Array
var completedTodo = [];

const display =  (todo, completedTodo) => {
    var list = document.getElementById('remaining-tasks');
    var listCompleted = document.getElementById('completed-tasks');

    $("#eml").val("");
    $("#pass").val("");

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
                            '<button class="completed" id="'+todo[i]['key']+'" onclick="completedTask(this)">' + 
                                '<i class="fa fa-square-o"></i></button>' + 
                            '<li class="list-todo">'+todo[i]['Task']+'</li>' + 
                            '<button class="edit" id="'+todo[i]['key']+'" onclick="editTask(this)">' + 
                                '<i class="fa fa-edit"></i></button>' + 
                            '<button class="delete" id="'+todo[i]['key']+'" onclick="deleteTask(this)">' + 
                                '<i class="fa fa-trash"></i></button>'
                        '</div>';
            $(list).append(html);
            // console.log("Display : "+todo[i]['Task']);
        }
    }

    if(completedTodo.length == 0) {
        $(listCompleted).append('<li class="no-completed-task" id="no-completed-task">No Completed Tasks</li>');
    }
    else {
        for(let j=0; j<completedTodo.length; j++) {
            let html = '<div class="info-completed">' + 
                            '<button class="incompleted" id="'+completedTodo[j]['key']+'" onclick="incompletedTask(this)">' + 
                                '<i class="fa fa-check-square-o"></i></button>' + 
                            '<li class="list-completed">'+completedTodo[j]['Task']+'</li>' + 
                            '<button class="delete" id="'+completedTodo[j]['key']+'" onclick="removeTask(this)">' + 
                                '<i class="fa fa-trash"></i></button>'
                        '</div>';
            $(listCompleted).append(html);
        }
    }
}

const myDisplay = () => {
    todo = [];
    completedTodo = [];
    const user = firebase.auth().currentUser;
    firebase.database().ref('myList/'+user.uid+'/'+'Todo').once('value', (snapshot) => {
        snapshot.forEach(element => {
            var key = element.key;
            var value = element.val();
            let myTask = {
                key: key,
                Title: value.Title,
                Task: value.Task
            }
            todo.push(myTask);
        });
        display(this.todo, this.completedTodo);
    });
    firebase.database().ref('myList/'+user.uid+'/'+'CompletedTodo').once('value', (snapshot) => {
        snapshot.forEach(element => {
            var key = element.key;
            var value = element.val();
            let myCompletedTask = {
                key: key,
                Title: value.Title,
                Task: value.Task
            }
            completedTodo.push(myCompletedTask);
        });
        display(this.todo, this.completedTodo);
    });
    console.log(todo);
    console.log(completedTodo);
}