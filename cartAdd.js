if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('remove-item')
    // console.log(removeCartItemButtons)
   for (var i = 0; i < removeCartItemButtons.length; i++) {
     var buttonRemove = removeCartItemButtons[i]
     buttonRemove.addEventListener('click', removeCartItem) 
   }



   var quantityInputs = document.getElementsByClassName('item-quantity-input')
   for (var i = 0; i < quantityInputs.length; i++) {
       var input = quantityInputs[i]
       input.addEventListener('change', quantityChanged)
   }
  
}

    var addToCartButton = document.getElementsByClassName('addToCartButton')
    for (var i = 0; i < addToCartButton.length; i++) {
        var button = addToCartButton[i]
        button.addEventListener('click', addToCartClicked)

    }

    var removeAllItemsButton = document.getElementsByClassName('clear-cart')
    for (var i = 0; i < removeAllItemsButton.length; i++) {
        var delButton = removeAllItemsButton[i]
        delButton.addEventListener('click', removeAllItems)
    }
    

function removeAllItems(event) {
    var clearClicked = event.target
  //  var cartContentRemove = document.getElementsByClassName('cart-item')
    clearClicked.parentElement.previousSibling.remove() 
    
    var cartContent = document.createElement('div')
    cartContent.classList.add('cart-content')
    var cartContentAdd = document.getElementsByClassName('carts')
    var cartContentFoot = document.getElementsByClassName('cart-footer')
    clearClicked.before(cartContent)
    

    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    var purchaseAll = document.getElementsByClassName('cart-content')[0].innerHTML
    localStorage.setItem('purchaseAll', purchaseAll);
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
 
    var title = shopItem.getElementsByClassName('camItemName')[0].innerText
    var price = shopItem.getElementsByClassName('camItemPrice')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('camItemImage')[0].src
    var itemID = shopItem.getElementsByClassName('hideID')[0].innerText
    addItemToCart(title, price, imageSrc, itemID)

    updateCartTotal()
}

function addItemToCart(title, price, imageSrc, itemID) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-item')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemNames = cartItems.getElementsByClassName('cartItemTitle')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
         //   console.log(itemID)
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item-display">
    <div class="cart-item-image"> 
    <img src="${imageSrc}" alt="camera picture" width="60%" height="40%" />
    </div>  
    <span class="cartItemTitle">${title}</span>
    <span class="cart-hide-ID">${itemID}</span>
      </div>
      <span class="cart-item-price">${price}</span>
    <div class="cart-quantity">
      <input class="item-quantity-input" type="number" value="1"></input>
      <button class="remove-item" type="button"> REMOVE</button>      
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('item-quantity-input')[0].addEventListener('change', quantityChanged)
    var purchaseAll = document.getElementsByClassName('cart-content')[0].innerHTML
    localStorage.setItem('purchaseAll', purchaseAll);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-content')[0]
   var cartRows = cartItemContainer.getElementsByClassName('cart-item')
   var total = 0
   for (var i = 0; i < cartRows.length; i++) {
       var cartRow = cartRows[i]
       var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
       var quantityElement = cartRow.getElementsByClassName('item-quantity-input')[0]
       var price = parseFloat(priceElement.innerText.replace('£', ''))
       var quantity = quantityElement.value
       total = total + (price * quantity)
   // console.log(price)
   }
   total = Math.round(total * 100) / 100
   document.getElementsByClassName('cart-total')[0].innerText = '£' + total
}
