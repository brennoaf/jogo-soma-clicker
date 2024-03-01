import * as shopServices from './services/shopServices.js';
import { NumberLogic, PageManipulation } from './services/enginesServices.js';
const numberLogic = new NumberLogic();
const pageManipulation = new PageManipulation();

const vars = document.querySelectorAll('.game-ent-var[id]');
const gameEngine = {
    assets: {
        sumButton: document.getElementById('button-sum'),
        sumResult: document.getElementById('textbox-result'),
        moneyQuantityDisplay: document.getElementById('money-quantity'),
        operatorVars: document.getElementById('operators-content')
    },

    config: {
        disponibleNumbers: [0, 1],
        disponibleVars: [vars[0].id, vars[1].id],
        registTempValues: [],
        autoClickDelay : { ms : 3000, disabled: true},

        userMoney: { value: 99999 }
    }
}


const shop = {

    elements: {
        shopPopup: document.getElementById('popup-shop'),
        btnOpenShop: document.getElementById('btn-open-shop'),
        btnCloseShop: document.getElementById('btn-close-shop'),
    },

    buy: {
        buttons: document.querySelectorAll('.buy-button[name]'),

        numbers: {
            buyButton: document.getElementById('buy-button-numbers'),
            priceDisplay: document.getElementById('buy-number-price')
        },

        vars: {
            buyButton: document.getElementById('buy-button-vars'),
            priceDisplay: document.getElementById('buy-var-price')
        },

        autoclick: {
            buyButton: document.getElementById('buy-button-auto'),
            priceDisplay: document.getElementById('buy-auto-price')
        }
    }
}



//gerando numeros e verificando equivalencia com a loja
gameEngine.assets.sumButton.addEventListener('click', () =>{
    numberLogic.randomNumber(
        gameEngine.config.disponibleVars,
        gameEngine.config.disponibleNumbers, 
        gameEngine.config.registTempValues, 
        gameEngine.assets.sumResult, 
        gameEngine.config.userMoney, 
        gameEngine.assets.moneyQuantityDisplay
    );

    shopServices.switchButtons(
        gameEngine.config.userMoney, 
        shop.buy.buttons
    );
})


//settando abrindo e fechando shop
shop.elements.btnOpenShop.addEventListener('click', () => pageManipulation.openShop(shop.elements.shopPopup));
shop.elements.btnCloseShop.addEventListener('click', () => pageManipulation.closeShop(shop.elements.shopPopup));


//comprando numeros
shop.buy.numbers.buyButton.addEventListener('click', () => {
    shopServices.buyNumbers(
        gameEngine.config.disponibleNumbers, 
        gameEngine.config.userMoney, 
        shop.buy.buttons,
        gameEngine.assets.moneyQuantityDisplay,
        shop.buy.numbers.priceDisplay
    );

})

shop.buy.vars.buyButton.addEventListener('click', () => {
    shopServices.buyVars(
        gameEngine.config.userMoney, 
        shop.buy.buttons,
        gameEngine.assets.moneyQuantityDisplay,
        shop.buy.vars.priceDisplay,
        gameEngine.assets.operatorVars,
        gameEngine.config.disponibleVars,
        vars
    );

})

let interval;
shop.buy.autoclick.buyButton.addEventListener('click', () => {
    shopServices.buyAutoClick(
        gameEngine.config.userMoney, 
        shop.buy.buttons,
        gameEngine.assets.moneyQuantityDisplay,
        shop.buy.autoclick.priceDisplay,
        gameEngine.config.autoClickDelay,
        interval
    );
        
    if(!gameEngine.config.autoClickDelay.disabled){
        interval = setInterval(() =>{
            console.log('indo em' + gameEngine.config.autoClickDelay.ms)
            numberLogic.randomNumber(
                gameEngine.config.disponibleVars,
                gameEngine.config.disponibleNumbers, 
                gameEngine.config.registTempValues, 
                gameEngine.assets.sumResult, 
                gameEngine.config.userMoney, 
                gameEngine.assets.moneyQuantityDisplay
            )
            
        }, gameEngine.config.autoClickDelay.ms)

    }

    })

