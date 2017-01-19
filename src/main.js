import {IMG_SKY, IMG_HORSE, IMG_TERRAIN, ANI_HORSE} from './enum';
let Phaser = require('phaser');

let game = new Phaser.Game(800, 600, Phaser.WEBGL_MULTI, 'happy-valley', {
    preload,
    create,
    update,
    render
});

function preload() {
    game.load.image(IMG_SKY, 'resources/sky.jpg');
    game.load.image(IMG_TERRAIN, 'resources/terrain.png');
    game.load.spritesheet(IMG_HORSE, 'resources/sprite-horse.png', 732/4, 536/4);
}
function create() {
    game.renderer.setTexturePriority([IMG_HORSE, IMG_SKY, IMG_TERRAIN]);

    // @TODO dynamic game world
    // game.world.resize(3000, 600);

    // sky
    // @TODO dynamic population of tiles
    let scale = 0.2,
        x = 0,
        y = -20,
        width = 800 / scale,
        height = 140;
    let sky = game.add.tileSprite(x, y, width, height, IMG_SKY);
    sky.tileScale.set(scale,scale);
    let skyBottom = height + y;

    // ground 
    // @TODO dynamic population of tiles
    game.add.tileSprite(x, skyBottom, game.world.width, game.world.height-skyBottom, IMG_TERRAIN);
    // @TODO camera

    let horse = game.add.sprite(300, 300, IMG_HORSE);
    horse.animations.add(ANI_HORSE);
    horse.animations.play(ANI_HORSE, 20, true);
    horse.scale.set(0.5);

    horse.addChild(game.make.text(horse.width/2, -20, "TESTING", {font: '28px sans-serif', fill: '#FFF'}));
}
function update() {
}
function render() {
}