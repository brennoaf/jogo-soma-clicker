class NumberLogic{

    randomNumber(disponibleVars, disponibleNumbers, registTempValues, sumResult, userMoney, moneyQuantity){
        for(let i = 1; i <= disponibleVars.length; i++){
            
            //pegar caixa de texto da var 'trabalhadora'
            let varActual = document.getElementById(`var${i}-text`);

            //gerar numeros com base dos numeros desbloqueados e registrador no vetor disponibleNumbers
            let numGerado = Math.floor(Math.random() * disponibleNumbers.length);

            registTempValues.push(numGerado)
            varActual.value = numGerado;


        }
        const sumResultItems = registTempValues.reduce((a, b) => a + b, 0);
        sumResult.value = sumResultItems;

        //mudar e controlar valores
        userMoney.value += sumResultItems;
        moneyQuantity.innerHTML = userMoney.value;

        registTempValues.length = 0;
        return userMoney.value;
    }

}

class PageManipulation{
    closeShop(shopPopup){
        shopPopup.classList.remove('active');
    }
    
    openShop(shopPopup){
        shopPopup.classList.add('active')
    }
    
}

export { NumberLogic, PageManipulation }
