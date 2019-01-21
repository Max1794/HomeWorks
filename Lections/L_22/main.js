class C1 {
    constructor(p4){
        this.p4 = p4;
    }

}

class C2 extends C1 {
    constructor(p1, p3, p4){
        super(p4);
        this.p1 = p1;
        this.p3 = p3;
    }
}

class C3 extends C2 {
    constructor(p1, p2, p3, p4){
        super(p1, p3, p4);
        this.p2 = p2;

    }
}

var p = new C3('fhdf', 'jehfweuhf', 'welfH', 'dbrfbd');
console.log(p);

window.onload = function(){
    class Elem {
        constructor(selector){
            this.elem = document.querySelector(selector);
        }

        html (znak){
            this.elem.innerHTML += znak;
            return this;
        }
        append (znak){
            this.elem.insertAdjacentHTML('afterbegin', znak);
            return this;
        }
        prepend (znak){
            this.elem.insertAdjacentHTML('beforeend', znak);
            return this;
        }
        attr (atrName, value){
            this.elem.setAttribute(atrName, value);
            return this;
        }
    }
    
    var elem = new Elem('p');
    console.log(elem);
    console.log(elem.html('kerjgkjrgh').prepend('<p>dgvksd</p>').append('<hr>'));
    elem.attr('class', 'ehjrgfjhd').attr('class', 'sheifdjhvo')
}
