// client-side game logic

// ------------- GAME-UI EVENTS ----------------------

Template.game.events({

});

// ------------- GAME-UI HELPERS ---------------------

Template.game.helpers({
  'getUserCube': function() {
    return Cubes.find({ owner: Meteor.userId() });
  }
});

Template.onlinePlayersCount.helpers({
  'count': function() {
    // counts the number of players online
    return Meteor.users.find({ "status.online": true }).count();
  }
});
