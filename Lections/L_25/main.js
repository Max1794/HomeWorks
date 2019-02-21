var table = new Vue({
    el: "#table",
    data: {
        model: [
            {
                id: "id",
                title: "title",
                adress: "adress",
                age: "age"
            },
            {}
        ],
        identificator: {
            0: "id",
            1: "title",
            2: "adress",
            3: "age"
        },
        show: false,
        message: "",
        pos: null,
        index: null
    },
    methods: {
        add() {
            this.model.push({})
        },
        remove() {
            this.model.pop();
        },
        text(event){
            this.show = true;
        
            this.index = event.target.cellIndex    // the cell column index of the event object 
            this.pos = event.target.parentElement.rowIndex // index of the cell line of the event object
            this.message = event.target.outerText;
        },
        toSend(event){
            this.show = false;
            var index = this.identificator[this.index];
            this.model[this.pos][index] = this.message; 
        }
    }
})