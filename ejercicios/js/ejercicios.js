//-----------------------Ejercicio 1
/* let num1 = prompt("Escribe el primer numero")
let num2 = prompt("Escribe el segundo numero")

let factorial = 1

for(let i=1; i<=num1; i++){
    factorial*=i
}

let potencia = num1**num2
let expresion

if(factorial > potencia){
    expresion = "mayor"
}else{
    expresion = "menor"
}

console.log(`El factorial de ${num1} (${factorial}) es ${expresion} que ${num1}^${num2} (${num1**num2})`) */


//-------------------Funcion rara xd
/* function myfunc(a, b, c, ...items){
    console.log(a, b, c, items)
}

myfunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) */


//-------------------Reto 2 (arreglos)
//Con console.log - 66 lines
//let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let numsArray2 = [2, 4, 6, 8, 10]
let numsArray = [2,4,4,4,6,8,10]
let numsArray2 = [1,2,3,5,6]

const deleteNum = (array, num) => {
    let copyArray = array.slice()
    let newArray = []

    for(const numi of copyArray){
        if(array.indexOf(num) == -1){
            console.log("El numero:", num, "no existe en el array")
        }else if(numi != num){
            newArray.push(numi)
        }
    }
    if(copyArray != newArray){
        console.log("Se elimino el numero:", num)
    }
    console.log("delete:", newArray)
}

const deleteIndexNum = (array, index) => {
    let copyArray = array.slice()

    if(copyArray[index] != undefined){
        console.log("Se elimino el numero:", copyArray[index])
        copyArray.splice(index, 1)
    }else{
        console.log("La posicion", index, "no existe en el array")
    }
    console.log("delete by index:", copyArray)
}

const addNum = (array, num) => {
    let copyArray = array.slice()

    for(const i in copyArray){
        if(copyArray[i] >= num){
            copyArray.splice(i, 0, num)
            break;
        }else if(copyArray.length-1 == i){
            copyArray.push(num)
            break;
        }
    }
    console.log("Se agrego el numero", num, "ordenadamente")
    console.log("add number:", copyArray)
}

const changeNum = (array, index, num) => {
    let copyArray = array.slice()

    if(copyArray[index] == undefined){
        console.log("La posicion", index, "no existe en el array")
    }else if(copyArray[index-1] <= num & copyArray[index+1] >= num || copyArray.length-1 == index & copyArray[index-1] <= num || index == 0 & copyArray[index+1] >= num){
        console.log("Se modifico el numero", copyArray[index], "por:", num)
        copyArray.splice(index, 1, num)
    }else{
        console.log("La modificacion no se puede hacer")
    }
    console.log("change number: ", copyArray)
}

//deleteNum(numsArray, 1)
//deleteIndexNum(numsArray, 10)
//addNum(numsArray2, 3)
//changeNum(numsArray2, 7, 3)
deleteNum(numsArray, 4)
deleteIndexNum(numsArray2, 2)
changeNum(numsArray, 4, 5)
changeNum(numsArray, 4, 9)
addNum(numsArray, 2.5)
addNum(numsArray2, 0.5)
addNum(numsArray2, 8)


//Sin console.log - 50 lines
/* let numsArray = [2,4,4,4,6,8,10]
let numsArray2 = [1,2,3,5,6]

const deleteNum = (array, num) => {
    let copyArray = array.slice()
    let newArray = []

    for(const numi of copyArray){
        if(numi != num){
            newArray.push(numi)
        }
    }
    console.log("delete:", newArray)
}

const deleteIndexNum = (array, index) => {
    let copyArray = array.slice()

    if(copyArray[index] != undefined){
        copyArray.splice(index, 1)
    }
    console.log("delete by index:", copyArray)
}

const addNum = (array, num) => {
    let copyArray = array.slice()

    for(const i in copyArray){
        if(copyArray[i] >= num){
            copyArray.splice(i, 0, num); break;
        }else if(copyArray.length-1 == i){
            copyArray.push(num); break;
        }
    }
    console.log("add number:", copyArray)
}

const changeNum = (array, index, num) => {
    let copyArray = array.slice()

    if(copyArray[index] != undefined){
        if(copyArray[index-1] <= num & copyArray[index+1] >= num || copyArray.length-1 == index & copyArray[index-1] <= num || index == 0 & copyArray[index+1] >= num){
            copyArray.splice(index, 1, num)
        }
    }
    console.log("change number: ", copyArray)
}

deleteNum(numsArray, 4)
deleteIndexNum(numsArray2, 2)
changeNum(numsArray, 4, 5)
changeNum(numsArray, 4, 9)
addNum(numsArray, 2.5)
addNum(numsArray2, 0.5)
addNum(numsArray2, 8) */