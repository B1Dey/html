


let Product =[{
    title: "Coca",
    price: 5,
    quantity: 0
}]




const btnPlus = document.getElementsByClassName("Increment")[0]
const btnMinus = document.getElementsByClassName("decrement")[0]




document.getElementsByClassName("Product1")[0].innerText=Product[0].title
document.getElementsByClassName("price")[0].innerText=Product[0].price
btnPlus.addEventListener("click", function(AddQuantity) {
    Product[0].quantity += 1
    
    document.getElementsByTagName("span")[0].innerText=Product[0].quantity
 
} )
btnMinus.addEventListener("click", function(removeQuantity) {
    Product[0].quantity -= 1
    if (Product[0].quantity <= 0){
        Product[0].quantity = 0
    }else{
        document.getElementsByTagName("span")[0].innerText=Product[0].quantity

    }
    
    
 
} )