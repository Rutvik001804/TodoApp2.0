// Open Modal and Send Data To Modal For Particular Task
const editTask = (ele) => {
    $("#edit-newtask").focus();

    $("#validation_error_title").html("");
    $("#validation_error_task").html("");
    
    var index = document.getElementById(ele.id);
    index = index.id;

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    $("#myModal").show();

    var item = todo.filter( e => {
        return e.key == index;
    });

    $("#edit-newtitle").val(item[0]['Title']);
    $("#edit-newtask").val(item[0]['Task']);
    $("#edit-task").append('<input type="hidden" id="editValue" value="'+index+'" />');

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
}

// For Edit Task
const editmyTask = () => {
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

        var item = todo.filter( e => {
            return e.key == arrId;
        });

        const user = firebase.auth().currentUser;

        firebase.database().ref('myList/'+user.uid+'/'+'Todo/'+item[0]['key']).update({
            Title: document.getElementById("edit-newtitle").value,
            Task: document.getElementById("edit-newtask").value.trim()
        });

        for(var i in todo) {
            if(todo[i].key == item[0]['key']) {
                todo[i].Title = document.getElementById("edit-newtitle").value;
                todo[i].Task = document.getElementById("edit-newtask").value.trim();
            }
        }
        
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