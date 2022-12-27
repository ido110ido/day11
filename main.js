//EX0
const matrix = [["apple", "banana", "cherry"], ["dog", "cat", "bird"], ["red", "green", "blue"]];
function printMatrix(arr = []) {
    let matrixLine = ''
    for(let i = 0; i < arr.length;i++){
        matrixLine = ''
        for(let j = 0; j < arr.length;j++){
            matrixLine +=arr[i][j] + ' '
        }        
        console.log(matrixLine);
    }
}
printMatrix(matrix)

//1
const matrixNum = [[1,2,3],[4,5,6],[7,8,9]]
function sumOfColumns(arr = []) {
    let sumOfColumns = []
    for(let i = 0; i < arr.length;i++){
        sumOfColumns[i] = 0;
        for(let j = 0; j < arr.length;j++){
            sumOfColumns[i] +=arr[j][i]
        }        
    }
    return sumOfColumns
}
console.log(sumOfColumns(matrixNum)); 

//2
function smallestInRow(arr = []) {
    let smallestInRow = []
    for(let i = 0; i < arr.length;i++){
        smallestInRow[i] = arr[i][0];
        for(let j = 0; j < arr.length;j++){
            if(smallestInRow[i] > arr[i][j]){
                smallestInRow[i] = arr[i][j]
                console.log(arr[i][j]);
            }
        }        
    }
    return smallestInRow
}
console.log(smallestInRow(matrixNum)); 
//4
function sortTheArray(arr = []){
    let newArr =  [...arr.sort()]
    return newArr
}
console.log(sortTheArray([1,4,8,2,4,5,"asdasd",'qwqw']));

//5 
function shuffle(arr = []){
    let newArr =  []
    let n = 0
    let random = Math.floor((Math.random() * arr.length))
    while (arr.length > 0) {
        newArr[n] = arr.splice(random,1).pop()
        random = Math.floor((Math.random() * arr.length))
        n++
    } 
    return newArr

}
console.log(shuffle([1,2,3,4,5,6,7]));

//7
function Ex7(){
    let p = '';
    let shifter = 0
    for(let i = 0; i <=5; i++){
        p = ' '.repeat(shifter)
        for(let x = 0; x < 3; x++){
            p += "* "
            
        }
        shifter++
        console.log(p);
    }

}
Ex7()
//8
function Ex8(){
    let p = '';
    let shifter = 0
    for(let i = 6; i > 0; i--){
        p = ' '.repeat(shifter*2)
        for(let x = 0; x < i; x++){
            p += "* "
            
        }
        shifter++
        console.log(p);
    }

}
Ex8()