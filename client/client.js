// Main client logic regarding UI-behaviors
// for game logic, check game.js

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("cubes");

Template.main.helpers({
  'userHasCube': function() {
    //returns the user's cube
    console.log("userHasCube: " + Cubes.findOne({ owner: Meteor.userId() }));
    return Cubes.findOne({ owner: Meteor.userId() });
  }
});

Template.startScreen.events({
  'click input.startGame': function(event) {
    event.preventDefault();
    console.log("starting game...");

    Meteor.call("createCube");
  }
});
