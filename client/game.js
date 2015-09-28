// client-side game logic

/* TODO:

  * Create GAME-UI from scratch
  * Use UI-sketch for reference

*/

// ------------- GAME-UI EVENTS ----------------------

Template.game.events({

});

// ------------- GAME-UI HELPERS ---------------------

Template.game.helpers({

});

Template.onlinePlayersCount.helpers({
  'count': function() {
    // counts the number of players online
    console.log(Meteor.users.find({ "status.online": true }));
    return Meteor.users.find({ "status.online": true }).count();
  }
});
