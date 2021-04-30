// Delete Task From Completed Task
const removeTask = (dlt) => {
    var index = document.getElementById(dlt.id);
    index = index.id;

    const user = firebase.auth().currentUser;
    firebase.database().ref('myList/'+user.uid+'/'+'CompletedTodo/'+index).remove();

    completedTodo = completedTodo.filter((ele) => {
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