class WWA {
  constructor() {
    // Colors
    this.salmon = `#F19AA2`;
    this.tomato = `#ED5342`;
    this.baby = `#A2C8E8`;
    this.cream = `#EDE2D2`;

    // DOM
    this.appBg = document.getElementsByClassName('app-background')[0];
    this.appBgImg = document.getElementsByClassName('app-background-image')[0];
  }

  handleScroll() {
    console.log(window.scrollY);
  }

  handleBgImgTransition() {
  this.appBgImg.style.backgroundImage = `url('https://images.unsplash.com/photo-1495609000883-209fc68187ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b458c2eac6957535ddfb4b18372e941c&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb')`;
    this.appBgImg.style.opacity = '.25';
  }

  init() {
    document.addEventListener('scroll', this.handleScroll);
  }
}

const w = new WWA;
w.init();
