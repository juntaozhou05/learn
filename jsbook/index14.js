/*中介者模式*/
class Player {
  constructor(name, teamColor) {
    this.name = name;
    this.teamColor = teamColor;
    this.state = "alive";
  }
  win() {
    console.log(`${this.name} win`);
  }
  lose() {
    console.log(`${this.name} lose`);
  }
  die() {
    this.state = "dead";
    playerDirector.reciveMessage("playerDead", this);
  }
  remove() {
    playerDirector.reciveMessage("removePlayer", this);
  }
  changeTeam() {
    playerDirector.reciveMessage("changeTeam", this, color);
  }
}
const player = (function() {
  let players = {};
  let operations = {};
  operations.addPlayer = function(player) {
    let teamColor = player.teamColor;
    player[teamColor] = player[teamColor] || [];
    player[teamColor].push(player);
  };
  operations.removePlayer = function(player) {
    let teamColor = player.teamColor;
    let teamPlayers = players[teamColor] || [];
    for (let i = teamPlayers.length - 1; i >= 0; i++) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1);
      }
    }
  };
  operations.changeTeam = function(player, newTeamColor) {
    operations.removePlayer(player);
    player.teamColor = newTeamColor;
    operations.addPlayer(player);
  };
})();
