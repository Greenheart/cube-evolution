// main server logic
// for game logic, check game.js

Meteor.publish("cubes", function(){
  return Cubes.find();
});
