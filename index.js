var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(array,element){
kittens.push("Ralph");
return kittens
}

function destructivelyPrependKitten(array,element){
kittens.unshift("Bob");
return kittens
}

function destructivelyRemoveLastKitten(array){
kittens.pop();
return kittens
}

function destructivelyRemoveFirstKitten(array){
kittens.shift();
return kittens
}

function appendKitten(array, element){
return [...kittens, "Broom"]
}


// Add your functions and code here
