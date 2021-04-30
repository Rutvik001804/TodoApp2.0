// Task Go To Todo to Completed Task
const completedTask = (ele) => {
    var index = document.getElementById(ele.id);
    index = index.id;

    var item = todo.filter( e => {
        return e.key == index;
    });

    const user = firebase.auth().currentUser;

    var postListRef = firebase.database().ref('myList/'+user.uid+'/'+'CompletedTodo');
    var newPostRef = postListRef.push();    
    newPostRef.set({
        Title: item[0]['Title'],
        Task: item[0]['Task']
    });

    firebase.database().ref('myList/'+user.uid+'/'+'Todo/'+index).remove();

    completedTodo.push({
        key: newPostRef.key,
        Title: item[0]['Title'],
        Task: item[0]['Task']
    });
    todo = todo.filter((ele) => {
        return ele.key != index;
    });    

    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Completed Successfully";

    display(this.todo, this.completedTodo);
}