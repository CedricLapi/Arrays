

function pousse(arr, num){
    for(var i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
        arr[0] = num;

        return arr;
}

var array = [5, 7, 2, 3];
var num = 8;


pousse(array, num);
console.log(array);