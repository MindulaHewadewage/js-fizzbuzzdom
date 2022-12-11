

for (let i = 1; i <= 100; i++){

    let number = '';
    
    if(i%3 == 0 && i%5 == 0){
    number = 'fizzbuzz';
    console.log(number);

    }
    else if(i%3 == 0){
    number = 'fizz';
    console.log(number);

    }
    else if(i%5 == 0){
    number = 'buzz';
    console.log(number);
    }

    else{
        console.log(i);
    }
}