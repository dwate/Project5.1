
    var xhttp = new XMLHttpRequest();

           xhttp.onload = function() {
             if (this.readyState == 4 && this.status == 200) {
             var cameras = JSON.parse(this.responseText);
           
           var camID = '4';
 //  var camInfo = '';
     //   var camID = sessionStorage.getItem(camInfo);
          //    console.log(camInfo);
          var detOutput = '';
            
              {
             detOutput = '<div class="camDetails">' +
             '<h2>'+cameras[camID].name+'</h2>' +
             '<p><img src="' +cameras[camID].imageUrl+ '" alt="' +cameras[camID].name+ '" width="250"/></p>' +
             '<div><p>' +cameras[camID].description+ '</p>' +
             '<p>' +'£'+ +cameras[camID].price+ '</p>' +
             '<p>' +cameras[camID].lenses+ '</p>' +
             '<button>' +'Add to Cart'+ '</button></div>' +
             '</div>'
             console.log(camID);
            } 
           
            document.getElementById('cameras').innerHTML = detOutput;
           
            } 
          };

    xhttp.open("GET", "http://localhost:3000/api/cameras", true)
    xhttp.send();
   