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

    // Validate first name
    if(firstName == "") {
        alert("Please enter your first name");
        return false;
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
    }

    // Validate last name
    if(lastName == "") {
        alert("Please enter your last name");
        return false;
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
    }

    // Validate email address
    if(emailAddrress == "") {
        alert("Please enter your email address");
        return false;
    } 
    else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(emailAddrress) == false) {
            alert("Please enter a valid format email address");
            return false;
        } 
    }

    // Validate mobile number
    if(phoneNumber == "") {
        alert("Please enter your mobile number");
        return false;
    } 
    else {
        var regex = /^(1)[0-9]\d{7,8}$/;
        if(regex.test(phoneNumber) == false) {
            alert("Please enter a valid mobile number");
            return  false;
        } 
    }

    // Validate password 
    if(password == ""){
        alert("Your password field input is empty");
        return false;
    }
    else{
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]{6,6}$/;
        if(regex.test(password) == false){
            alert("Make sure your password has 6 DIGITS LENGTH, at least ONE LOWERCASE LETTER, ONE UPPERCASE LETTER, ONE SPECIAL LETTER, ONE NUMBER and NO SPACE");
            return false;
        }
    }

    //Validate confirm password
    if(confirmPassword == ""){
        alert("Your confirm password field input is empty");
        return false;
    }

    //Validate password and confirm password match
    if(password != confirmPassword){
        alert("Password does not match! Please try again!");
        return false;
    }

    //Validate select button, checkbox and radio button
    const emptyForm = [
        genderName == 0,
        stateName == "select",
        termsAndCondition == false,
    ]

    for (count = 0; count < 3; count++){
        if (emptyForm[count]) {
            alert("The form cannot be empty");
            return false;
        }
        else{
            count++;
        }
    }

    //Redirect to next page after validation
    registerPage.style.display = 'none';
    successPage.style.visibility = 'visible';
    return false;
}

//Back to original page after register
function backToRegister(){
    location.href = "registration.html";
}

//To clear all input
function clearForm(){
    location.reload();
    return false;
}


