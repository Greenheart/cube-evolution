// main server logic
// for game logic, check game.js

Meteor.publish("cubes", function(){
  return Cubes.find();
});

Meteor.publish("userStatus", function() {
  // publish information about which users that are logged in
  return Meteor.users.find({ "status.online": true }, { "status.online": true });
});
