window.onload = function () {

    var addToBasket = document.body.querySelectorAll('.add'); 
    var remove = document.body.querySelectorAll('.remove');
    var removeToBasket = document.body.querySelector('#removeToBasket');
    var basket = document.body.querySelector('#basket');
    var product = document.body.querySelector('#product');
    
    var carList = [];
    var carArr; 
    
    if (localStorage['carList']) {
        var returnCarList = JSON.parse(localStorage.getItem('carList'));        
        for (var j = 0; j < returnCarList.length; j++) {
            var paragraph = document.createElement('p'); 
            paragraph.classList.add([returnCarList[j].id]);  
            paragraph.innerHTML = returnCarList[j].id + returnCarList[j].quan;
            product.appendChild(paragraph);
            carList.push(returnCarList[j]); 
        } 
    } 

    for (var i = 0; i < addToBasket.length; i++) {
        addToBasket[i]
                    .addEventListener('click', function () {
                        var key = this.parentElement.className;

                        if (localStorage['carList']) {
                            returnCarList = JSON.parse(localStorage.getItem('carList'));
                        }
                        console.log(returnCarList);

                        if (returnCarList && returnCarList.length) {
                            for (var i = 0; i < returnCarList.length; i++) {
                                if (returnCarList[i].id === key) {
                                    returnCarList[i].quan++;
                                    var p = document.body.querySelector('#product .' + key);
                                    p.innerHTML = returnCarList[i].id + returnCarList[i].quan;
                                }
                            }
                        }
                        if (returnCarList && returnCarList.length) {
                            carList = [];
                            for (var i = 0; i < returnCarList.length; i++) {
                                carList.push(returnCarList[i]);
                            }
                            carArr = JSON.stringify(carList);
                            localStorage.setItem('carList', carArr);
                        }
                        
                        if (returnCarList && returnCarList.length) {
                            for (var i = 0; i < returnCarList.length; i++) {
                                if (!(returnCarList[i].id === key)) {
                                    var p = document.createElement('p'); 
                                    p.classList.add([key]);                           
                                    var quan = 1;
                                    p.innerHTML = key + quan;
                                }else{
                                    return;
                                }
                            }
                            product.appendChild(p);                                                                
                            carList.push({id: key, quan: quan});
                            carArr = JSON.stringify(carList);
                            localStorage.setItem('carList', carArr);  
                        }

                        if (!localStorage['carList']) {
                            var p = document.createElement('p'); 
                            p.classList.add([key]);                           
                            var quan = 1;
                            p.innerHTML = key + quan;
                            product.appendChild(p);
                            carList.push({id: key, quan: quan});
                            carArr = JSON.stringify(carList);
                            localStorage.setItem('carList', carArr);
                        }  
                    });
    }
    

    for (var i = 0; i < remove.length; i++) {
        remove[i]
                        .addEventListener('click', function() {
                            if (!(localStorage['carList'])) {
                                return;
                            }else{
                                returnCarList = JSON.parse(localStorage.getItem('carList'));
                                var key = this.parentElement.className;
                                carList =[];

                                if (returnCarList && returnCarList.length === 1) {
                                    localStorage.clear();
                                    product.innerHTML = '';
                                    returnCarList = [];
                                }else if (returnCarList && returnCarList.length > 1) {
                                    var paragraph = document.body.querySelector('#product .' + key);
                                    if (paragraph === null) {
                                        return;
                                    }else{
                                        paragraph.remove();
                                    }
                                    carList = returnCarList.filter(function (item, pos) {
                                        return (!(item.id === key));
                                    })
                                    carArr = JSON.stringify(carList);
                                    localStorage.setItem('carList', carArr);
                                }
                            }                          
                        })
    }

    removeToBasket
                .addEventListener('click', function () {
                    carList = [];
                    returnCarList = [];
                    product.innerHTML = '';
                    localStorage.clear();                    
                });

}
