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
    console.log(`in getCalculations()`);
    $.ajax({
        method: `GET`,
        url: `/calculations`
    }).then(function(response){
        console.log(`back from GET:`, response);
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
    console.log(`in setOperationToAdd()`);
    operator = `+`;
}

function setOperationToSubtract(){
    console.log(`in setOperationToSubtract()`);
    operator = `-`;
}

function setOperationToMultiply(){
    console.log(`in setOperationToMultiply()`);
    operator = `*`
}

function setOperationToDivide(){
    console.log(`in setOperationToDivide()`);
    operator = `/`
}

function sendInput(){
    console.log(`in sendInput()`);
    let rawDataObject = {
        firstOperand: $(`#firstOperandIn`).val(),
        operation: operator,
        secondOperand: $(`#secondOperandIn`).val()
    }
    console.log(`rawDataObject:`, rawDataObject);
    $.ajax({
        method: `POST`,
        url: `/calculations`,
        data: rawDataObject
    }).then(function(response){
        console.log(`back from POST`, rawDataObject);
    }).catch(function(err){
        alert(`error in sendInput`);
    })
    getCalculations();
}

