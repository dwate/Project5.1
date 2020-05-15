// loadJson('http://localhost:3000/api/cameras');


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(xhttp.responseText);
           var response = JSON.parse(xhttp.responseText);
          // document.getElementById("demo").innerHTML = xhttp.responseText;
       //var output = '';
       //for(var i = 0;i < cameras.length; i++) {
         //  output += '<li>' +name[i].
     //  }
        }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras", true);
    xhttp.send();
