const submitButton = document.getElementById("submitOrder");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const address = document.getElementById("address");
const city = document.getElementById("acity");
const email = document.getElementById("emailadd");
const _id = '5be1ed3f1c9d44000030b061';
 const responseMessage = document.getElementById('response-message');
// const responseTitle = document.getElementById('response-title');
// const responseId = document.getElementById('response-id');
// const responseContent = document.getElementById('response-content');


submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    const post = {
        firstName: fname.value,
        lastName: lname.value,
        address: address.value,
        city: city.value,
        email: email.value,
        _id: '5be1ed3f1c9d44000030b061'

    };
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
        responseMessage.textContent = response.message;
    //    responseTitle.textContent = response.post.title;
   //     responseId.textContent = response.post.id;
   //     responseContent.textContent = response.post.content;
    } catch (errorResponse) {
        responseMessage.textContent = errorResponse.error;
    }
} 

