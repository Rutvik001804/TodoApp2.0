// Open Modal and Send Data To Modal For Particular Task
const editTask = (ele) => {
    $("#edit-newtask").focus();

    $("#validation_error_title").html("");
    $("#validation_error_task").html("");
    
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btnEdit', 2);

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    $("#myModal").show();

    var todos = JSON.parse(localStorage.getItem("myTodo"));

    $("#edit-newtitle").val(todos[last[1]]['title']);
    $("#edit-newtask").val(todos[last[1]]['task']);
    $("#edit-task").append('<input type="hidden" id="editValue" value="'+last[1]+'" />');

    span.onclick = () => {
        $("#myModal").hide();
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            $("#myModal").hide();
        }
    }
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            $("#myModal").hide();
        }
    });
    
    console.log("Task Go To Edit");
}

// For Edit Task
const editmyTask = () => {
    var todos = JSON.parse(localStorage.getItem("myTodo"));

    $("#myModal").show();

    $("#validation_error_title").html("");
    $("#validation_error_task").html("");

    if(document.getElementById("edit-newtitle").value == '') {
        $("#myModal").show();
        $("#validation_error_title").html("Please select title");
    }
    if(document.getElementById("edit-newtask").value.trim().length == 0) {
        $("#myModal").show();
        $("#validation_error_task").html("Please write task to edit todo");
    }
    if(document.getElementById("edit-newtitle").value != '' && document.getElementById("edit-newtask").value.trim().length != 0) {
        var arrId = document.getElementById("editValue").value;
        
        todos[arrId]['title'] = document.getElementById("edit-newtitle").value;
        todos[arrId]['task'] = document.getElementById("edit-newtask").value.trim();

        localStorage.setItem("myTodo", JSON.stringify(todos));

        var a = document.getElementById('toast');
        a.className = 'show';
        setTimeout(() => { 
            a.className = a.className.replace('show','');
        }, 3000);
        a.innerHTML = "Task Edited Successfully";

        display(this.todo, this.completedTodo);
        
        $("#myModal").hide();
        $("#editValue").remove();
    }
    document.getElementById('edit-newtask').focus();
}