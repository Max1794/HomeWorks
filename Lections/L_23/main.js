var data ={
    set model(value){
        if(!this.str){
            this.str = value;
        }else{
            this.znak = value;
            this.str = this.str.split(value);
        }
    },
    get model(){
        return {
            sumbol: this.znak,
            count: this.str.length - 1
        }
    }
}

data.model = 'Hello, how, are you?';
data.model = ', ';
console.log(data.model);

obj = {
    x: 10,
    y: 20,
    p: 15,
    set model(value){
        for (var item in value){
            var oper = value[item].operation
            if(this[item] === undefined){
                this[item] = operations[oper](0, value[item].value);
            }else{
                this[item] = operations[oper](this[item], value[item].value);
            }
        }
    }
}

var operations = {
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '+': (a, b) => a + b,
    '%': (a, b) => a % b 
}

obj.model = {
    x: { value: 33, operation: '*' }, 
    z: { value: 75, operation: '+' }, 
    p: { value: 4, operation: '%' } 
}

console.log(obj);

var objec = {
    list: [3, 45, 2, 6, 4, 78, 90],
    list2: [1, 34, 45, 89, 78, 4],
    arr: [],
    get model(){
        var list = this.list;
        var list2 = this.list2;
        for(let i = 0; i < list.length; i++){
            for(let j = 0; j < list2.length; j++){
                if(list[i] === list2[j]){
                    this.arr.push(list2[j])
                }
            }
        }
        return this.arr;
    }
}
objec.model;
console.log(objec);

Array.prototype.getRender = function () {
    var table = document.createElement('table');
    var arr = this;
    for(let i = 0; i < arr.length; i++){
        var tr = document.createElement('tr');
        for(let j = 0; j < arr[i].length; j++){
            var td = document.createElement('td');
            var elem = document.createTextNode(arr[i][j]);
            td.appendChild(elem);
            tr.appendChild(td);            
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
var arr = [ [34, 89, 90, 789, 675], 
            [5435, 5657, 56, 34, 344], 
            [563, 4534, 45, 808, 123]
          ];
console.log(arr.length)

window.onload = function(){
    arr.getRender();
}
