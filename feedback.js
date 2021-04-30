// Show Submit and Cancel Button Feedback
var r = '0'; //For Rating
const showButton = (ele) => {

    r = ele.value;

    $("#submit-feedback").show();
    $("#cancel-feedback").show();
    
    setTimeout(() => {
        $("#submit-feedback").hide();
        $("#cancel-feedback").hide();
    }, 5000);
}

// Submit Feedback and Show Toast Message
const submitFeedback = () => {
    
    const user = firebase.auth().currentUser;
    fireDB.database().ref('myList/'+user.uid).update({
        Feedback: (r+'/5-Star')
    });

    $("#feedback").hide();

    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Thank You For Feedback Us";
}

// Cancel Feedback and Show Toast Message
const cancelFeedback = () => {
    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Feedback Cancel";

    $("#submit-feedback").hide();
    $("#cancel-feedback").hide();
}