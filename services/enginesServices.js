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


    multiplayResult(userMoney, sumResult, multiplyValue){
        sumResult = sumResult * multiplyValue;
        userMoney += sumResult;

        sumResult = null
        return userMoney;
    }
}

class PageManipulation{
    closeShop(shopPopup){
        shopPopup.classList.remove('active');
    }
    
    openShop(shopPopup){
        shopPopup.classList.add('active')
    }
    

    operatorsRepos(circulo){
        const items = document.querySelectorAll('.game-ent-var');

        const radius = circulo.offsetWidth / 2; // Raio da div circular (ajuste conforme necessário)

        items.forEach((item, index) => {
        const angle = (360 / items.length) * index;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        item.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    reposRadiusController(circulo, isDragging, initialX, initialY){

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            this.operatorsRepos(circulo);
            const deltaX = e.clientX - initialX;
            const deltaY = e.clientY - initialY;

            console.log(deltaX)
            const newRadius = Math.max(400, circulo.clientWidth + deltaX);
            
            if(newRadius < 800){
                circulo.style.width = `${newRadius}px`;
                circulo.style.height = `${newRadius}px`;

                initialX = e.clientX;
                initialY = e.clientY;
        }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

    }
}

export { NumberLogic, PageManipulation }
