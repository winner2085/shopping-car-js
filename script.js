let shoppingCart = [];             //creates array for shopping cart
let appleButton = document.querySelector("#add-apple");      //gets apple button
let blueButton = document.querySelector("#add-blueberries");
let waterButton = document.querySelector("#add-watermelon");
let cartList = document.querySelector("#cart-items");       //gets cart ul

appleButton.addEventListener("click", () =>{
    shoppingCart.push("Apple");   //pushes an object to the front of a list
    let li = document.createElement("li");   //creates list item/puts a tag in html
    li.textContent = shoppingCart[0];
    cartList.appendChild(li);
});

blueButton.addEventListener("click", () =>{
    shoppingCart.push("Blueberries");   //pushes an object to the front of a list
    let li = document.createElement("li");   //creates list item/puts a tag in html
    li.textContent = shoppingCart[1];
    cartList.appendChild(li);
});

waterButton.addEventListener("click", () =>{
    shoppingCart.push("Watermelon");   //pushes an object to the front of a list
    let li = document.createElement("li");   //creates list item/puts a tag in html
    li.textContent = shoppingCart[2];
    cartList.appendChild(li);
});