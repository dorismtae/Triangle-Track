//USER INTERFACE
var a= prompt("Enter a number :");
var b= prompt("Enter a number :");
var c= prompt("Enter a number :");
//BUSINESS LOGIC
var triangleType= ["Equilateral" , "Isosceles", "Scalene"];
if (a===b && b===c && c===a){
  alert (triangleType[0]);
}
else if (a===b || b===c || c===a){
  alert (triangleType[1]);
}
else if (a+b>c||b+c>a||a+c>b){
  alert (triangleType[2]);
}
