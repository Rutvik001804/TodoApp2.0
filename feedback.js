// Show Submit and Cancel Button Feedback
const showButton = () => {
    var submit = document.getElementById('submit-feedback');
    var cancel = document.getElementById('cancel-feedback');

    submit.style.display = "block";
    cancel.style.display = "block";
    
    setTimeout(() => {
        submit.style.display = "none";
        cancel.style.display = "none";
    }, 5000);
}

// Submit Feedback and Show Toast Message
const submitFeedback = () => {
    var feedback = document.getElementById('feedback');
    feedback.style.display = "none";

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

    var submit = document.getElementById('submit-feedback');
    var cancel = document.getElementById('cancel-feedback');

    submit.style.display = "none";
    cancel.style.display = "none";
}