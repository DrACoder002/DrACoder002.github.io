console.log("This output is from the external JS file");
console.log("Name: Dr. A");
console.log("School: CPCC");
console.log("Grade: Graduate");

var name = "Dr. A";
let school = "CPCC";
var grade = "Graduate";

document.getElementById("name").innerHTML = "Name: <b>" + name + "</b>";
document.getElementById("grade").innerHTML = "Grade: <b>" + grade + "</b>";
document.getElementById("school").innerHTML = "School: <b>" + school + "</b>";
