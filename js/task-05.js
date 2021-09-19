const line = {
    input: document.querySelector("#name-input"),
    name: document.querySelector("#name-output")
};

line.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if(line.input.value === ' '){
        line.name = 'незнакомец';
     } else {
        line.name.textContent = event.currentTarget.value;  
        console.log(event.currentTarget.value)
    }
};