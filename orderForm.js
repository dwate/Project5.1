//Order Review and Delivery Form

//Get DOM Elements for Form
const submitButton = document.getElementById("submitOrder");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const address = document.getElementById("address");
const city = document.getElementById("acity");
const email = document.getElementById("emailadd");
const _id = document.getElementsByClassName("cart-hide-ID");
const responseMessage = document.getElementById('response-message');



submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();

    //Form Validation

//Check for Items in the Cart
var purchaseAll = document.getElementsByClassName('cart-content')[0].innerHTML
var fNameID = document.getElementById("fname")
var orderForm= document.forms["sendOrder"].length;
var firstName = document.forms["sendOrder"]["fname"].value;
var lastName = document.forms["sendOrder"]["lname"].value;
var custAddress = document.forms["sendOrder"]["address"].value;
var custCity = document.forms["sendOrder"]["acity"].value;
var custEmail = document.forms["sendOrder"]["emailadd"].value;   
if (purchaseAll.length < 6 ) {
         //   console.log(purchaseAll)
            alert('You have removed all of the items from the cart.');
            return;
      }  else {   


if (firstName == "" || lastName == "" || custAddress == "" || custCity == "" || custEmail == "") {
    alert("Please fill in Required Details")
  
    return false;
        }
       }


//Grab Product IDs
var productArray = []
for (var i = 0; i < _id.length; i++) {
  const prodID = productArray.push(_id[i].innerText)         
  }

//Creates Post data to be sent to database
    const post = {
        contact:{firstName: fname.value, lastName: lname.value, address: address.value, city: city.value, email: email.value},
        products: productArray
       
             /* contact: {
            *   firstName: string,
            *   lastName: string,
            *   address: string,
            *   city: string,
            *   email: string
            * } 5be1ed3f1c9d44000030b061
            * products: [string] <-- array of product _id */
        
    };
   //   console.log(post.products)  
  //    console.log(post.contact)
    submitOrderData(post)
});

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/api/cameras' + '/order');
            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    if (request.status === 201) {

        resolve(JSON.parse(request.response));
                    } else {
        reject(JSON.parse(request.response));
                    }
                }
            };
            request.setRequestHeader('Content-Type', 'application/json');
           request.send(JSON.stringify(data));
    });
}

async function submitOrderData(post) {
    try {
        const requestPromise = makeRequest(post);
        const response = await requestPromise;
        responseMessage.textContent = response.orderId;
        localStorage.setItem('orderId', response.orderId);
        localStorage.setItem('custFName', response.contact.firstName);
        localStorage.setItem('custLName', response.contact.lastName);
        localStorage.setItem('custAddress', response.contact.address);
        localStorage.setItem('custCity', response.contact.city);
        localStorage.setItem('custEmail', response.contact.email);
        
        var productsOrdered = response.products;
        var cameraOrdered = []
        for (var i = 0; i < productsOrdered.length; i++) {
            const prodOrdered = cameraOrdered.push(productsOrdered[i].name)         
           }
           localStorage.setItem('products', cameraOrdered);
       // console.log(response.contact)
       //  console.log(productsOrdered[0].name) 
       // console.log(cameraOrdered)
       
   //   window.open("OrderComplete.html", self);
    //    responseTitle.textContent = response.post.title;
   //     responseId.textContent = response.post.id;
   //     responseContent.textContent = response.post.content;
    } catch (errorResponse) {
        responseMessage.textContent = errorResponse.error;
    }  window.location.replace("OrderComplete.html", self); 
} 

