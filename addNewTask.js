// Open Modal For Add New Task
const addNewTask = () => {
    $("#new_task").focus();

    var modal = document.getElementById("myModal1");

    var span = document.getElementsByClassName("close1")[0];

    $("#validation_error_title1").html("");
    $("#validation_error_task1").html("");

    $("#new_title").val("");
    $("#new_task").val("");
    
    $("#myModal1").show();

    span.onclick = () => {
        $("#myModal1").hide();
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            $("#myModal1").hide();
        }
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            $("#myModal1").hide();
        }
    });
}

// For Add New Task in Todo
const addTask = () => {
    $("#myModal1").show();

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

        if(sessionStorage.getItem("loginUser") === null) {
            console.log("Session Not Created");
        }
        else {
            var sessionID = sessionStorage.getItem("loginUser");
            console.log("SessionID : " + sessionID);

            var ttl = $("#new_title").val();
            var tsk = $("#new_task").val().trim();

            const user = firebase.auth().currentUser;

            var postListRef = firebase.database().ref('myList/'+user.uid+'/'+'Todo');
            var newPostRef = postListRef.push();    
            newPostRef.set({
                Title: ttl,
                Task: tsk
            });

            let myTask = {
                key: newPostRef.key,
                Title: ttl,
                Task: tsk
            }
            todo.push(myTask);
        }
        
        var a = document.getElementById('toast');
        
        a.className = 'show';
        setTimeout(() => { 
            a.className = a.className.replace('show','');
        }, 3000);
        a.innerHTML = "Task Added Successfully";

        display(this.todo, this.completedTodo);

        $("#new_title").val("");
        $("#new_task").val("");

        $("#myModal1").hide();

    }
    $("#new_task").focus();
}