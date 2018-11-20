window.onload = function () {

    var buttons = document.body.querySelectorAll('div');
    var count = document.body.querySelector('p');
    var clearCount = document.querySelector('#clearCount');
    var setCount = document.body.querySelector('#setCount');

    var arr = [];

    for (var i = 0; i <= 1000; i++) {
        arr[i] = 'rgb('+color()+','+color()+','+color()+')';    
    }
    
    var array = JSON.stringify(arr);
    localStorage.setItem('array', array);
    var returnArr = JSON.parse(this.localStorage.getItem('array'));



    if (!localStorage['click-id_1'] && !localStorage['click-id_2']) {
        count.innerHTML = 0;
        buttons[0].style.backgroundColor = returnArr[0];
        buttons[1].style.backgroundColor = returnArr[0];        
    }else if (!localStorage['click-id_1']) {
        count.innerHTML = 0 + +localStorage['click-id_2'];
        buttons[0].style.backgroundColor = returnArr[count];
    }else if (!localStorage['click-id_2']) {
        count.innerHTML = 0 + +localStorage['click-id_1'];
        buttons[1].style.backgroundColor = returnArr[count];                
    }else {
        count.innerHTML = +localStorage['click-id_1'] + +localStorage['click-id_2'];
        buttons[0].style.backgroundColor = returnArr[+localStorage['click-id_1'] + +localStorage['click-id_2']];        
        buttons[1].style.backgroundColor = returnArr[+localStorage['click-id_1'] + +localStorage['click-id_2']];              
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i]
                .addEventListener('click', function () {
                    var key = this.id;
                    if (localStorage['click-id' + key]) {
                        localStorage['click-id' + key]++;
                        count.innerHTML = localStorage['click-id' + key];
                        this.style.backgroundColor =returnArr[localStorage['click-id' + key]];
                    } else {
                        localStorage['click-id' + key] = 1;             
                        this.style.backgroundColor = returnArr[localStorage['click-id' + key]];
                        count.innerHTML = localStorage['click-id' + key];                        
                    }
                })
    }

    clearCount
                .addEventListener('click', function () {
                    localStorage.removeItem('click-id_1');
                    localStorage.removeItem('click-id_2');                    
                    count.innerHTML = 0;
                    buttons[0].style.backgroundColor = returnArr[0];                    
                    buttons[1].style.backgroundColor = returnArr[0];
                });

    setCount
            .addEventListener('click', function () {
                var setCounter = prompt('Введите id кнопки'); 
                if (setCounter === null) {
                    return;
                } else {
                    if (!localStorage['click-id' + '_' + setCounter]) {
                        count.innerHTML = 'Значение данного id блока отсутсвует';
                    }else{
                        count.innerHTML = localStorage['click-id' + '_' + setCounter];
                    } 
                }
            });
    
    

    function color () {
        return Math.floor(Math.random()*256);
    }  
}
