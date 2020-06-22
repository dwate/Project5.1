//variables

const cartBtn = document.getElementById("cartBtn");
const closeCtBtn = document.getElementById("closeCartBtn");
const clearCtBtn = document.getElementById("clearCartBtn");
const cartDOM = document.getElementById("cartBox");
const cartOverlay = document.getElementById("cart-overlays");
const cartItems = document.getElementById("cart-items");
const cartContent = document.getElementById("cart-contents");
const cartTotal = document.getElementById("cart-totals");
const camerasDOM = document.getElementById("cameras");

let cart = [];
// getting the products
class Products {
async getProducts(){
 try {
    let result = await fetch('http://localhost:3000/api/cameras')
    let data = await result.json();
    return data;  
 } catch (error) {
    console.log(error);
 }
 }
}
//display products
class UI {}
//local storage 
class Storage {}

document.addEventListener("DOMContentLoaded", ()=>{
const ui = new UI();
const products = new Products();

// get all products
products.getProducts().then(data => console.log(data));

})


