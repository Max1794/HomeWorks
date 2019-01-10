function doRequest (method, url) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if(xhr.readyState != 4){
                return;
            }

            var resp = JSON.parse(xhr.responseText);
            if(xhr.status != 200) {
                reject(xhr.statusText);
            }
            resolve(resp);
        }
        xhr.send();
    })
}

var data, data2;

// doRequest('GET', '/data.json')
//     .then(function(resp){
//         data = resp;
//         return doRequest('GET', '/data2.json');
//     })
//     .then(function(resp){
//         data2 = resp;
//         var newArr = data.concat(data2);
//         console.log(newArr);
//     });

//----------------------------------------

function gPr(){
    var time = Math.random()*5000;
    
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve(time);
        }, time);
    })
}

var asuncs = [gPr(), gPr(), gPr()];
var cb = [p1, p2, p3]

Promise
    .all(asuncs)
    .then(function(value){
        if(!cb.length || !value.length) return;
        return runAfter(cb, value);
    })

function p1(value){
    console.log(value);
}

function p2(value){
    console.log(value);
}

function p3(value){
    console.log(value);
}

function runAfter (cb, value) {
    for(var i = 0, j = 0; i < cb.length, j < value.length; i++, j++){
        cb[i](value[j]);
    }
}