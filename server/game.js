// server-side game logic
// the server will make decicions and therefore handle the game state

// (this might be too low-level since Meteor handle real-time communications really well out of the box)
  // To limit data-transfers
    // Implement some kind of "Range Of Visibility"
    // Only allow server to publish data about the parts of the world that are
    // close to the player.
