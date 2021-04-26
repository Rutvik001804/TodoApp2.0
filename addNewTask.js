// Open Modal For Add New Task
const addNewTask = () => {
    $("#new_task").focus();

    var modal = document.getElementById("myModal1");

    var span = document.getElementsByClassName("close1")[0];

    $("#validation_error_title1").html("");
    $("#validation_error_task1").html("");

    $("#new_title").val("");
    $("#new_task").val("");
    
    modal.style.display = "block";

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
}

// For Add New Task in Todo
const addTask = () => {
    var modal = document.getElementById("myModal1");
    modal.style.display = "block";

    $("#validation_error_title1").html("");
    $("#validation_error_task1").html("");

    if($("#new_title").val() == null) {
        $("#validation_error_title1").html("Please select title");
    }
    if($("#new_task").val().trim().length == 0) {
        $("#validation_error_task1").html("Please write task to add todo");
    }
    if($("#new_title").val() != null && $("#new_task").val().trim().length != 0) {
        $("#validation_error_title1").html("");
        $("#validation_error_task1").html("");

        let myTask = {
            "title": $("#new_title").val(),
            "task": $("#new_task").val().trim()
        }

        todo.push(myTask);
        console.log("Add New Task");
        
        var a = document.getElementById('toast');
        
        a.className = 'show';
        setTimeout(() => { 
            a.className = a.className.replace('show','');
        }, 3000);
        a.innerHTML = "Task Added Successfully";
        display(this.todo, this.completedTodo);

        $("#new_title").val("");
        $("#new_task").val("");

        modal.style.display = "none";

    }
    $("#new_task").focus();
}