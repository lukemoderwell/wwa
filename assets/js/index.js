// DOM
const appBg = document.getElementsByClassName('app-background')[0];
const appBgImg = document.getElementsByClassName('app-background-image')[0];
const body = document.getElementsByTagName('body')[0];

document.addEventListener('scroll', function() {
  console.log(window.scrollY);
  
  if (window.scrollY < 200 ) {
    body.classList.remove('theme-dark');
    appBg.style.backgroundColor = `whitesmoke`;
    appBgImg.style.opacity = `0`;
    appBgImg.style.backgroundImage = 
      `url('https://images.unsplash.com/photo-1491821893533-80f535044695?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a57657772157dd7a5a6fb827ab9fba23&auto=format&fit=crop&w=934&q=80')`;
  }

  if (window.scrollY > 200 ) {
    body.classList.add('theme-dark');
    appBg.style.backgroundColor = `black`;
    appBgImg.style.opacity = `.3`;
    appBgImg.style.backgroundImage = 
      `url('https://images.unsplash.com/photo-1491821893533-80f535044695?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a57657772157dd7a5a6fb827ab9fba23&auto=format&fit=crop&w=934&q=80')`;
  }
})
  
