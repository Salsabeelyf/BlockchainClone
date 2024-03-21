function changeDropdownParent(mediaQuery){
  if(mediaQuery.matches){
    console.log("large");
    $('#dropdownContainer').appendTo(".dropdown");
  }else{
    console.log("small");
    $('#dropdownContainer').appendTo("#rightNavSection");
  }
}

$(function () {
  // Create a MediaQueryList object
  var mediaQuery = window.matchMedia("(min-width: 992px)")

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
