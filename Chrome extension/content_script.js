(function(){
var headID = document.getElementsByTagName("head")[0];         
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = '/ref.js';

//~ setTimeout(function(){
headID.appendChild(newScript)
//~ },500)
})()
