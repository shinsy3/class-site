function toggle() {
  var box = document.getElementById("box");
  box.classList.toggle("active");
}

$('.textbox').marquee({
	duration: 10000,
	gap: 50,
	delayBeforeStart: 0,
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  startVisible: true
});

$( function() {
   $( ".draggable" ).draggable();
 } );

 $( function() {
    $( ".drag" ).draggable();
  } );
