console.log('content script ran');
var url = window.location.href;
console.log('url: ',url);


if(url.includes('amazon.com/gp/cart')){
	//first landing on the main orders page
	//send all the dropDown Options to the Background page
	//navigate to a specific Time Period ()
  	
	let purchaseYears = [];
	var theOptions = document.querySelectorAll('#sc-saved-cart-items')[0].options;
	for (i = 0; i < theOptions.length; i++) { 
    	purchaseYears.push(theOptions[i].value);
	}
    sendToBackground("purchaseYears", purchaseYears);
    setTimeout(function(){ 
	    window.location.href = 'https://www.amazon.com/gp/your-account/order-history?orderFilter='+purchaseYears.slice(-1)[0]+'&ahf=on'; 
    	}, 
    10000);
} 