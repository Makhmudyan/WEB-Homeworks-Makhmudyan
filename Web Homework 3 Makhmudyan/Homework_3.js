function ask_name(name='I still don`t know your name'){
    alert (name);
}

let name = prompt("What's your name?", "write your name");
if (name)
    ask_name(name);
else
    ask_name();


