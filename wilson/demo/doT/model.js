var template = doT.template('<div id="product"><p>{{= it.products.computer[0].price }}</p></div>'); 
document.body.innerHTML = template(aaa);