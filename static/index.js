

var beasts = ['penguin1', 'penguin2', 'penguin3', 'penguin4', 'penguin5', 'penguin6', 'penguin7', 'penguin8', 'yeti']

var score = localStorage.getItem('score') || 0
var lives = localStorage.getItem('lives') || 3

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

var render = function(array){
	shuffleArray(array)
	for(i=0; i<array.length; i++){
		$('#title').after(`<div class='${beasts[i]}'></div>`)
	}
}

$(document).ready( function() {
	
	render(beasts)
	
	console.log('score', score)


	$("#score").html("Score: " +score);
	$("#lives").html("Lives: " +lives);
	

	$(".penguin1").mousedown(function() {
		score = score + 1
		alert("Hello, I am #1!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin2").mousedown(function() {
		score = score + 1
		alert("Hello, I am #2!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin3").mousedown(function() {
		score = score + 1
		alert("Hello, I am #3!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin4").mousedown(function() {
		score = score + 1
		alert("Hello, I am #4!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin5").mousedown(function() {
		score = score + 1
		alert("Hello, I am #5!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin6").mousedown(function() {
		score = score + 1
		alert("Hello, I am #6!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin7").mousedown(function() {
		score = score + 1
		alert("Hello, I am #7!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".penguin8").mousedown(function() {
		score = score + 1
		alert("Hello, I am #8!!");
    	// setTimeout(function(){ location.reload(); }, 2000);
    });

	$(".yeti").mousedown(function() {
		alert("Yaaaarrrr!");
		lives = lives - 1
		localStorage.setItem('score', score) // score is a string
		localStorage.setItem('lives', lives) // break with lives=0
		// if lives == 0, than end the game and display the final score
		setTimeout(function(){ location.reload(score, lives); }, 2000);
	});

	


});
