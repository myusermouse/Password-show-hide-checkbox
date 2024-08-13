let passInput = document.querySelector('#password'),
    checkBox = document.querySelector('#check');
          
       checkBox.onchange = function(e){
       passInput.type = checkBox.checked ? "text" : "password";
   };