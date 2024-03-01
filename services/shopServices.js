export function switchButtons(userMoney, buyButtons){

    //pegar quantidade de botoes do shop
    for(let i=0; i < buyButtons.length; i++){

        let selectedButton = buyButtons[i]

        function checkSaldo(){
            if(userMoney.value < parseInt(selectedButton.name)){
                selectedButton.disabled=true;

            }else{
                selectedButton.disabled=false;

            }
        }
        checkSaldo();
    }
    
}


export function buyNumbers(unlockedNumbers, userMoney, buyButtons, moneyQuantity, priceDisplay){
    let itemValue = buyButtons[0].name;

    if(userMoney.value < itemValue){
        console.log("Game error! You can't buy that.");

    }else{
        userMoney.value -= itemValue;

        /////////////////////////////////////////////////
        //Basicamente o que acontece ao comprar
        unlockedNumbers.push(unlockedNumbers.length - 1);
        /////////////////////////////////////////////////

        //Registrando mudanças
        moneyQuantity.innerHTML = userMoney.value;

            //settando preço pós-upgrade
        itemValue = parseInt(itemValue * 3) + parseInt(itemValue);
        buyButtons[0].name = itemValue;

        priceDisplay.innerHTML = itemValue;
        this.switchButtons(userMoney, buyButtons);

        return buyButtons[0].name;
        
    }

}

export function buyVars(userMoney, buyButtons, moneyQuantity, priceDisplay, operatorVars, disponibleVars){
    let itemValue = buyButtons[1].name;

    if(userMoney.value < itemValue){
        console.log("Game error! You can't buy that.");

    }else{
        userMoney.value -= itemValue;
        
        ///////////////////////////////////////////////////////////////////////
        //Basicamente o que acontece ao comprar

        const newVar = document.createElement('section');
        newVar.className = 'game-ent-var'
        newVar.id = `var${disponibleVars.length + 1}`

        //verificar posicao dentro da grid
        if((disponibleVars.length + 1) % 3 == 0){
            newVar.textContent = 'z='

        }else
        if((disponibleVars.length + 1) % 2 == 0){
            newVar.textContent = 'x='

        }else{
            newVar.textContent = 'y='
        }

        const newVarTextArea = document.createElement('textarea')
        newVarTextArea.readOnly = true;
        newVarTextArea.className = 'operator-textbox'
        newVarTextArea.id = `var${disponibleVars.length + 1}-text`

        //adicionando nova variavel à variavel 'disponibleVars'
            //de variaveis disponíveis
        disponibleVars.push(newVar.id)

        //adicionando text area à section criada, que seria a
            //nova variavel trabalhadora
        newVar.appendChild(newVarTextArea);

        //adicionando section criada ao pai
        operatorVars.appendChild(newVar);
        
        //fim do acontecimento
        /////////////////////////////////////////////////////////////////////////

        //Registrando mudanças
        moneyQuantity.innerHTML = userMoney.value;

            //settando preço pós-upgrade
            console.log(itemValue)
        itemValue = parseInt(itemValue * 0.3 + parseInt(itemValue));
        buyButtons[1].name = itemValue;

        priceDisplay.innerHTML = itemValue;
        this.switchButtons(userMoney, buyButtons);
        
        return buyButtons[1].name;
        
    }

}

export function buyAutoClick(userMoney, buyButtons, moneyQuantity, priceDisplay, autoClickDelay, interval){
    clearInterval(interval)
    let itemValue = buyButtons[2].name;

    if(userMoney.value < itemValue){
        console.log("Game error! You can't buy that.");

    }else{
        userMoney.value -= itemValue;

        //Registrando mudanças
        moneyQuantity.innerHTML = userMoney.value;

            //settando preço pós-upgrade
        itemValue = parseInt(itemValue * 1.2);
        buyButtons[2].name = itemValue;

        priceDisplay.innerHTML = itemValue;
        this.switchButtons(userMoney, buyButtons);
        

        /////////////////////////////////////////////////
        //Basicamente o que acontece ao comprar 
        autoClickDelay.disabled = false;
        autoClickDelay.ms -= 70;
        /////////////////////////////////////////////////

        return buyButtons[2].name, autoClickDelay.disabled, autoClickDelay.ms, interval;
        
    }

}