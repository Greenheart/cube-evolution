// code for both client and server-side

Cubes = new Mongo.Collection("cubes");

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
    if (Meteor.user() && ! Cubes.findOne({ owner: Meteor.userId() })) {
      // creates a new cube for the currently logged in user
      console.log("creating new cube for '" + Meteor.user().username + "'");

      Cubes.insert({
        owner: Meteor.userId(),
        size: 10,
        speed: 5,
        x: 200,
        y: 200
      });
    }
  }


});
