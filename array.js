/*
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





function popfront(arr) {
    
    var temp = arr[0]; 
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]; 
    }
    arr.length--; 

    console.log(temp + ' returned');
    console.log('with '+ "["+arr+"]");
    return arr;
}

var array = [5, 7, 2, 3];
popfront(array);


*/

function insertAt(arr, index, val){

    if(index < 0 || index > arr.length){
        console.log("The index is out of range!");
        return arr;
    }

    var arrNew = [];

    for(var i = 0; i < index; i++ ){
        arrNew.push(arr[i]);
    }


    arrNew.push(val);

    for(var j = index; j < arr.length; j++){
        arrNew.push(arr[j]);
    }

    return arrNew;
}




