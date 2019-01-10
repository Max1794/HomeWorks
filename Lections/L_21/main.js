//                1

var users = [
    { id: 1, name: 'Vasya', surname: 'Vasiliev' },
    { id: 2, name: 'Ivan', surname: 'Ivanov' },
    { id: 3, name: 'Irina', surname: 'Plushkina' }
];


var listName = [];

var listName = users.map(function(item){
    return item.name + "_" + item.surname;
});

console.log(listName);

//                  2

var users = [
    { id: 1, age: 21, name: 'Vasya', surname: 'Vasiliev' },
    { id: 2, age: 28, name: 'Ivan', surname: 'Ivanov' },
    { id: 3, age: 18, name: 'Irina', surname: 'Plushkina' }
];


function filterToAge(age, arr){
    return arr.filter(function(item){
        return item.age > age;
    })
    .map(function(item){
        return item.name + "_" + item.surname;
    })
}

console.log(filterToAge(20, users));

//                    3

var orders = [{
    id: 5,
    date: '21-01-2015',
    amount: 783
}, {
    id: 8,
    date: '24-01-2015'
}, {
    id: 21,
    date: '29-01-2015',
    amount: 1234
}, {
    id: 78,
    date: '04-02-2015',
    amount: 123
}, {
    id: 23,
    date: '15-02-2015',
    amount: 245
}];

var length = 0;

var price = orders
    .reduce(function(prev, item){
        if( !item.amount ){
            return prev;
        }else{
            ++length;
            return prev + item.amount;
        }     
    }, 0)/length;

console.log(price);


//           Practice

function fMap(cb, list){
    var count = 0;
    return {
        next: function(){
            if(!list[count]) return;
            return cb(list[count++])
        },
        prev: function(){
            if(!list[count]) return;
            return cb(list[count--])
        }
    }
}
function square(x) { return x * x; };
var list = [1, 2, 3];
var squareGen = fMap(square, list);

console.log(squareGen.next()); // 1
console.log(squareGen.next()); // 4
console.log(squareGen.next()); // 9
console.log(squareGen.prev());
console.log(squareGen.prev());