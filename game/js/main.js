var bootState = require( "./states/boot" );
var gameState = require( "./states/game" );
var loadState = require( "./states/load" );

// startup options
var FULLSCREEN = false;
var WIDTH = FULLSCREEN ? window.innerWidth * window.devicePixelRatio : 800,
    HEIGHT = FULLSCREEN ? window.innerHeight * window.devicePixelRatio : 600;

function startGame( phaser ) {

  // initialize the game
  window.game = new phaser.Game( WIDTH, HEIGHT, Phaser.AUTO, 'game-container' );

  // add states
  game.state.add( "boot", bootState() );
  game.state.add( "load", loadState() );
  game.state.add( "game", gameState() );

  game.state.start( "boot" );
  
}

(function checkPhaserExists( phaser ) {
  if ( phaser ) { 

    console.log( "Phaser runtime initialized, starting...")
    startGame( phaser );

  } else {
    setTimeout( function() { checkPhaserExists( window.Phaser ) }, 100 );
  }
})( window.Phaser );