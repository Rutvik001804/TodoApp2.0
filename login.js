const signup = () => {
    console.log("SIGN UP");
    const email = document.getElementById("eml").value;
    const password = document.getElementById("pass").value;

    $("#validation_error_login_email").html("");
    $("#validation_error_login_password").html("");
    $("#validation_error_auth").html("");

    if(email.trim().length == 0) {
        $("#validation_error_login_email").html("Please Enter Email");
    }

    if(password .trim().length == 0) {
        $("#validation_error_login_password").html("Please Enter Password");
    }

    if(email.trim().length != 0 && password .trim().length != 0) {
        var uid = Date.now() + (Math.random()*100000).toFixed();

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);

        promise
            .then( () => {
                fireDB.database().ref('users/'+uid).set({
                    email: email
                });
                // console.log("Sign Up Done : " + email);
                $("#btnLogout").show();
                $("#myLogin").hide();
                $("#container").show();

                const user = firebase.auth().currentUser;
                // console.log("Sign up User UID : "+user.uid);
                sessionStorage.setItem("loginUser", user.uid);

                fireDB.database().ref('myList/'+user.uid).set({
                    Email: email,
                    Todo: {},
                    CompletedTodo: {},
                    Feedback: 'Not Given'
                });

                myDisplay();
            });
        promise
            .catch( e => {
                $("#validation_error_auth").html(e.message);
            });
    }
}

const signin = () => {
    console.log("SIGN IN");
    const email = document.getElementById("eml").value;
    const password = document.getElementById("pass").value;

    $("#validation_error_login_email").html("");
    $("#validation_error_login_password").html("");
    $("#validation_error_auth").html("");

    if(email.trim().length == 0) {
        $("#validation_error_login_email").html("Please Enter Email");
    }

    if(password .trim().length == 0) {
        $("#validation_error_login_password").html("Please Enter Password");
    }

    if(email.trim().length != 0 && password .trim().length != 0) {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise
            .then( () => {
                const user = firebase.auth().currentUser;
                // console.log("Sign In Done : " + email);
                sessionStorage.setItem("loginUser", user.uid);
                // console.log("Sign in User UID : "+user.uid);

                $("#btnLogout").show();
                $("#myLogin").hide();
                $("#container").show();

                firebase.database().ref('myList/'+user.uid).once('value', (snapshot) => {
                    if(snapshot.val().Feedback == 'Not Given')
                        $("#feedback").show();
                    else
                        $("#feedback").hide();
                });

                myDisplay();
            });
        promise
            .catch( e => {
                $("#validation_error_auth").html(e.message);
            });
    }
}

const logout = () => {
    fireDB.auth().signOut();
    sessionStorage.removeItem("loginUser");
    console.log("Logout");

    $("#btnLogout").hide();
    $("#myLogin").show();
    $("#container").hide();
}