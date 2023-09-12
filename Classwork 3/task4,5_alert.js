// function welcome(name){
//     return (`Welcome ${name}`)
// }
// name = prompt("Введите Ваше имя: ", "Имя");
// alert(welcome(name));

function showName(names='Ivan'){
    alert(`Your name is ${names}`);
}

let test = prompt("Введите Ваше имя: ", "name");
if (test == '')
    showName();
else
    showName(test);