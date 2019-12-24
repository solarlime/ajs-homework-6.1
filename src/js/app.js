function Character(name, type) {
  const types = [
    { type: 'Bowman', attack: 25, armor: 25 },
    { type: 'Swordsman', attack: 40, armor: 10 },
    { type: 'Magician', attack: 10, armor: 40 },
    { type: 'Daemon', attack: 25, armor: 25 },
    { type: 'Undead', attack: 40, armor: 10 },
    { type: 'Zombie', attack: 10, armor: 40 },
  ];

  if (
    (typeof (type) === 'string')
    && (types.map((item) => item.type).includes(type))
    && (name.length >= 2)
    && (name.length <= 10)
  ) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = types.find((item) => item.type === this.type).attack;
    this.armor = types.find((item) => item.type === this.type).armor;
    return this;
  }
  throw new Error('Incorrect parameters');
}

export default Character;
