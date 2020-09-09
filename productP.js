
   function moreInfo(camInfo) {
    console.log(camInfo);
    localStorage.setItem('camNum', camInfo);
    //   window.open("ProductPage.html", self);
    var camID = localStorage.getItem('camNum');
    var quantAll = localStorage.getItem('quantTally'); 
    var quantTT = quantAll.replace(/,/g, '');
    var quantTitems = document.getElementsByClassName('item-quantity-input')
          for (i =0 ; i < quantTitems.length; i++) {
              quantTitems[i].value = quantTT[i]
          }
   // console.log(camNumber)

    var xhttp = new XMLHttpRequest();

           xhttp.onload = function() {
             if (this.readyState == 4 && this.status == 200) {
             var cameras = JSON.parse(this.responseText);
             var camID = camInfo;
        //     var camInfo = 3;
           
  
    //    var camID = sessionStorage.getItem(camInfo);
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
             console.log(detOutput);
            
            } 
         
           // document.getElementById('moreInfoCameras').innerHTML = detOutput;
           
            } 
          };

    xhttp.open("GET", "http://localhost:3000/api/cameras", true)
    xhttp.send();
}

    

    