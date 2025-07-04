var d=prompt("enter you name","name");
document.writeln("<h1> hello " +d+ " welcome </h1>") 
function addscreen(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}


function del() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}

