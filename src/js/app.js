function Character(name, type) {
  const types = {
    Bowman: { attack: 25, armor: 25 },
    Swordsman: { attack: 40, armor: 10 },
    Magician: { attack: 10, armor: 40 },
    Daemon: { attack: 25, armor: 25 },
    Undead: { attack: 40, armor: 10 },
    Zombie: { attack: 10, armor: 40 },
  };

  if (
    (typeof (type) === 'string')
    && (Object.keys(types).includes(type))
    && (name.length >= 2)
    && (name.length <= 10)
  ) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = Object.entries(types)
      .find((item) => item[0] === type)[1].attack;
    this.armor = Object.entries(types)
      .find((item) => item[0] === type)[1].armor;
    return;
  }
  throw new Error('Incorrect parameters');
}

export default Character;
