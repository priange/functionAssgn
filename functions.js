// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// a) Create an array containing the names of all items in the inventory maximum of 10.

let fruitsarray=["Mango","Orange","Apple","Peer","StrawBerry","Termarine","bananas","bushberries"]
// b) Create a separate array with the corresponding stock quantities of each item maximum of 10.
let quantityarray=[7,20,8,30,60,50,4,10]
// c) Write a function to add a new item to the inventory, updating both arrays.
function add(array,quantity){
if(fruitsarray.length>=10){
    console.log("no fruits")
}else{
fruitsarray.push(array)
quantityarray.push(quantity)
console.log(`i have add ${array} and ${quantity}`)

}
}
 add("watermelon",10)   
 console.log(fruitsarray)
 console.log(quantityarray)
// d) Write a function to update the stock quantity of an existing item.
function addstock(){
    quantityarray[1]=50
    console.log(quantityarray)
}
addstock()

//e)  Write a function to calculate the total number of items in the inventory.
function sales(){
    return fruitsarray.length
}
console.log(sales(fruitsarray))






// f) Write a function to find the item with the lowest stock quantity.
let min=Math.min(...quantityarray)
console.log(min,"bananas")
function lowest(){
    for(let u=0;u<quantityarray.length;u++){
        min=Math.min(min,quantityarray[u])
    }
}
lowest()





