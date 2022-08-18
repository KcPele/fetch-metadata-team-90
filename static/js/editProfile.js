
$(document).ready(function(){

  $("input[type=file]").change(function () {
    let file = $("input[type=file]").get(0).files[0];
    
          if(file){
              let reader = new FileReader();
   
              reader.onload = function(){
                  $(".image").attr("src", reader.result);
              }
   
              reader.readAsDataURL(file);
          }
  })
  
  })

  



