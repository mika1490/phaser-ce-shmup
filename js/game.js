(Phaser => {
  console.log(Phaser);
  const GAME_WIDTH = 400;
  const GAME_HEIGHT = 400;
  const GAME_CONTAINER_ID = 'game';
  const INITIAL_MOVESPEED = 4;
  const GFX = 'gfx';
  let player;
  let cursors;

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, { preload, create, update });


  function preload() {
    game.load.spritesheet(GFX, '../assets/shmup-spritesheet-140x56-28x28-tile.png', 28, 28);

  };

  function create() {
    cursors = game.input.keyboard.createCursorKeys();
    player = game.add.sprite(100, 100, GFX, 8);
    player.moveSpeed = INITIAL_MOVESPEED;
  };
  function update() {
    //invokes the ship to move
    handlePlayerMovement();
  };

  //creates movement for the ship
  function handlePlayerMovement() {
    switch (true) {
      case cursors.left.isDown:
        player.x -= player.moveSpeed;
        break;
      case cursors.right.isDown:
        player.x += player.moveSpeed;
        break;
    }
    switch (true) {
      case cursors.down.isDown:
        player.y += player.moveSpeed;
        break;
      case cursors.up.isDown:
        player.y -= player.moveSpeed;
        break;
    }
  };

})(window.Phaser);