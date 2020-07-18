const colorBtn = document.querySelector('.button1');
const bodyBg = document.querySelector('body');
const colors = new Array('red', 'yellow', 'green', 'blue', 'yellow', 'pink', 'orange', 'skyblue');
let area = document.getElementById('quote');
const quotes = new Array(
    'If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.',
    'The way to get started is to quit talking and begin doing.',
 'If life were predictable it would cease to be life, and be without flavor.',
  'Spread love everywhere you go. Let no one ever come to you without leaving happier', 
  'When you reach the end of your rope, tie a knot in it and hang on.',
  'Whoever is happy will make others happy too',
  'You will face many defeats in life, but never let yourself be defeated.',
  'Life is either a daring adventure or nothing at all.',
  "In the end, it's not the years in your life that count. It's the life in your years.",
  'The purpose of our lives is to be happy',
  'Success is not final; failure is not fatal: It is the courage to continue that counts',
  'Success usually comes to those who are too busy to be looking for it',
  'I find that the harder I work, the more luck I seem to have',
  'Try not to become a man of success. Rather become a man of value.'
  );
colorBtn.addEventListener('click', changeColor);

function myFunction(){
    let random = Math.floor(Math.random()*quotes.length);
    area.innerHTML = quotes[random];
}

function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBg.style.background = colors[random];
}