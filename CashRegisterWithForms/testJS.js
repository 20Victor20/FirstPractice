function firstCount() {
	const DISCOUNT = 1000;
	let setPrice = document.getElementById("basePrice").value;
		console.log ('Сума покупки : ' + setPrice + ' грн.')	
	if ( setPrice >= DISCOUNT ){
  		document.getElementById("showSection").style.display = "block";		
  	}
  	else {
		document.getElementById("endPrice").innerHTML = setPrice;
			console.log ('Сума до сплати : ' + setPrice + ' грн.')
  	}
}

function secondCount() {
	let setPrice = document.getElementById("basePrice").value;
	let randomDiscount = Math.ceil(Math.random() * 15 );
 		console.log('Знижка : ' + randomDiscount + ' %.');
 	let discPrice = setPrice - (setPrice / 100 * randomDiscount) ; 
 		console.log('Ціна товару з урахуванням знижки : ' + discPrice + ' грн.');
	let distance = document.getElementById ("dist").value;
		if (distance > 30) {
			let deliveryPrice = (distance - 30) * 5;
				console.log ('Вартість доставки : ' + deliveryPrice + " грн.");
			let totalPrice = discPrice + deliveryPrice;
				console.log ('Загальна сума до сплати за товар : ' + totalPrice + " грн.");
			document.getElementById("endPrice").innerHTML = (totalPrice).toFixed(2);
		}
		else {
			document.getElementById("endPrice").innerHTML= (discPrice).toFixed(2);
		}
}

function wantDelivery() {
	document.getElementById("dist").disabled = false;
} 

function dontWantDelivery () {
	document.getElementById("dist").disabled = true;
}