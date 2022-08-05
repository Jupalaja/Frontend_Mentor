

let bill = document.querySelector('.inputs-section_bill-input');
let billNumber = parseFloat(bill.value);

let people = document.querySelector('.inputs-section_people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.btns__button');

let alert = document.querySelector('.alert');

let resetButton = document.querySelector('.result-section__reset')
let tipValue = 5;

//Activacion de los botones
buttons.forEach(element => {
    element.addEventListener('click',event=>{

        // Cambiar estilo al presionar el boton
        removeActive()
        element.classList.add('btns__button--selected');

        // Calcular el tip e imprimirlo 
        tipValue = parseInt(event.target.innerText.slice(0,-1));        
            calculateTip();   
    })
})

// Actualizar el bill
bill.addEventListener('input',() => {
    billNumber = parseFloat(bill.value);
        calculateTip();    
})

// Actualizar el numero de personas
people.addEventListener('input',() => {
    peopleNumber = parseInt(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)){
        people.style.borderColor = 'rgb(164, 68, 68)';
        alert.classList.add('error');
    } else {
        people.style.borderColor = '';
        alert.classList.remove('error');
        calculateTip();
    }    
}) 
function removeActive(){
    buttons.forEach(element => {
        element.classList.remove('btns__button--selected');
    })
}

function calculateTip(){
    if (!isNaN(billNumber) && !isNaN(peopleNumber) && !isNaN(tipValue)){
        // Calculo del tip Aomunt
        tipResult.innerText = ((billNumber * tipValue/100)/peopleNumber).toFixed(2);

        // Calculo del total
        totalResult.innerText = ((billNumber * (1 + tipValue/100))/peopleNumber).toFixed(2);  
    }
    
}

// Actualizacion de Custom
let custom = document.querySelector('.btns__custom');

custom.addEventListener('click', () =>{
    removeActive()
})
custom.addEventListener('input', () => {
    tipValue = parseFloat(custom.value);       
    if (!isNaN(tipValue)){
        calculateTip();
    } 
        
})

// Activacion del boton RESET   
resetButton.addEventListener('click', () => {
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'Custom';
    calculateTip();
})