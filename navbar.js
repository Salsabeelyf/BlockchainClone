function changeDropdownParent(mediaQuery){
  if(mediaQuery.matches){
    $('#dropdownContainer').appendTo(".dropdown");
  }else{
    $('#dropdownContainer').appendTo("#rightNavSection");
  }
}

$(function () {
  // Create a MediaQueryList object
  var mediaQuery = window.matchMedia("(min-width: 1200px)")

  // Attach listener function on state changes
  mediaQuery.addEventListener("change", function() {
    changeDropdownParent(mediaQuery);
  });

  changeDropdownParent(mediaQuery);
  $("#dropdownContainer").load("dropdownMenu.html");
  $(".dropdown").on("click", function(){
    $(".dropdown").focus();
  });
  $(".dropdown").on("mouseenter",function () {
    $('#dropdownContainer').addClass('show');
  }).on("mouseleave",function () {
    $('#dropdownContainer').removeClass('show');
  });
  $(".dropdown").on("focus",function () {
    $('#dropdownContainer').addClass('show');
  }).on("focusout",function () {
    $('#dropdownContainer').removeClass('show');
  });

  $('.navbar-toggler').click(function () {
    if(!$('#dropdownContainer').hasClass('showSmall')){
      $('#dropdownContainer').addClass('showSmall');
    }
  else {
      $('#dropdownContainer').removeClass('showSmall');
    }
  });
});
