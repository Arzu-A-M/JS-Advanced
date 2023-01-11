function rectangle(number){
    if(number == 0){
    console.log('* * * * *');
    return;
    }
   
    let staticNum = number;
    while(number !== 0){
        let output = '';
        for(let i = 0; i < staticNum; i++){
            output += '* ';
        }
        console.log(output);
        number--;
    }
}
rectangle(5);