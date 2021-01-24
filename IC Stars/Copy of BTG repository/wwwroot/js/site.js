// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
//Feedback Page Emoji
$('.label-emoji').click(function() {
    $('.label-emoji').addClass('inactive');
    $(this).removeClass('inactive');
  });
  
  // Init tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

