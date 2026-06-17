function currentInput(el){
    const input = document.getElementById("number-input")
    if(input.value === "0")
    {
        input.value = el.innerText
    }
    else{
        input.value = input.value + el.innerText
    }
    // const exp = input.value + el.innerText
    // input.value = exp

}
function result(){
    const input = document.getElementById("number-input")
    input.value = eval(input.value)
    
}

function clearInput(){
    const input = document.getElementById("number-input")
    input.value = '0';
}