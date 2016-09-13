$(function(){

$('h1').on('click', function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(this).css('color', 'black')
        } else {
            $(this).attr('data-click-state', 1)
            $(this).css('color', 'red')
        }
    });

$("h5:odd").hide();



$('p').not("aside p").text(function(i,val){
    	return val.replace("Bacon", "LASER VISION");
	});

$('.post').slice(-2).hide();
$("aside, aside *").hide();

	//all your code should go here

})