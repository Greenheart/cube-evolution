// main server logic
// for game logic, check game.js

Meteor.publish("cubes", function(){
  return Cubes.find();
});

Meteor.publish("userStatus", function() {
  // TODO: Check if this can be done more securely.
  // might be possible to just return a integer of currently online users
  // that then gets stored in client somewhere
  return Meteor.users.find({ "status.online": true });
});
