// Show Submit and Cancel Button Feedback
const showButton = () => {

    $("#submit-feedback").show();
    $("#cancel-feedback").show();
    
    setTimeout(() => {
        $("#submit-feedback").hide();
        $("#cancel-feedback").hide();
    }, 5000);
}

// Submit Feedback and Show Toast Message
const submitFeedback = () => {
    
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