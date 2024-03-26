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
  $("#searchPopupPlaceHolder").load("searchPopup.html #searchPopup");
  $(".dropdown").on("click", function(){
    $(".dropdown").focus();
  });

  // Show/hide dropdown when hovering over the dropdown button
  $(".dropdown").on("mouseenter",function () {
    $('#dropdownContainer').addClass('show');
  }).on("mouseleave",function () {
    $('#dropdownContainer').removeClass('show');
  });

  // Show/hide dropdown when focusing on the dropdown button
  $(".dropdown").on("focus",function () {
    $('#dropdownContainer').addClass('show');
    $('#dropdownContainer').addClass('focused');
  }).on("focusout",function () {
    if(!$('#dropdownContainer').hasClass('focused')){
      $('#dropdownContainer').removeClass('show');
    }
  });

  // Show/hide dropdown when clicking over the toggler button
  $('.navbar-toggler').click(function () {
    $('#dropdownContainer').toggleClass('showSmall');
  });

  $('#dropdownContainer').hover(function(){
    if($(this).hasClass('showSmall')){
      $('.navbar-toggler svg').addClass('focused');
    }
  }, function(){
    if($(this).hasClass('showSmall')){
      $('.navbar-toggler svg').removeClass('focused');
    }
  });

  $('#dropdownContainer').on('click',function () {
      if(!$('#dropdownContainer').hasClass('focused')){
        $('#dropdownContainer').addClass('focused');
      }
  });

  $('#searchBtn').on('click',function(){
    $('#searchPopup').addClass('show');
  });

  $(document).on('click',function(event){
      var target = $(event.target);
      if(!$(target).closest('#searchPopup').length && !$(target).closest('#searchBtn').length && $('#searchPopup').hasClass('show')){
        $('#searchPopup').removeClass('show');
      }
      if(!$(target).closest('#dropdownContainer').length && !$(target).closest('.navbar-toggler').length && $('#dropdownContainer').hasClass('showSmall')){
        $('#dropdownContainer').removeClass('showSmall');
      }
  });
});
