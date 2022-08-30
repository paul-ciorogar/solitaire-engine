import { Card, Suit } from './types'
import { shuffle, mulberry32, generateDeckOfCards, generateSuite } from "./utility"

describe('shuffle()', () => {
    it('shuffles a list', () => {
        const rand = mulberry32(1)
        const list = [1, 2, 3, 4]
        const result = shuffle(list, rand)

        expect(result).toEqual([4, 3, 1, 2])
    })
})

describe('generateSuite()', function () {
    it('generates 13 cards with the specified suite', function () {
        expect(generateSuite('♣')).toEqual([
            { number: 1, orientation: 'up', suit: '♣' },
            { number: 2, orientation: 'up', suit: '♣' },
            { number: 3, orientation: 'up', suit: '♣' },
            { number: 4, orientation: 'up', suit: '♣' },
            { number: 5, orientation: 'up', suit: '♣' },
            { number: 6, orientation: 'up', suit: '♣' },
            { number: 7, orientation: 'up', suit: '♣' },
            { number: 8, orientation: 'up', suit: '♣' },
            { number: 9, orientation: 'up', suit: '♣' },
            { number: 10, orientation: 'up', suit: '♣' },
            { number: 11, orientation: 'up', suit: '♣' },
            { number: 12, orientation: 'up', suit: '♣' },
            { number: 13, orientation: 'up', suit: '♣' },
        ])
    })
})

describe('generateDeckOfCards()', function () {
    it('generates 52 shuffled cards', function () {
        const shuffle = jest.fn((r, _) => r)
        const generateSuite = jest.fn((suit: Suit): Card[] => {
            return [{
                number: 1,
                orientation: 'down',
                suit: suit
            }]
        })
        expect(generateDeckOfCards(shuffle, generateSuite, 1)).toEqual([
            { number: 1, orientation: 'down', suit: '♠' },
            { number: 1, orientation: 'down', suit: '♣' },
            { number: 1, orientation: 'down', suit: '♥' },
            { number: 1, orientation: 'down', suit: '♦' },
        ])
    })
})