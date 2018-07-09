const appBg = document.getElementsByClassName('app-background')[0];

document.addEventListener('scroll', function() {
  console.log(window.scrollY);
  switch (window.scrollY > 0) {
    case true:
      appBg.style.backgroundColor = `blue`;
      break;
    case false:
      appBg.style.backgroundColor = `red`;
      break;
    default:
      break;
  }
})
  
