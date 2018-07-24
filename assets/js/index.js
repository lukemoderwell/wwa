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

  init() {
    this.appBg.style.backgroundColor = this.cream;
  }
}

const w = new WWA;
w.init();
