$(document).ready(function() {

// alert("Hello");
// console.log("Hello");


$( "#tabs" ).tabs();
var vp = new Object();
vp.health = 255;
//vp.emotion = 'happy';
vp.exp = 0;
vp.lvl = 1;
vp.evolved = false;

var time = 2.5;
var food = 50;
var meatFood = 25;
var fishFood = 50;
var sheepFood = 100;
var fireExp = 25;
var sheepExp = 50;
var dragonExp = 100;

if(vp.evolved == true){
	vp.emotion = 'EVhappy';


    
    
	

} else if (vp.evolved == false){
	vp.emotion = 'happy';

}
////////////////////////////////////////////////////////////////////////////////////////////    UPDATE     //////////////////////////////////////////////////////////////////////////////////

function update(){
	if(vp.health > 255){

		vp.health = 255;

	}


}


////////////////////////////////////////////////////////////////////////////////////////////    END     //////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////    HEALTH TIMER     //////////////////////////////////////////////////////////////////////////////////

var healthTimer = setInterval(
	function() {
	$('#vp-food-bar').css('width' , vp.health + 'px');

	if(vp.health >= 150){
		removeClasses();
        document.getElementById('vp-food-bar').style.backgroundColor = "#68B459";
		if(vp.evolved == false) {
		$('#vp').addClass('happy');
		} else {
		$('#vp').addClass('EVhappy');
		document.getElementById('vp').style.backgroundPosition = "0px 0px";
		}
	} else if (vp.health < 255 && vp.health > 100) {
		removeClasses();
        document.getElementById('vp-food-bar').style.backgroundColor = "#F77E4D";
		if(vp.evolved == false) {
		$('#vp').addClass('hungry');
		} else {
		$('#vp').addClass('EVhungry');
		document.getElementById('vp').style.backgroundPosition = "-350px 0px";
		}

	} else if (vp.health < 100 && vp.health > 50) {
		removeClasses();
        document.getElementById('vp-food-bar').style.backgroundColor = "#ed5657";
		if(vp.evolved == false) {
		$('#vp').addClass('mad');
		} else {
		$('#vp').addClass('EVmad');
		document.getElementById('vp').style.backgroundPosition = "-1050px 0";
		}
	} else if (vp.health < 0) {
		removeClasses();
		Dead();
	}
	
	

	vp.health = vp.health - time;
	update();
	document.getElementById("vp-lvl-display").innerHTML = vp.lvl;
	CheckEvolved()
	} , 1000
);

////////////////////////////////////////////////////////////////////////////////////////////    END     //////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////    FOOD     //////////////////////////////////////////////////////////////////////////////////
$('.training').draggable({
	opacity: 0.7, //makes draggable transparent
	helper: "clone" //makes a clone of draggable

	});

$('.food').draggable({
	opacity: 0.7, //makes draggable transparent
	helper: "clone" //makes a clone of draggable

	});

$('#vp').droppable({
	drop: function(event, ui){
		switch($(ui.draggable).attr('id')) {

			case 'meat': //if droppable is food
				if(vp.health < 0){
					alert("YOUR DRAGON IS DEAD");
				} else if(vp.health > 0){
					vp.health = vp.health + meatFood; //food = food + 1;
					update();
					CheckExp();
					console.log(vp.exp);
					break; //need a break with case, it is similar to if/else
			}

				case 'fish': //if droppable is food
					if(vp.health < 0){
					alert("YOUR DRAGON IS DEAD");
					} else if(vp.health > 0){
						vp.health = vp.health + fishFood; //food = food + 1;
						CheckExp();
						update();
						console.log(vp.exp);
						break; //need a break with case, it is similar to if/else
					}

					case 'sheep': //if droppable is food
						if(vp.health < 0){
						alert("YOUR DRAGON IS DEAD");
						} else if(vp.health > 0){
							vp.health = vp.health + sheepFood; //food = food + 1;
							CheckExp();
							update();
							console.log(vp.exp);
							break; //need a break with case, it is similar to if/else
						}

						case 'fire': //if droppable is food
							if(vp.health < 0){
							alert("YOUR DRAGON IS DEAD");
							} else if(vp.health > 0){
								vp.exp = vp.exp + fireExp;
								CheckExp();
								update();
								console.log(vp.exp);
								break; //need a break with case, it is similar to if/else
							}

							case 'killSheep': //if droppable is food
								if(vp.health < 0){
								alert("YOUR DRAGON IS DEAD");
								} else if(vp.health > 0){
									vp.exp = vp.exp + sheepExp;
									vp.health = vp.health - sheepExp;
									CheckExp();
									update();
									console.log(vp.exp);
									break; //need a break with case, it is similar to if/else
								}

								case 'fightDragon': //if droppable is food
									if(vp.health < 0){
									alert("YOUR DRAGON IS DEAD");
									} else if(vp.health > 0){
										vp.exp = vp.exp + dragonExp;
										vp.health = vp.health - dragonExp;
										CheckExp();
										update();
										console.log(vp.exp);
										break; //need a break with case, it is similar to if/else
									}




			}
	}
	});

////////////////////////////////////////////////////////////////////////////////////////////    END     //////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////    BUTTON TEST     //////////////////////////////////////////////////////////////////////////////////

$('#vp').addClass('happy');

$('#btn-mad').click(function(){
	removeClasses();
	$('#vp').addClass('mad');

	});

$('#btn-happy').click(function(){
	removeClasses();
	$('#vp').addClass('happy');

	});

$('#btn-sleepy').click(function(){
	removeClasses();
	$('#vp').addClass('sleepy');

	});

	$('#btn-dead').click(function(){
		removeClasses();
		$('#vp').addClass('dead');

		});

$('#btn-hungry').click(function(){
	removeClasses();
	$('#vp').addClass('hungry');
	vp.health = vp.health + food;
	});

////////////////////////////////////////////////////////////////////////////////////////////    END     //////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////    FUNCTIONS     //////////////////////////////////////////////////////////////////////////////////

function removeClasses() {
	$('#vp').removeClass();
	}

function Dead(){
	if(vp.evolved == false) {
		$('#vp').addClass('dead');
		} else {
		$('#vp').addClass('EVdead');
		document.getElementById('vp').style.backgroundPosition = "-1400px 0";
		}
	exp = 0;
	food = 0;
}

function CheckExp(){
	$('#vp-exp-bar').css('width' , vp.exp + 'px');
	if(vp.exp >= 255){
		vp.exp = 0;
		vp.lvl ++;
		console.log(vp.lvl);
	}

}

function CheckEvolved(){
	if(vp.lvl >= 2){
		vp.evolved = true;
		console.log(vp.evolved);
		//document.getElementById('vp').style.background = "url(../Virtual_Pet/img/evolved_vp_sprite.png) no-repeat";

		//object.style.background = "../img/evolved_vp_sprite.png";

	}
    
    
    

}

////////////////////////////////////////////////////////////////////////////////////////////    END     //////////////////////////////////////////////////////////////////////////////////




}); // end jQuery
