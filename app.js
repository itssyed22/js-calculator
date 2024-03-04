var firstValue = prompt("Enter first number")
var operator = prompt("Please enter any operator + , - , * , / , %")
var secondValue = prompt("Enter second number")
var add = parseInt(firstValue) + parseInt(secondValue)
var sub = parseInt(firstValue) - parseInt(secondValue)
var mul = parseInt(firstValue) * parseInt(secondValue)
var div = parseInt(firstValue) / parseInt(secondValue)
var mod = parseInt(firstValue) % parseInt(secondValue)
if(operator == "+"){
    alert(add)
}
else if(operator == "-"){
    alert(sub)
}
else if(operator == "*"){
    alert(mul)
}
else if(operator == "/"){
    alert(div)
}
else if(operator == "%"){
    alert(mod)
}
else("Invalid input")