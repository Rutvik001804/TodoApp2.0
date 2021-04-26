// Open Modal and Send Data To Modal For Particular Task
const editTask = (ele) => {
    $("#edit-newtask").focus();
    
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btnEdit', 2);

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    $("#edit-newtitle").val(todo[last[1]]['title']);
    $("#edit-newtask").val(todo[last[1]]['task']);
    $("#edit-task").append('<input type="hidden" id="editValue" value="'+last[1]+'" />');

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
    
    console.log("Task Go To Edit");
}

// For Edit Task
const editmyTask = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    $("#validation_error_title").html("");
    $("#validation_error_task").html("");

    if(document.getElementById("edit-newtitle").value == '') {
        modal.style.display = "block";
        $("#validation_error_title").html("Please select title");
    }
    if(document.getElementById("edit-newtask").value.trim().length == 0) {
        modal.style.display = "block";
        $("#validation_error_task").html("Please write task to edit todo");
    }
    if(document.getElementById("edit-newtitle").value != '' && document.getElementById("edit-newtask").value.trim().length != 0) {
        var arrId = document.getElementById("editValue").value;
        todo[arrId]['title'] = document.getElementById("edit-newtitle").value;
        todo[arrId]['task'] = document.getElementById("edit-newtask").value.trim();

        var a = document.getElementById('toast');
        a.className = 'show';
        setTimeout(() => { 
            a.className = a.className.replace('show','');
        }, 3000);
        a.innerHTML = "Task Edited Successfully";
        display(this.todo, this.completedTodo);
        modal.style.display = "none";
        $("#editValue").remove();
    }
    document.getElementById('edit-newtask').focus();
}