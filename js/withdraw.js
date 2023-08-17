document.getElementById('w-b').addEventListener('click', function(){
    
    const withdrawField = document.getElementById('w-f');
    const InputValueOfWithdrawField = withdrawField.value;
    const withdrawMoney = parseFloat(InputValueOfWithdrawField);
    

    const withdrawBox = document.getElementById('withdraw-box');
    const preveousValueOfWithdrawBox = withdrawBox.innerText
    const preveousWithdraw = parseFloat(preveousValueOfWithdrawBox);
    
     const preveousAmount = document.getElementById('total-balance-box')
     const valueOfPreveous = preveousAmount.innerText;
     const convertTotalBalance = parseFloat(valueOfPreveous)
     const finalBalanceAfterWithdraw = convertTotalBalance - withdrawMoney;
     const finalwithdraw = preveousWithdraw + withdrawMoney;


     if(withdrawMoney > convertTotalBalance || withdrawMoney < 1){
         alert('আপনার বাবা আপনাকে এত টাকা দেয় নাই ')
     }else{
         
        withdrawBox.innerText = finalwithdraw;
        preveousAmount.innerText = finalBalanceAfterWithdraw;
        withdrawField.value = '';
    }

})