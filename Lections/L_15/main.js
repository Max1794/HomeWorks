window.onload = function () {
    // var data = {
    //     name: 'menu',
    //     type: 'row',
    //     items: ['Home', 'Gallery', 'Contact']
    // }

    var data = { 
        name: 'menu', 
        type: 'row', 
        items: [
            {
                title: 'title 1',
                handler: 'ActionAdd'
            },
            {
                title: 'title 2',
                handler: 'ActionSaveAs',
                items: [
                    { title: 'Home' }, 
                    { title: 'Gallery' }
                ]
            },
            {
                title: 'title 3',
                handler: 'ActionExit'
            }
        ]
    }

    var ul = document.createElement('ul');
    var Ul = document.createElement('ul');
    var li,Li;
    for (var i = 0; i < data.items.length; i++) {
        li = document.createElement('li');
        li.innerHTML = data.items[i].title;
        li.addEventListener('click', window[data.items[i].handler]);
        li.classList.add(data.name);
        ul.classList.add(data.name, data.type);
        ul.appendChild(li);
        // console.log(data.items[i].items);
        if (data.items[i].items) {
            for (var j = 0; j < data.items[i].items.length; j++) {
                Li = document.createElement('li');
                li.appendChild(Ul);                
                Ul.appendChild(Li);   
                Li.classList.add('items');
                Li.innerHTML = data.items[i].items[j].title;
                   
            }
        }
        continue;  
    }
    document.body.appendChild(ul);
   
}

function ActionAdd () {
    alert('Menu 1');
}
function ActionSaveAs () {
    alert('Menu 2');
}
function ActionExit () {
    alert('Menu 3');
}