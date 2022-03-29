// Starting array
let array = [-12, 31, 28, 30, 4, 0, 12]

let isZero = false;
for (let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === 0){
            isZero = true;
        }
    }
}
console.log(isZero)