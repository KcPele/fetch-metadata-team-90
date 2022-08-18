// closing of alert

$(document).ready(function(){
  function setDark() {
    $("input, textarea, .head-section,  .upload-container,.result-container,.getting-in, .right-side, .profile-search").css("background-color", "#303233")
    $("body, .first, .container, .start-btn, .popup, .loader-wrapper, .loader, .loader-wrapper, .loader-section, .history-data, .faq, .section-container, .main-flow-flex").css("background-color", "#1f1f1f")
    $(".container, .popup, input").css("color", "white")
   
  }
  function unSetDark () {
    $("input, textarea, .head-section, .upload-container, .result-container, .getting-in, .right-side, .profile-search").css("background-color", "#fafafa")
    $("body, .first, .container, .popup, .start-btn, .loader, .loader-wrapper, .loader-section, .history-data, .faq, .section-container, .main-flow-flex").css("background-color", "white")
    $("input[type=submit]").css("background-color", "rgba(86, 204, 242, 1)")
  }
  let isDark = JSON.parse(localStorage.getItem("isDark"))
  $('#toggleTheme').prop("checked", isDark)
  if(isDark === true){
    setDark()
 } else {
  unSetDark()
 }
  $("#toggleTheme").change(function(){
  let isChecked = $('#toggleTheme').is(':checked');
  console.log(isDark)
    if(isChecked === true){
       setDark()
    } else  {
      unSetDark()
    }
      localStorage.setItem("isDark", JSON.stringify(isChecked))
  });

  $("input[type=submit]").click(function() {
      $(".spinner").css("display", "block")
      console.log("click a button")
  })

});



setTimeout(function () {
  document.getElementById("alert").style.display = "none";
}, 6000);

