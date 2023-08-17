document.getElementById('d-b').addEventListener('click', function(){
    const depositValue = document.getElementById('d-f');
    const depositMoney = depositValue.value;
    const money = parseFloat(depositMoney);

    const dipositBox = document.getElementById('deposit-box');
    const preveousValue = dipositBox.innerText ;
    const convertpreveousValue = parseFloat(preveousValue)
    // for diposit box 
    const finalDiposit = convertpreveousValue + money;
    // get total balance 
    const totalBalace = document.getElementById('total-balance-box');
    const totalBalaceValue = totalBalace.innerText;
    const convertTotalBalancevalue = parseFloat(totalBalaceValue);
    if(depositMoney < 1 || depositMoney === 'string'){
        alert('Sorry !! Invalid Input')
    }
    else{
        dipositBox.innerText = finalDiposit.toFixed(2);
        totalBalace.innerText = convertTotalBalancevalue + money;
        depositValue.value = '';
    }
})