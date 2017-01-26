
// Below Function Executes On Form Submit
function ValidationEvent() {
// Storing Field Values In Variables
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;
// Regular Expression For Email
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// Conditions
if (email != '' && contact != '') {
if (email.match(emailReg)) {
if (document.getElementById("male").checked || document.getElementById("female").checked) {
if (contact.length == 10) {
alert("You Have been registered.");
return true;
} else {
alert("The Contact Number must be at least 10 digit long!");
return false;
}
} else {
alert("You must select a gender!");
return false;
}
} else {
alert("Invalid Email Address...!!!");
return false;
}
} else {
alert("All fields are required!");
return false;
}
}