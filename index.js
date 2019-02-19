$(document).ready(function() {
    // scroll history 01
    $('#history').click(function(){
      $('html, body').animate({scrollTop: $('#history-section').offset().top}, 'slow', 'swing');
    });
    $('#history2').click(function(){
      $('html, body').animate({scrollTop: $('#history-section').offset().top}, 'slow', 'swing');
    });
    //scroll team 02
     $('#team').click(function(){
       $('html, body').animate({scrollTop: $('#team-section').offset().top}, 'slow', 'swing');
     });
     $('#team2').click(function(){
       $('html, body').animate({scrollTop: $('#team-section').offset().top}, 'slow', 'swing');
     });
});
