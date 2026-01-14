class HomeScene extends Phaser.Scene {
  constructor() {
    super("HomeScene");
    //do rest
  }
  init() {}
  preload() {}
  create() {
    let { width, height } = this.sys.game.canvas;

    this.MyRectangle = this.add.rectangle(
      0,
      0,
      width / 2,
      height / 5,
      0xff0000
    );
    this.MyRectangle.setOrigin(0, 0);
    this.MyRectangle2 = this.add.rectangle(
      width,
      0,
      width / 2,
      height / 5,
      0x00ff00
    );
    this.MyRectangle2.setOrigin(1, 0);
  }
  update(_time, _delta) {
    if (_time > 200 && _time < 1400) {
      this.MyRectangle.x -= 1 * _delta;
    }
  }
}
