let Phaser = require('phaser');

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload,
    create,
    update
});

function preload() {
    game.load.image('sky', 'resources/sky.jpg');
    game.load.spritesheet('horse', 'resources/sprite-horse.gif');
}
function create() {
    game.add.sprite(0, 0, 'sky');
}
function update() {
}