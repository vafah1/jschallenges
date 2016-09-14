/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 
//LA Kings Img
$('.left')
 	.prepend('<img src="http://1.bp.blogspot.com/-XI9itImxDj0/UCqfpFHqLvI/AAAAAAAAPIY/ZmoX3gKVH40/s1600/BrianBrideau-LAlogo(2SilverShades).png" width = "300px" height = "300px" />');

//NJ Devils Img
$('.right')
 	.prepend('<img src="https://s-media-cache-ak0.pinimg.com/236x/04/14/66/04146629bc7d6b6a6977e2ab236b3ef4.jpg" width = "250px" height = "250px" />');


//variables which will be needed for incrementation
var i = 0
var sto = 0 //shots team one...used for reset button
var stt = 0 //shots team two...used for reset button
var nhto = 0 //num hits team one 
var nhtt = 0 //num hits team two

function shot() {
        return Math.random();
    };



 $(function(){
 	$('#teamone-shoot').on("click", function(){
 		
 		//increments num of shots when T1 user clicks shoot button
 		sto++
 		$('#teamone-numshots').text(sto);  
 		
 		//Gives T1 user 20% chance of scoring a goal and 
 		//increments numHits when goal scored as well a changes 
 		//background color when goal scored
 		
 		if (shot() > .80) {
 			nhto++
 			$('#teamone-numhits').text(nhto);
 			$('body').css("background-color", "gray");
 		}else{
 			$('body').css("background-color", "white");
 		
 		}

 	})
 })

 $(function(){
 	$('#teamtwo-shoot').on("click", function(){

 		//increments num of shots when T2 user clicks shoot button
 		stt++
		$('#teamtwo-numshots').text(stt);

		//Gives T2 user 20% chance of scoring a goal and 
 		//increments numHits when goal scored as well as changes 
 		//background color when goal scored
 		if (shot() > .80) {
 			nhtt++
 			$('#teamtwo-numhits').text(nhtt);
 			$('body').css("background-color", "red");
 		}else{
 			$('body').css("background-color", "white");
 		
 		}
 	})
 })

/** resets team values to zero when reset button is engaged,
  while still tracking number of times user reset the game
**/  
 $(function(){
 	$('#reset').on("click", function(){
 		i++
 		sto = 0;
 		stt = 0;
 		nhto = 0;
 		nhtt = 0;
 		$('#num-resets').text(i);
 		$('#teamone-numshots').text(0);
 		$('#teamone-numhits').text(0);
 		$('#teamtwo-numshots').text(0);
 		$('#teamtwo-numhits').text(0);
 		
 		
 	 })

 })