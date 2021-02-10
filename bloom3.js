window.onload = function myFunction() {
  var x = document.createElement("FORM");
  x.setAttribute("id", "myForm");
  x.setAttribute("method","get");
  x.setAttribute("action", "https://httpbin.org/get");
  document.body.appendChild(x);
 
 var mybr = document.createElement('br');



  var y = document.createElement("INPUT");
  y.setAttribute("id", "Username");
  y.setAttribute("type", "text");
  y.setAttribute("name", "uname");

  var pass = document.createElement("INPUT");
  pass.setAttribute("id", "password");
  pass.setAttribute("type", "text");
  pass.setAttribute("name", "pwd");
  //y.setAttribute("value", "Donald Duck Truck");

  var z = document.createElement("LABEL");
  var p = document.createTextNode("User name: ");
  z.setAttribute("for","Username");
  z.appendChild(p);

  var e = document.createElement("LABEL");
  var q = document.createTextNode("Password: ");
  e.setAttribute("for","password");
  e.appendChild(q);

  var btn = document.createElement("INPUT");
  btn.setAttribute("type", "submit");
  btn.setAttribute("Value", "Log In");

  document.getElementById("myForm").appendChild(z);
  document.getElementById("myForm").appendChild(y);

	document.getElementById("myForm").appendChild(mybr.cloneNode());

  document.getElementById("myForm").appendChild(e);
  document.getElementById("myForm").appendChild(pass);
	
	document.getElementById("myForm").appendChild(mybr.cloneNode());

  document.getElementById("myForm").appendChild(btn);

  


  // document.getElementById("Username").htmlFor = "Username here";
};
