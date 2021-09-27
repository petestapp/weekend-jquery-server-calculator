$(document).ready(onReady);

function onReady(){
    getCalculations();
}

function getCalculations(){
    console.log(`in getCalculations()`);
    $.ajax({
        method: `GET`,
        url: `/calculations`
    }).then(function(response){
        console.log(`back from GET`)
    })
}