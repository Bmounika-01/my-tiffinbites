//!SEARCH FUNCTIONALITY
let search_field=document.getElementById("search_field")
let tiffin_container=document.getElementById("menu_two")
let tiffin_card=document.querySelectorAll(".card_container")
// console.log( search_field)
// console.log(tiffin_container)
// console.log(tiffin_card)
search_field.addEventListener("input",()=>{
    let searchTerm=search_field.value.toLowerCase().trim();
    // console.log(searchTerm)
    let hasResults=false;
    tiffin_card.forEach((card)=>{
        let name=card.id
        if(name.includes(searchTerm)){
            card.style.display="block"
            hasResults=true
        }else{
            card.style.display="none"
            hasResults=false
        }
    })
})

//!CART FUNCTIONALITY
let cartQuantity=document.getElementById("quantity")
let cartPrice=document.getElementById("price")

 let cart={}
 let totalQuantity=0
 let totalPrice=0

 let cards=document.querySelectorAll(".card_container")
 console.log(cards)
 cards.forEach((card)=>{
    let itemid=card.id
    let itemname=card.querySelector(".food_title").innerText
    let itemprice=Number(card.querySelector(".food_price").innerText.replace("₹",""))
    let itemquantity=card.querySelector("span")
    let minusbtn=card.querySelectorAll(".quantity_btns")[0]
    let plusbtn=card.querySelectorAll(".quantity_btns")[1]

    cart[itemid]={
        name:itemname,
        price:itemprice,
        quantity:0,
    };


    plusbtn.addEventListener("click",()=>{
        cart[itemid].quantity++
        totalQuantity++
        totalPrice=totalPrice+itemprice
        itemquantity.innerText=cart[itemid].quantity
        updateCart()
    })
    minusbtn.addEventListener("click",()=>{
        if(cart[itemid].quantity>0){
        cart[itemid].quantity--
        totalQuantity--
        totalPrice=totalPrice-itemprice
        itemquantity.innerText=cart[itemid].quantity
        updateCart()
        }
    })


    // console.log(itemid)
    // console.log(itemname)
    // console.log(itemprice)
    // console.log(itemquantity)
    // console.log(minusbtn)
    // console.log(plusbtn) 

 })
// console.log(cartQuantity)
// console.log(cartPrice)

function updateCart(){
    cartQuantity.innerText=totalQuantity
    cartPrice.innerText=`₹${totalPrice.toFixed(2)}`
}

//!POPUP FUNCTIONALITY
let cart_icon=document.getElementById("cart_icon")
let closebtn=document.querySelector("#popup_container>button")
let main=document.querySelector("main")


cart_icon.addEventListener("click",()=>{
    main.style.display="flex"
})
closebtn.addEventListener("click",()=>{
    main.style.display="none"
})

//!POPUP AND CART FUNCTIONALIY

let cartDetails=document.getElementById("cart_details")
let cart_Total_Items=document.querySelector("cart_total_items>span")
let cart_Total_Price=document.querySelector("cart_total_price>span")

// console.log(cartDetails)
// console.log(cart_total_items)
// console.log(cart_total_price)

function renderCartDetails(){
    cartDetails.innerHTML=""
    let hasResults=false

    let totalQuantity=0
    let totalPrice=0

    for(let id in cart){
        let name = cart[id].name
        let price = cart[id].price
        let quantity = cart[id].quantity

        if(quantity>0){
            hasResults=true;

            totalQuantity+=quantity
            totalPrice+=price*quantity

            let para = document.createElement("p")
            para.innerHTML=`${name} x ${quantity} = ${(price*quantity).toFixed(2)}`
            cartDetails.append(para)
            
        }
    }
    if(hasResults==false){
        cartDetails.innerHTML=`<p>No items in the cart</P>`
    }
    
    cart_Total_Items.innerText=totalQuantity
    cart_Total_Price.innerText=totalPrice.toFixed(2)
}    






 