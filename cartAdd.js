var removeCartItemButtons = document.getElementsByClassName('remove-item')
 console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var buttonRemove = removeCartItemButtons[i]
  buttonRemove.addEventListener('click', function(event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      updateCartTotal()
      console.log(buttonRemove)
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item-display')[0]
   var cartRows = cartItemContainer.getElementsByClassName('cart-item')
   for (var i = 0; i < cartRows.length; i++) {
       var cartRow = cartRows[i]
       var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
       var quantityElement = cartRow.getElementsByClassName('item-quantity-input')[0]
       console.log(cartRows)
   }
}