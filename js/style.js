$(document).ready(function() {
  let img = $('.cm');
  let len = img.length;
  let i = 1; 
  setInterval(function(){
    img.hide();
    img.eq(i).show();
    i++;
    if (i >= len) i = 0; 
  }, 5000);
});