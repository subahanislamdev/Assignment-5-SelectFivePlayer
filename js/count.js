document.getElementById('calculate').addEventListener('click',function(){
    var inputField = document.getElementById('inputfield')
    var inputvalue = parseFloat(inputField.value)
    var outputvalue = document.getElementById('expensive')
       outputvalue.innerText= inputvalue*5;
        inputField.value = ' ' ;

    // coach and manager expensive count
    document.getElementById('final-calculate').addEventListener('click',function(){
        var inputField = document.getElementById('manager')
        var inputvalue = parseFloat(inputField.value)
            inputField.value = ' ' ;
    
        var inputField = document.getElementById('coach')
        var inputvalues = parseFloat(inputField.value)
            inputField.value = ' ' ;
        var totalamount = inputvalue + inputvalues + parseFloat(outputvalue.innerText);
        var finalamount = document.getElementById('total')
            finalamount.innerText =totalamount;
    })
})
