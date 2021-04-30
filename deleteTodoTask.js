// Delete Task From Todo
const deleteTask = (dlt) => {
    var index = document.getElementById(dlt.id);
    index = index.id;
    
    const user = firebase.auth().currentUser;
    firebase.database().ref('myList/'+user.uid+'/'+'Todo/'+index).remove();

    todo = todo.filter((ele) => {
        return ele.key != index;
    });

    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => {
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Deleted Successfully";

    display(this.todo, this.completedTodo);
}