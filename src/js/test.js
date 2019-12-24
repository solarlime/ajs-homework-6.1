import Character from './app';

test('Should pass normally', () => {
  const expected = {
    name: 'Hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    armor: 25,
  };
  expect(new Character('Hero', 'Bowman')).toEqual(expected);
});

test('Less than 2 letters', () => {
  expect(() => new Character('H', 'Bowman')).toThrow('Incorrect parameters');
});

test('More than 10 letters', () => {
  expect(() => new Character('HeroOfTheHeroes', 'Bowman')).toThrow('Incorrect parameters');
});

test('Not string', () => {
  expect(() => new Character(666, 'Bowman')).toThrow('Incorrect parameters');
});

test('Incorrect type', () => {
  expect(() => new Character('Hero', 'Archer')).toThrow('Incorrect parameters');
});
