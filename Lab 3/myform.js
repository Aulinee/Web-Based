function validateForm() {
    var firstName = document.forms["registration"]["fname"].value;
    var lastName = document.forms["registration"]["lname"].value;
    var emailAddrress = document.forms["registration"]["email"].value;
    var phoneNumber = document.forms["registration"]["phone"].value;
    var password = document.forms["registration"]["psw"].value;
    var confirmPassword = document.forms["registration"]["confirmpsw"].value;
    var genderName = document.forms["registration"]["gender"].value;
    var stateName = document.forms["registration"]["state"].value;
    var termsAndCondition = document.forms["registration"]["termsandcondition"].checked;
    var registerPage = document.getElementById("container-1");
    var successPage = document.getElementById("success-message");
    var count;

    const emptyForm = [
        password == 0,
        confirmPassword == 0,
        genderName == 0,
        stateName == "select",
        termsAndCondition == false,
    ]

    for (count = 0; count < 10; count++){
        if (emptyForm[count]) {
            alert("The form cannot be empty");
            return false;
        }
        else{
            count++;
        }
    }

    // Validate first name
    if(firstName == "") {
        alert("Please enter your first name");
        firstName = false;
    } 
    else {
        var regex = /^([A-Z]){1}([a-z]){1,}$/;                
        if(regex.test(firstName) == false) {
            alert("Only first alphabet in first name must be uppercase");
            return false;
        } 
        else if(firstName.length <= 1){
            alert("Please enter a valid first name");
            return false;
        }
        else {
            firstName = true;
        }
    }

    // Validate last name
    if(lastName == "") {
        alert("Please enter your last name");
        lastName = false;
    } 
    else {
        var regex = /^([A-Z]){1}([a-z]){1,}$/;                
        if(regex.test(lastName) == false) {
            alert("Only first alphabet in last name must be uppercase");
            return false;
        } 
        else if(lastName.length <= 1){
            alert("Please enter a valid name");
            return false;
        }
        else {
            lastName = true;
        }
    }

    // Validate email address
    if(emailAddrress == "") {
        alert("Please enter your email address");
        emailAddrress = false;
    } 
    else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(emailAddrress) == false) {
            alert("Please enter a valid format email address");
            return false;
        } else{
            emailAddrress = true;
        }
    }

    // Validate mobile number
    if(phoneNumber == "") {
        alert("Please enter your mobile number");
        phoneNumber = false;
    } 
    else {
        var regex = /^(1)[0-9]\d{8}$/;
        if(regex.test(phoneNumber) == false) {
            alert("Please enter a valid mobile number");
            return  false;
        } 
        else{
            phoneNumber = true;
        }
    }

    // Validate password 
    if(password == ""){
        alert("Please enter your password");
        password = false;
    }
    else{
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]{6,6}$/;
        if(regex.test(password) == false){
            alert("Make sure your password has 6 digits length, at least one lowercase letter, one uppercase letter, one special letter, one number and no whitespace");
            return false;
        }
        else{
            password = true;
        }
    }

    //Validate password and confirm password match
    if(password.value != confirmPassword.value){
        alert("Password does not match");
        return false;
    }

    //Redirect to next page
    registerPage.style.display = 'none';
    successPage.style.visibility = 'visible';
    return false;
}

function backToRegister(){
    location.href = "registration.html";
}

function clearForm(){
    location.reload();
    return false;
}


