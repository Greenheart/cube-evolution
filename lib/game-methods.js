// methods to handle clients requests for movement/attack/evolutions/ etc.

Meteor.methods({
// -------------- GAMEPLAY METHODS ----------------
  'move': function(cubeId, direction) {
    // find the cube with cubeId
    // only allow an authorized player to move their own cube
      // update it's position
        // cube.pos += cube.speed

    // if collisions
      // handle them,

    // let client know of the updated game state
    // (maybe this is done automatically in the background with the database-syncing)
  },


// -------------- GENERAL METHODS -----------------

  'createCube': function() {
    /*if (user IS logged in and user dont have cube already) {
      // insert new cube to the cubes collection
    }*/
  }
});
