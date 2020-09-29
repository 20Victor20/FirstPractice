let button = document.querySelector ('button');
button.onclick = function sum() {
	
	let setPrice = prompt ( 'Введіть суму на яку здійснюється покупка' , '');
		
	const DISCOUNT = 1000; 
			
		if (setPrice < DISCOUNT ) {
			console.log ('Сума до сплати : ' + setPrice + ' грн.')
			
			} else if ( (setPrice > DISCOUNT) || (setPrice = DISCOUNT)  ) {
				let randDiscount = Math.ceil( Math.random() * 15 );
					console.log( randDiscount + '% - Ваша знижка ');  					

				let getPrice = setPrice / 100 * randDiscount; 
				
				let price = setPrice - getPrice ;
					alert ('Сума до сплати з урахуванням знижки ' + randDiscount + '% складає '  + price + ' грн.' ); 
						
				let delivery = confirm ('У разі придбання товара готівкою Ви матимете можливість скористатись безкоштовною доставкою ');
					if (!delivery) {							
						console.log ('Сума до сплати : ' + price + ' грн.')
							
					} else if (delivery){
						let distance = prompt ('Яка відстань (км) до місця доставки ?');
							if ( distance > 30){
								let deliveryPrice = (( distance - 30 ) * 5 );
									alert ('Загальна сума до оплати за товар: ' + (price + deliveryPrice) + ' грн. Доплата за доставку товару становить : ' + deliveryPrice + ' грн.');
							}else if ( distance = 30 || distance < 30) {
								alert ('Загальна сума до оплати за товар : ' + price + ' грн. Ваш товар буде доставлений безкоштовно.' );
								}
							} 
								
		} 
}