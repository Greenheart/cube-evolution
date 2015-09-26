// main server logic
// for game logic, check game.js

Cubes = new Mongo.Collection("cubes");

Meteor.publish("cubes", function(){
  return Cubes.find().fetch();
});
