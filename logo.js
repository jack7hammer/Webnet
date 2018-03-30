$(document).ready(function(){
	$(".toggle").click(function(){
		$(".sidebarmenu").addClass("showmenu");
		$(".toggle").addClass("opacity_zero");
		$("#ob").addClass("blurit")
	});
     
	$(".cross").click(function(){
		$(".sidebarmenu").removeClass("showmenu");
		$(".toggle").removeClass("opacity_zero");
		$("#ob").removeClass("blurit");
	});

	$("#ob").click(function(){
		$(".sidebarmenu").removeClass("showmenu");
		$(".toggle").removeClass("opacity_zero");
		$("#ob").removeClass("blurit");

	});

	$("#ob").scroll(function(){
		$(".sidebarmenu").removeClass("showmenu");
		$(".toggle").removeClass("opacity_zero");
		$("#ob").removeClass("blurit");
	});
	$(".navitem").click(function(){
		$(".sidebarmenu").removeClass("showmenu");
		$(".toggle").removeClass("opacity_zero");
		$("#ob").removeClass("blurit");        
	});
	$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
    
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
        
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });


});







