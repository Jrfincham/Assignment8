var head1 = $('.head1');

var sec1 = $('.sec1');

var head2 = $('.head2');

var sec2 = $('.sec2');

var head3 = $('.head3');

var sec3 = $('.sec3');

head1.on('click', function(){
  $(sec1).addClass('expand');
  $(sec2).removeClass('expand');
  $(sec3).removeClass('expand');
});

head2.on('click', function(){
  $(sec2).addClass('expand');
  $(sec1).removeClass('expand');
  $(sec3).removeClass('expand');
});

head3.on('click', function(){
  $(sec3).addClass('expand');
  $(sec1).removeClass('expand');
  $(sec2).removeClass('expand');
});
