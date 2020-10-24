function countEver() {

  	document.getElementById("show").style.display = "block";
	
	let setPrice = document.getElementById("bestPrice");
	// let setPrice = prompt ( 'Введіть суму на яку здійснюється покупка' , '');
	// document.getElementById("setPrice") = ( 'Введіть суму на яку здійснюється покупка' , '');
			console.log ('Сума покупки : ' + setPrice + ' грн.')
	
	const DISCOUNT = 1000; 
			
		if (setPrice < DISCOUNT ) {
			console.log ('Сума до сплати : ' + setPrice + ' грн.')
			
			} else if ( (setPrice > DISCOUNT) || (setPrice = DISCOUNT)  ) {
				let randDiscount = Math.ceil( Math.random() * 15 );
					console.log('Знижка : ' + randDiscount + ' %.');  					

				let getPrice = setPrice / 100 * randDiscount; 
				
				let price = setPrice - getPrice ;
					alert ('Сума до сплати з урахуванням знижки ' + randDiscount + '% складає '  + price + ' грн.' ); 
					console.log('Ціна товару з урахуванням знижки : ' + price + ' грн.');
					console.log('Сума знижки : ' + getPrice + ' грн.');	
				
				let delivery = confirm ('У разі придбання товара готівкою Ви матимете можливість скористатись безкоштовною доставкою на відстань до 30 км. Бажаєте скористатись даною послугою?');
					  if (delivery){
						let distance = prompt ('Яка відстань (км) до місця доставки ?');
							console.log('Відстань доставки : ' + distance + ' км.');
							if ( distance > 30){
								let deliveryPrice = (( distance - 30 ) * 5 );
									alert ('Загальна сума до оплати за товар: ' + (price + deliveryPrice) + ' грн. Доплата за доставку товару становить : ' + deliveryPrice + ' грн.');
									console.log('Доплата за доставку : ' + deliveryPrice + ' грн.');
									console.log('Загальна сума до оплати за товар: ' + (price + deliveryPrice) + ' грн.');
									
							}else {							
									console.log ('Загальна сума до оплати за товар : ' + price + ' грн. Ваш товар буде доставлений безкоштовно.')
							}
						} 						
					} 
				}

