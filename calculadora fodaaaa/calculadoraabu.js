function calc(opera){
    let xx = parseFloat(document.getElementById('abuabu').value);
    let yy = parseFloat(document.getElementById('abugang').value);
    let res = 0;

    if (isNaN(xx) || isNaN(yy)){
        alert('sinal invalido');
    }else{
    if(opera == 'soma'){
            resultado = xx + yy;
    }else if(opera == 'menos'){
            resultao = xx - yy;
    }else if(opera == 'vezes'){
            resultao = xx * yy;

    }

    }
}