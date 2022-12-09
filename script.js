// prendo il documento dalla dom
const targetElement = document.getElementById('target');

// Variabili


for (let i = 0; i <= 100; i++){

    let number = '';
    
    if(i%3 === 0){
    number = 'fizz';
    console.log(number);

    }
    if(i%5 === 0){
        number = 'buzz';
        console.log(number);
    }
    if(i%3 == 0 && i%5 == 0){
        number = 'fizzbuzz';
        console.log(number);

    }
}




// prendo il documento 
// faccio la lista di numeri da 1 a 100
// verifico se un numero è divisibile per 3
// verifico se un numero è divisibile per 5
// verifico se un numero è divisibile per entrambi 