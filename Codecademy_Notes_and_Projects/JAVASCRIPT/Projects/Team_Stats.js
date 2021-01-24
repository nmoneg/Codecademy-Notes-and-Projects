/**This is a object called 'team' Note that in this project, the private properties are distinguished by using an underscore before the name. Using this notation structure allows for easier clarity on what properties are accessible or not accessible from outside the object. When accessing these properties inside the object, use the original property name. When accessing outside of the object, use the getter property.*/

const team = {

/**Here we have added a property, '_players', that is an array of objects. Each object represents a player, with three properties (firstName, lastName, age). */
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Casey',
      lastName: 'Stacks',
      age: 15
    },
    {
      firstName: 'Rico',
      lastName: 'Seedly',
      age: 7
    }
  ],
  
  /**This is another property, '_games'. It also contains an array of objects. These objects represent games, with opponents, team points, and opponent points as the properties of these objects. */
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Bears',
      teamPoints: 67,
      opponentPoints: 69
    },
    {
      opponent: 'Cowboys',
      teamPoints: 26,
      opponentPoints: 15
    }
  ],

  /**The following properties below are accessor properties for the players and games keys. These allow us to access the private properties ("_players" and "_games") above. This is why when we want to access the arrays above, we use 'team.players' and 'team.games' instead of 'team._players' and 'team._games' */

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  /**This method creates a new object with the same format as the objects in the 'players' array, and adds them to that array.*/
  addPlayer(first, last, age) {
    let player = {
      firstName: first,
      lastName: last,
      age: age
    };
    this._players.push(player);
  },

  /** */
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

/**Here we INVOKE the 'addPlayer' method to add new players to the list  */
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Rams", 69, 77);
team.addGame("Packers", 12, 7);
team.addGame("Titans", 45, 12);

/**We then check to see if the players and games were successfully added to their designated arrays. Note that the syntax for accessing '_players' is 'team.players' and not 'team._players') */
console.log(team.players);
console.log(team.games);