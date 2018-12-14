window.onload = function () {
    document.querySelector('#button')
        .addEventListener('click', function () {
            var name = document.querySelector('#name');
            var age = document.querySelector('#age');

            if (name.value.length > 0) {
                for (var i = 0; i < name.value.length; i++) {
                    if( isNaN(name.value[i]) === false) {
                        name = false;
                        break;
                    }
                }
            }else {
                name = false;
            }
            
            if (age.value.length > 0) {
                for (var i = 0; i < age.value.length; i++) {
                    if( isNaN(age.value[i]) === true) {
                        age = false;
                        break;
                    }
                }
            }else {
                age = false;
            }
            
            if (name === false || age === false) {
                alert('Введите корректно данные');
                return;
            }else{
                var body = [];
                body.push(name.value, age.value);

                doAjax('POST', './registration', body)
                    .then(
                        function () {
                            console.log('Всё круто!');
                        },
                        function (error) {
                            console.log(error);
                        }
                    )
            }
        });

        function doAjax (method, url, body) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            
            return new Promise(function (resolve, reject) {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState != 4) {
                        return;
                    }

                    if (xhr.status != 200) {
                        reject(xhr.statusText);
                    }

                    resolve();
                }
                xhr.send(body);
            });
        }
}



// var xhr = new XMLHttpRequest();

// var url = '/data.json'
// xhr.open('GET', url);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState != 4) {
//         return;
//     }
//     console.log(xhr.responseText);
// }

// xhr.send();
// console.log(xhr);