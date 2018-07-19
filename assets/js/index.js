// Colors
const salmon = `#F19AA2`;
const tomato = `#ED5342`;
const baby = `#A2C8E8`;
const gray = `#3A3132`;
const black = `#131212`;
const cream = `#EDE2D2`;
const white = `#FFFAF2`;

bgImg = `url('https://images.unsplash.com/photo-1491821893533-80f535044695?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a57657772157dd7a5a6fb827ab9fba23&auto=format&fit=crop&w=934&q=80')`;


// DOM
const appBg = document.getElementsByClassName('app-background')[0];
const appBgImg = document.getElementsByClassName('app-background-image')[0];
const body = document.getElementsByTagName('body')[0];

function init() {
  appBg.style.backgroundColor = cream;
  appBgImg.style.backgroundImage = bgImg;
  appBgImg.style.opacity = `0`;
}


document.addEventListener('scroll', function() {
  console.log(window.scrollY);
  
  if (window.scrollY < 200 ) {
    body.classList.remove('theme-dark');
    appBg.style.backgroundColor = cream;
  }

  if (window.scrollY > 600 ) {
    body.classList.add('theme-dark');
    appBg.style.backgroundColor = tomato;
  }
})
  
init();
