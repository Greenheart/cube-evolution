// Eventhandlers and helpers for app UI
// for game logic, check game.js

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("cubes");
Meteor.subscribe("userStatus");

Session.setDefault("inGame", false);
Session.setDefault("statsOpen", false);
Session.setDefault("leaderboardOpen", false);



// ---------------- GENERAL UI -------------------

Template.main.helpers({
  'userInGame': function() {
    return Session.get("inGame");
  }
});

Template.loginButtons.events({
  'click #login-buttons-logout': function() {
    Session.set("inGame", false);
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



// ------------- GAME-UI EVENTS ----------------------

Template.game.events({
  'click .switch-stats': function() {
      Session.set("statsOpen", ! Session.get("statsOpen"));
  },
  'click .switch-leaderboard': function() {
    Session.set("leaderboardOpen", ! Session.get("leaderboardOpen"));
  },
  'click #cube-stats': function() {
    Session.set("statsOpen", ! Session.get("statsOpen"));
  },
  'click #leaderboard': function() {
    Session.set("leaderboardOpen", ! Session.get("leaderboardOpen"));
  }
});



// ------------- GAME-UI HELPERS ---------------------

Template.game.helpers({
  'getUserCube': function() {
    return Cubes.find({ owner: Meteor.userId() });
  }
});

Template.cubeStats.helpers({
  'elementOpen': function() {
    return Session.get("statsOpen");
  }
});

Template.leaderboard.helpers({
  'elementOpen': function() {
    return Session.get("leaderboardOpen");
  }
});


Template.onlinePlayersCount.helpers({
  'count': function() {
    // counts the number of players online
    return Meteor.users.find({ "status.online": true }).count();
  }
});


// --------------- CLIENT HELPERS -----------------

function userHasCube() {
  // check if the current user has a cube
  return Cubes.findOne({ owner: Meteor.userId() });
}
