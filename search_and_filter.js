// For Search and Filter
const searchFilter = () => {
    var list = document.getElementById('remaining-tasks');
    var divele_todo = list.getElementsByClassName("info-todo");
    var li_todo = list.getElementsByClassName("list-todo");
    var emt_todo = document.getElementById("search-todo-msg");

    var filter = document.getElementById('filter-task').value;

    var listCompleted = document.getElementById('completed-tasks');
    var divele_completed = listCompleted.getElementsByClassName("info-completed");
    var li_completed = listCompleted.getElementsByClassName("list-completed");
    var emt_completed = document.getElementById("search-completed-msg");

    var value = document.getElementById("myInput1").value.toLowerCase().trim();

    let counter_todo = li_todo.length;
    let counter_completed  = li_completed.length;

    if(li_todo.length == 0) {
        emt_todo.style.display = "block";
        document.getElementById('no-todo-task').style.display = "none";
    }
    else {
        for(let i=0; i<li_todo.length; i++) {
            let txt = li_todo[i].textContent || li_todo[i].innerText;
            if (txt.toLowerCase().indexOf(value) > -1 && (filter == 'All Task' || todo[i]['title'] == filter)) {
                divele_todo[i].style.display = "";
            } else {
                divele_todo[i].style.display = "none";
                counter_todo--;
            }
        }
    }

    if(li_completed.length == 0) {
        emt_completed.style.display = "block";
        document.getElementById('no-completed-task').style.display = "none";
    }
    else {
        for(let i=0; i<li_completed.length; i++) {
            let txt = li_completed[i].textContent || li_completed[i].innerText;
            if (txt.toLowerCase().indexOf(value) > -1 && (filter == 'All Task' || completedTodo[i]['title'] == filter)) {
                divele_completed[i].style.display = "";
            } else {
                divele_completed[i].style.display = "none";
                counter_completed--;
            }
        }
    }
   
    if(counter_todo == 0) 
        emt_todo.style.display = "block";
    else 
        emt_todo.style.display = "none";

    if(counter_completed == 0) 
        emt_completed.style.display = "block";
    else 
        emt_completed.style.display = "none";
}