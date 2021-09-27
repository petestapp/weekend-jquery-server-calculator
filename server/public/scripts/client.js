$(document).ready(onReady);

let operator

function onReady(){
    getCalculations();
    $(`#addButton`).on(`click`, setOperationToAdd);
    $(`#subtractButton`).on(`click`, setOperationToSubtract);
    $(`#multiplyButton`).on(`click`, setOperationToMultiply);
    $(`#divideButton`).on(`click`, setOperationToDivide);
    $(`#equalsButton`).on(`click`, sendInput);
    $(`#clearButton`).on(`click`, clearCalculator);
}

function clearCalculator(){
    $(`#firstOperandIn`).val(``);
    $(`#secondOperandIn`).val(``);
}

function getCalculations(){
    $.ajax({
        method: `GET`,
        url: `/calculations`
    }).then(function(response){
        let el = $(`#resultsOut`);
        el.empty();
        for(let i=0; i<response.length; i++){
            el.append(`<li>${response[i].firstOperand} ${response[i].operation} ${response[i].secondOperand} = ${response[i].result}</li>`);
        }
    }).catch(function(err){
        alert(`error`);
        console.log(err);
    })
}

function setOperationToAdd(){
    operator = `+`;
}

function setOperationToSubtract(){
    operator = `-`;
}

function setOperationToMultiply(){
    operator = `*`
}

function setOperationToDivide(){
    operator = `/`
}

function sendInput(){
    let rawDataObject = {
        firstOperand: $(`#firstOperandIn`).val(),
        operation: operator,
        secondOperand: $(`#secondOperandIn`).val()
    }
    $.ajax({
        method: `POST`,
        url: `/calculations`,
        data: rawDataObject
    }).then(function(response){
    }).catch(function(err){
        alert(`error in sendInput`);
    })
    getCalculations();
}