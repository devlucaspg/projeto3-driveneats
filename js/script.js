
function selectFood(sFood) {

    const food = document.querySelector('.c1-content .selected');

    if ( food !== null ){
        food.classList.remove('selected');
    }

        sFood.classList.add('selected');
};

function selectDrink(sDrink) {

    const drink = document.querySelector('.c2-content .selected');

    if ( drink !== null ){
        drink.classList.remove('selected');
    }

        sDrink.classList.add('selected');
};

function selectDessert(sDessert) {

    const dessert = document.querySelector('.c3-content .selected');

    if ( dessert !== null ){
        dessert.classList.remove('selected');
    }

        sDessert.classList.add('selected');
};
