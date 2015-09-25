// methods to handle clients requests for movement/attack/evolutions/ etc.
Meteor.methods({
  "move": function(cubeId, direction) {
    // find the cube with cubeId
    // only allow an authorized player to move their own cube
      // update it's position
        // cube.pos += cube.speed

    // if collisions
      // handle them,

    // let client know of the updated game state
    // (maybe this is done automatically in the background with the database-syncing)
  }
});
