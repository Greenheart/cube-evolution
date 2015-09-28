// Main client logic regarding UI-behaviors
// for game logic, check game.js

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("cubes");
Meteor.subscribe("userStatus");

Session.setDefault("inGame", false);

// ---------------- GENERAL UI -------------------

Template.main.helpers({
  'userInGame': function() {
    return Session.get("inGame");
  }
});

Template.startScreen.events({
  'click input.startGame': function(event) {
    event.preventDefault();

    if (!userHasCube()) {
      Meteor.call("createCube");
    }

    Session.set("inGame", true);
  }
});

// --------------- CLIENT HELPERS -----------------

function userHasCube() {
  // check if the current user has a cube
  return Cubes.findOne({ owner: Meteor.userId() });
}


/* TODO:
    * Handle user-logout events + user closing window (window.onbeforeunload like in TicTacToe)
      * Set Session-var "inGame" to false
*/
