let userInput = document.getElementById("user-input");
userInput.style.textAlign = "right";

function display(num){
    userInput.value += num;
}
function calculate(){
    try{
        userInput.value = eval(userInput.value);
    }
    catch(err){
        alert('invalid');
    }
}

function Clear(){
    userInput.value = "";
}

function Del(){
    userInput.value = userInput.value.slice(0,-1);
}