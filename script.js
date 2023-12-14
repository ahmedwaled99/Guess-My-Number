 'use strict';

*console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = 'Correct Number !🎉';
 document.querySelector('.number').textContent = 16;
 document.querySelector('.score').textContent = 17;
 document.querySelector('.guess').value = 23;
 console.log((document.querySelector('.guess').value = 23));*/

 let secrectNumber = Math.trunc(Math.random() * 20) + 1;
 let score = 20;
 let highscore = 0;
 const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
 };
 document.querySelector('.check').addEventListener('click', function () {
   const x = Number(document.querySelector('.guess').value);
   console.log(x);
   if (!x) {
     displayMessage('No Number !');
     document.querySelector('.message').textContent = 'No Number !';
   } else if (x === secrectNumber) {
     displayMessage('Correct Number ! 🎉');
     document.querySelector('.message').textContent = 'Correct Number ! 🎉';
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem ';
     document.querySelector('.number').textContent = secrectNumber;
     if (score > highscore) {
       highscore = score;
       document.querySelector('.highscore').textContent = highscore;
     }
   } else if (x !== secrectNumber) {
     displayMessage(x > secrectNumber ? 'Too High ' : 'Too Low ');
     document.querySelector('.message').textContent =
     x > secrectNumber ? 'Too High ' : 'Too Low ';
     score = score - 1;
     document.querySelector('.score').textContent = score;
   } else {
     displayMessage('You lose the game ! ');
     document.querySelector('.message').textContent = 'You lose the game ! ';
     document.querySelector('.score').textContent = 0;
   }

   /*else if (x > secrectNumber) {
     if (score > 1) {
       document.querySelector('.message').textContent = 'Too High ';
       score = score - 1;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You lose the game ! ';
       document.querySelector('.score').textContent = '0 ';
     }
   } else if (x < secrectNumber) {
     if (score > 1) {
       document.querySelector('.message').textContent = 'Too Low ';
       score = score - 1;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You lose the game ! ';
       document.querySelector('.score').textContent = '0 ';
     }
   }*/
 });

 document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   secrectNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem ';
   document.querySelector('.score').textContent = score;
   displayMessage('Start guessing... ');
   document.querySelector('.message').textContent = 'Start guessing... ';
   document.querySelector('.number').textContent = '? ';
   document.querySelector('.guess').value = '';
});
