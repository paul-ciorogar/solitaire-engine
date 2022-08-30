import { Game } from './game'

describe('game.ts', function () {
    it('creates new instance of game', function () {
        expect(new Game()).toBeInstanceOf(Game)
    })
})