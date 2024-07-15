function solution(players, callings) {
    const playerPositions = {};
    players.forEach((player, index) => {
        playerPositions[player] = index;
    });

    for (let i = 0; i < callings.length; i++) {
        const callingPlayer = callings[i];
        const index = playerPositions[callingPlayer];

        const prevPlayer = players[index - 1];
        players[index - 1] = callingPlayer;
        players[index] = prevPlayer;

        playerPositions[callingPlayer]--;
        playerPositions[prevPlayer]++;
    }

    return players;
}
