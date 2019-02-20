//scroll to navigation easing
$(document).ready(function() {
    // scroll to history 01
    $('#history').click(function(){
      $('html, body').animate({scrollTop: $('#history-section').offset().top}, 'slow', 'swing');
    });
    // scroll to history 01
    $('#history2').click(function(){
      $('html, body').animate({scrollTop: $('#history-section').offset().top}, 'slow', 'swing');
    });
    //scroll to team 02 bottom
     $('#team').click(function(){
       $('html, body').animate({scrollTop: $('#team-section').offset().top}, 'slow', 'swing');
     });
     //scroll to team 02 bottom
     $('#team2').click(function(){
       $('html, body').animate({scrollTop: $('#team-section').offset().top}, 'slow', 'swing');
     });
});
