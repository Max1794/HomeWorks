var dataApp = {
    leftList: [],
    centerList: [],
    rightList: []
}

var app = new Vue({
    el: ".leftRight",
    data: dataApp,
    methods: {
        moveL(){
                this.leftList.push(this.centerList.pop());
        },
        moveR () {
            this.rightList.push(this.centerList.pop());
        },
        remove(item, list){
            var pos = list.indexOf(item);
            list.splice(pos, 1);
        }
    }
})
var count = 0;
setInterval(function(){
    if(dataApp.centerList.length === 3){
        count += 1;
        return;
    }else{
        count += 1;
        dataApp.centerList.push(count);
    }
}, 1000)