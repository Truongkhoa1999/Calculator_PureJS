// return function
function getOldValue() {
    return document.getElementById('old-result').innerText
}
function getOutput() {
    return document.getElementById('output').innerText
}
// print function
function printOldValue(num) {
    document.getElementById('old-result').innerText = num
}
function printOutput(num) {

    if (num == "") {
        document.getElementById('output').innerText = num
    } else {
        document.getElementById('output').innerText = stringFormat(num)
    }
}
// US UK integer format
function stringFormat(num) {
    var n = Number(num)
    var value = n.toLocaleString('en')
    return value
}
// return Number value type method
function returnNumber(num) {
    return Number(num.replace(/,/g, ''))
}
// DOM event listener for integer
var integer = document.getElementsByClassName('integer')
for (var i = 0; i < integer.length; i++) {
    integer[i].addEventListener('click', function () {
        var value = returnNumber(getOutput())
        if (value != NaN) {
            value += this.id
            printOutput(value)
        }
    }
    )
}
// DOM event listener for system
var system = document.getElementsByClassName('system')
for (var i = 0; i < system.length; i++) {
    system[i].addEventListener('click', function () {
        if (this.id == 'CE') {
            printOutput('')
            printOldValue('')
        } else if (this.id == "C") {
            let value = returnNumber(getOutput()).toString()
            if (value) {
                value = value.substr(0, value.length -1)
                printOutput(value)
            }
        } else{
             var output = getOutput()
             var oldValue = getOldValue()
             if(output != ""){
                output = returnNumber(output)
                oldValue += output
                if(this.id == '='){
                    var finalOutput = eval (oldValue)
                    printOutput(finalOutput)
                    printOldValue('')
                } else {
                    oldValue += this.id
                    printOutput('')
                    printOldValue(oldValue)
                }
             }
        }
    }
    )
}
