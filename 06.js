//Guess a number use prompt also use +promt bez they firstly declared string so use +
let winningno= 20;
let userguess= +prompt("Guess a number");

// console.log(typeof userguess, userguess);

if(userguess === winningno)
{
    console.log("your guess is right");
}else{
    if(userguess < winningno){
    concole.log("its to low");
}else
{
    concole.log("its to high")
}
}

