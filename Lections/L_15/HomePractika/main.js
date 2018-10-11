window.onload = function () {

    var div, Div;
    
        function Square (event) {
            Div = document.createElement('div');
            div = document.createElement('div');
            Div.classList.add('field');
            div.classList.add('square');
            div.style.left = 
            document.body.appendChild(Div);
            Div.appendChild(div);
            
            var style = {
                left: div.style.left = (Div.offsetWidth / 2) - (div.offsetWidth / 2) + 'px',
                top: div.style.top =  (Div.offsetHeight / 2) - (div.offsetHeight / 2) + 'px'
            }
                    
            this.getStyle = function () {
                return style;
            } 
            this.setStyle = function (value) {
                style.left = value.left;
                style.top = value.top;
            }     
        }
    
        Square.prototype.left = function (event) {
            var style = this.getStyle();
            if (parseFloat(style.left) - 50 >= 0) {
                style = {
                    left: div.style.left = parseFloat(style.left) - 50 + 'px',
                    top: div.style.top = style.top
                }
                
                this.setStyle(style);
            }else {
                alert('Ход невозможен');
            }
            
        }
        Square.prototype.right = function (event) {
            var style = this.getStyle();
    
            if (parseFloat(style.left) + div.offsetWidth + 50 <= Div.offsetWidth) {
                style = {
                    left: div.style.left = parseFloat(style.left) + 50 + 'px',
                    top: div.style.top = style.top
                }
                
                this.setStyle(style);
            }else {
                alert('Ход невозможен');
            }
        }
    
        Square.prototype.top = function (event) {
            var style = this.getStyle();
    
            if (parseFloat(style.top) - 50 >= 0) {
                style = {
                    left: div.style.left = style.left,
                    top: div.style.top = parseFloat(style.top) - 50 + 'px'
                }
                
                this.setStyle(style);
            }else {
                alert('Ход невозможен');
            }
        }
    
        Square.prototype.bottom = function (event) {
            var style = this.getStyle();
    
            if (parseFloat(style.top) + div.offsetHeight + 50 <= Div.offsetHeight) {
                style = {
                    left: div.style.left = style.left,
                    top: div.style.top = parseFloat(style.top) + 50 + 'px'
                }
                
                this.setStyle(style);
            }else {
                alert('Ход невозможен');
            }
        }
        Square.prototype.jump = function () {
            div.classList.add('jump');
        }
        Square.prototype.ctrl = function () {
            div.classList.add('ctrl');
        }
    
    
    
    
    
        var p = new Square(event);
    
        document.addEventListener('keydown', function (e) {
            console.log(e.which);
            if (e.which == 17 || e.which == 37 || e.which == 39) {
                switch(e.which) {
                    case 17:
                        p.ctrl();
                        break;
                    case 37:
                        p.left();
                        break;
                    case 39:
                        p.right();
                        break;
                }
            }else{
                switch(e.which) {
                    case 17:
                        p.ctrl();
                        break;
                    case 32:
                        p.jump();
                        break;
                    case 37:
                        p.left();
                        break;
                    case 38:
                        p.top();
                        break;
                    case 39:
                        p.right();
                        break;
                    case 40:
                        p.bottom();
                        break;
                }
            }    
            
        });
    
        document.addEventListener('keyup', func);    
    
        function func (e) {
                switch(e.which) {
                    case 17:
                        div.classList.remove('ctrl');
                        break;
                    case 32:
                        div.classList.remove('jump');
                        break;
                }
        }
    }