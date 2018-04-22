// Write your code in this file!
function scuberGreetingForFeet(feet) {

 if (feet <= 400) {
   return 'This one is on me!'}

  else if (feet >= 2500) {
     return 'No can do.'
  }
  else if (feet >= 2000) {
     return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city) {
  let reply;
  switch (city) {
    case city = 'NYC':
        reply = 'Ok, sounds good.';
        break;
    default:
      reply = 'No go.'
      break;
  }
  return reply
}

function switchOnCharmFromTip(tipsize) {
  let reply;
  switch (tipsize) {
    case tipsize = 'generous':
        reply = 'Thank you so much.';
        break;
    case tipsize = 'not as generous':
    reply = 'Thank you.';
    break;
    default:
      reply = 'Bye.'
      break;
  }
  return reply
}

//   describe('switchOnCharmFromTip()', function () {
//     it('should return "Thank you so much." if the tip is generous', function () {
//       expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//     });
//
//     it('should return "Thank you." if the tip is not as generous', function () {
//       expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//     });
//
//     it('should return "Bye." if anything else', function () {
//       expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//     });
//   });
// });
