// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let result;

//   if (feet <= 400) {
//     result = 'This one is on me!';
//   } else if (feet >= 2500) {
//     result = 'No can do.';
//   } else if (feet >= 2000) {
//     result = 'I will gladly take your thirty bucks.';
//   }

if (feet <= 400) {
  result = 'This one is on me!';
} 
if (feet > 2000){
  result = 'I will gladly take your thirty bucks.';
}
if (feet > 2500) {
  result = 'No can do.';
}
  return result;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  let manner;

  switch (tip) {
    case 'generous':
      manner = 'Thank you so much.';
      break;
    case 'not as generous':
      manner = 'Thank you.';
      break;
    default:
      manner = 'Bye.';
      break;
  }
  return manner;
}
