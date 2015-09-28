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
    // creates a new cube for the currently logged in user
    if (Meteor.user() && ! userHasCube()) {
      // Requirements: logged in user + user doesn't already own a cube
      console.log("creating new cube for '" + Meteor.user().username + "'");

      Cubes.insert({
        owner: Meteor.userId(),
        level: 1,
        health: 10,
        attributes: {
          strength: randInt(1, 3), // TODO: Explain how the Cube's stats affect gameplay
          agility: randInt(1, 3),
        },
        attributePoints: 0,        // Gained each level. Used to upgrade attributes
        x: 200,
        y: 200
      });
    }
  }
});

// -------------- GENERAL HELPERS ---------------

function randInt(min, max){
  // (min <= result <= max)
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function userHasCube() {
  //returns the user's cube
  return Cubes.findOne({ owner: Meteor.userId() });
}
