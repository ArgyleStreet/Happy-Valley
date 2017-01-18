var webpack = require('webpack');
var path = require('path'),
    phaserModule = path.join(__dirname, '/node_modules/phaser-ce/'),
    phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
    pixi = path.join(phaserModule, 'build/custom/pixi.js'),
    p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    "entry": {
        "app": "./src/main",
        "vendor": ["pixi", "p2", "phaser"]
    },
    "output": {
        "path": "./build/",
        "filename": "bundle.js"
    },
    "plugins": [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    ],
    "module": {
        "loaders": [
            {
                "test": /\.jsx?$/,
                "exclude": /(node_modules|lib)/,
                "loader": "babel-loader",
                "query": {
                    "plugins": ["transform-runtime"],
                    "presets": ["es2015"],
                }
            },
            {
                "test": /pixi\.js/,
                "loader": "expose?PIXI"
            },
            {
                "test": /phaser-split\.js$/,
                "loader": "expose?Phaser"
            },
            {
                "test": /p2\.js/,
                "loader": "expose?p2"
            }
        ]
    },
    "resolve": {
        "alias": {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    }
};