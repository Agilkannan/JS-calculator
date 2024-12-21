function displayValue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function displayClear() {
    document.getElementById("display").value = ""
}

function Calculate() {
    var UserInput = document.getElementById("display").value;
    var Result = eval(UserInput);
    document.getElementById("display").value = Result;

}