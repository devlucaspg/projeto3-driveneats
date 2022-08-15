let selectedFood;

function selectFood(sFood) {

    const food = document.querySelector('.c1-content .selected');

    if ( food !== null ){
        food.classList.remove('selected');
    }

    sFood.classList.add('selected');

    selectedFood = sFood

    request();
    
};

let selectedDrink;

function selectDrink(sDrink) {

    const drink = document.querySelector('.c2-content .selected');

    if ( drink !== null ){
        drink.classList.remove('selected');
    }

    sDrink.classList.add('selected');

    selectedDrink = sDrink
    
    request();

};

let selectedDessert;

function selectDessert(sDessert) {

    const dessert = document.querySelector('.c3-content .selected');

    if ( dessert !== null ){
        dessert.classList.remove('selected');
    }

    sDessert.classList.add('selected');

    selectedDessert = sDessert
    
    request();
    
};


function request(){
    // se a comida estiver selecionada
    if ( selectedFood !== undefined ){
        // se a bebida estiver selecionada
        if (selectedDrink !== undefined){
            // se a sobremesa estiver selecionada
            if (selectedDessert !== undefined){

                // pegar botão e adicionar a classe escondido 
                const button1 = document.querySelector('.button1');
                button1.classList.add('hidden');

                // pegar botão e remover a classe escondido 
                const button2 = document.querySelector('.button2');
                button2.classList.remove('hidden');
                
            }    
        }
    }
}