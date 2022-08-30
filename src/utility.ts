import { Card, cardNumbers, Suit } from './types'

export function mulberry32(seed: number) {
    return function () {
        let t = seed += 0x6D2B79F5
        t = Math.imul(t ^ t >>> 15, t | 1)
        t ^= t + Math.imul(t ^ t >>> 7, t | 61)
        return ((t ^ t >>> 14) >>> 0) / 4294967296
    }
}

export function shuffle(source: any[], rand: () => number): any[] {
    const newRand = (max: number) => Math.floor(rand() * max)
    const list = [...source]
    let lastIndex = source.length - 1

    while (lastIndex > 0) {
        const randIndex = newRand(lastIndex)
        const lastIndexElem = list[lastIndex]
        if (lastIndex < list.length && randIndex < list.length) {
            list[lastIndex] = list[randIndex]
            list[randIndex] = lastIndexElem
            lastIndex--
        }
    }

    return list
}

export function generateSuite(suit: Suit): Card[] {
    return cardNumbers.map(num => ({
        number: num,
        orientation: 'up',
        suit: suit,
    }))
}

export function generateDeckOfCards(
    shuffle: (list: Card[], game: number) => Card[],
    generateSuite: (suit: Suit) => Card[],
    game: number): Card[] {

    return shuffle([
        ...generateSuite('♠'),
        ...generateSuite('♣'),
        ...generateSuite('♥'),
        ...generateSuite('♦'),
    ], game)
}