let foodSelected;
let foodName;
let foodPrice

function foodSelect(foodS) {

    const food = document.querySelector('.c1-content .selected');

    if ( food !== null ){
        food.classList.remove('selected');
    }

    foodS.classList.add('selected');

    foodSelected = foodS
    foodName = foodS.querySelector('.description>h1').innerText;

    price = foodS.querySelector('.price>h2').innerText;     
    price = price.replace(',','.');                         
    price = Number(price);                                  
    foodPrice = price                                      

    request();
    
};

let drinkSelected;
let drinkName;
let drinkPrice;

function drinkSelect(drinkS) {

    const drink = document.querySelector('.c2-content .selected');

    if ( drink !== null ){
        drink.classList.remove('selected');
    }

    drinkS.classList.add('selected');

    drinkSelected = drinkS
    drinkName = drinkS.querySelector('.description>h1').innerText;
    
    price = drinkS.querySelector('.price>h2').innerText;    
    price = price.replace(',','.');                        
    price = Number(price);                                 
    drinkPrice = price                                      
    
    request();

};

let dessertSelected;
let dessertName;
let dessertPrice;

function dessertSelect(dessertS) {

    const dessert = document.querySelector('.c3-content .selected');

    if ( dessert !== null ){
        dessert.classList.remove('selected');
    }

    dessertS.classList.add('selected');

    dessertSelected = dessertS
    dessertName = dessertS.querySelector('.description>h1').innerText;

    price = dessertS.querySelector('.price>h2').innerText;  
    price = price.replace(',','.');                        
    price = Number(price);                                  
    dessertPrice = price                                    
    
    request ();
    
};

let totalPrice;

function request(){
    if ( foodSelected !== undefined ){
        if (drinkSelected !== undefined){
            if (dessertSelected !== undefined){

                const button1 = document.querySelector('.button1');
                button1.classList.add('hidden');

                const button2 = document.querySelector('.button2');
                button2.classList.remove('hidden');
                
                totalPrice = foodPrice + drinkPrice + dessertPrice;     
            }    
        }
    }
}

let pname;
let address;

function confirmScreen(confirmS) {
	if (confirmS.classList.contains('order-closed')) {
		document.querySelector('.confirm-screen').classList.remove('hidden')
	}

	pname = prompt('Informe o seu nome:')
	address = prompt('Informe o seu endereço:')

    whatsapp();

}


function whatsapp() {
	let text =
		'Olá, gostaria de fazer o pedido:' + '\n- Prato: ' + foodName +
		'\n- Bebida: ' + drinkName +
		'\n- Sobremesa: ' + dessertName +
		'\nTotal: R$ ' + totalPrice.toFixed(2) +
        '\n' +
        '\n Nome: ' + pname +
        '\n Endereço: ' + address

	link = 'https://wa.me/5566981174164?text=' + encodeURIComponent(text)

	window.open(link, '_blank')
}

function exitScreen() {
	document.querySelector('.confirm-screen').classList.add('hidden')
}
