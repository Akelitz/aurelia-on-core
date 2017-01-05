export class Games {
    constructor() {
        this.games = [
            { id: 1, title: 'Il labirinto perduto', master: 'Lucia', canJoin: false, canPlay: true },
            { id: 2, title: 'La tana del drago', master: 'Roberto', canJoin: true, canPlay: false }
        ];
    }

    create() {
        this.games.push(
            { id: this.games.length + 1, title : 'Nuova partita', master: 'Giorgio', canJoin: false, canPlay: true } 
        );
    }

    join(game) {
        game.canJoin = false;
        game.canPlay = true;
    }
}
