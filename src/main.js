let config = {
  type: Phaser.CANVAS,
  parent: "phaser-game",
  scale: {
    parent: "phaser-game",
    mode: Phaser.Scale.NO_SCALE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: "100%",
    height: "100%",
    zoom: 1,
  },
  transparent: true,
  pixelArt: false,
  physics: {
    default: "arcade",
    arcade: {},
  },
  plugins: {},
  zoom: 1,
  scene: [HomeScene],
};

let game = new Phaser.Game(config);
