// Task Go To Completed to Todo Task
const incompletedTask = (ele) => {
    var index = document.getElementById(ele.id);
    index = index.id;
    
    var item = completedTodo.filter( e => {
        return e.key == index;
    });

    const user = firebase.auth().currentUser;

    var postListRef = firebase.database().ref('myList/'+user.uid+'/'+'Todo');
    var newPostRef = postListRef.push();    
    newPostRef.set({
        Title: item[0]['Title'],
        Task: item[0]['Task']
    });

    firebase.database().ref('myList/'+user.uid+'/'+'CompletedTodo/'+index).remove();

    todo.push({
        key: newPostRef.key,
        Title: item[0]['Title'],
        Task: item[0]['Task']
    });
    completedTodo = completedTodo.filter((ele) => {
        return ele.key != index;
    });
    
    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Back Todo Successfully";

    display(this.todo, this.completedTodo);
}