// Write your code in this file!

function scuberGreetingForFeet(int){
	if(int <= 400){
		return 'This one is on me!';
	} else if (int >= 2000 && int <= 2500){
		return 'I will gladly take your thirty bucks.';
	}else if (int > 2500){
		return 'No can do.';
	}
}


function ternaryCheckCity(str){
	let toReturn; 
	switch(str) {
    case 'NYC':
        toReturn = 'Ok, sounds good.'
        break;
    default:
    	toReturn = 'No go.'
	}
	return toReturn;
}

function switchOnCharmFromTip(str){
	let toReturn; 
	switch(str) {
    case 'generous':
        toReturn = 'Thank you so much.'
        break;
    case 'not as generous':
        toReturn = 'Thank you.'
        break;
    default:
    	toReturn = 'Bye.'
	}
	return toReturn;
}