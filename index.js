let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

for(let i = 0; i < inteiros.length; i++){
    if(inteiros[i] % 2 == 0){
        pares.push(inteiros[i]);
    }else{
        impares.push(inteiros[i]);
    }
}
console.log(...pares, ...impares);