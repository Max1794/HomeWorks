//             Для тегов без атрибутов
// var str = "<h1>efwfj</h1> roigjerjg <br> <div><img></div> <p><span>kjfkjfbiv</span></p> <br> kerhkjhq <input> iryiru <div><p>ekruufhk</p></div> tijgeirgu <img>";
// var res = str.match(/<[a-zA-Z][a-zA-Z0-9]*>(<[a-zA-Z][a-zA-Z0-9]*>)?(.*)?(\/<[a-zA-Z][a-zA-Z0-9]*>)?(<\/[a-zA-Z][a-zA-Z0-9]*>)?/gi)
// console.log(result)
//            Для тегов с любыми атрибутами

// var str = "<input> <script src=\"./main.js\"></script>  <p style=\"color:blueviolet\">rkuhgskfjgfhsre</p> <p>r;igurlgkj</p> <div>kruhsifurghia</div> <input type=\"text\">";
// var result = str.match(/<[a-z][a-z0-9]*\s[a-z="'0-9:!?,./\ {}]+" ?\/?>(<\/[a-z][a-z0-9]*>)?/gi);
// console.log(result);

//           Для тегов с атрибутами data-id

var str = "<input> <img data-id=\"khjfgsdvh\"> <div data-id=\"khjfgsdvh\"><p></p><p></p></div> <div></div> <p></p>";
var result = str.match(/<[a-z][a-z0-9]*\s?data-id[a-z0-9=:"' {}!?.,/\ ]*>(<\/[a-z][a-z0-9]*>)?/gi);

console.log(result)