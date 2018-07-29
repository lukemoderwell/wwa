class WWA {
  constructor() {
    // Colors
    this.colors = {
      "salmon": "#F19AA2",
      "cream": "#EDE2D2",
      "black": "#1A1A1A"
    }

    // DOM
    this.appBg = undefined;
    this.appBgImg = undefined;
  }

  handleScroll() {
    const bg = document.getElementsByClassName('app-background')[0];
    const bgImg = document.getElementsByClassName('app-background-image')[0];
    console.log(window.scrollY);
    if (window.scrollY > 600) {
      bgImg.style.opacity = 0;
      bg.style.background = this.colors.cream;
      
    } else {
      bgImg.style.opacity = `.5`;
    }
  }

  init() {
    this.appBg = document.getElementsByClassName('app-background')[0];
    this.appBgImg = document.getElementsByClassName('app-background-image')[0];
    this.appBgImg.style.opacity = `.5`;
    window.addEventListener('scroll', this.handleScroll);
  }
}

const w = new WWA;
w.init();
