class WWA {
  constructor() {
    // Colors
    this.salmon = `#F19AA2`;
    this.tomato = `#ED5342`;
    this.baby = `#A2C8E8`;
    this.cream = `#EDE2D2`;
    
    // Content
    this.bgImg = `url('https://images.unsplash.com/photo-1491821893533-80f535044695?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a57657772157dd7a5a6fb827ab9fba23&auto=format&fit=crop&w=934&q=80')`;

    // DOM
    this.appBg = document.getElementsByClassName('app-background')[0];
    this.appBgImg = document.getElementsByClassName('app-background-image')[0];
    this.body = document.getElementsByTagName('body')[0];
  }

  static toggleBgOpacity() {
    let o = this.appBg.style.opacity;
    o === '1' ? o = '0' : ''
  }

  handleScrollUp() {
    if (window.scrollY < 200 ) {
      body.classList.remove('theme-dark');
      appBg.style.backgroundColor = cream;
      this.toggleBgOpacity();
    }

    if (window.scrollY > 600 ) {
      body.classList.add('theme-dark');
      appBg.style.backgroundColor = tomato;
      this.toggleBgOpacity();
    }
  }
  
  addScrollListener() {
    document.addEventListener('scroll', function() {
      console.log(window.scrollY);
      this.handleScrollUp();
    })
  }

  test() {
    console.log(this.cream + ' is cream');
  }

  init() {
    this.appBg.style.backgroundColor = this.cream;
    this.appBgImg.style.backgroundImage = this.bgImg;
    this.appBgImg.style.opacity = `1`;

    this.addScrollListener();
  }
}

const w = new WWA;
w.init();
