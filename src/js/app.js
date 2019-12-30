function Character(name, type) {
  const types = {
    Bowman: { attack: 25, armor: 25 },
    Swordsman: { attack: 40, armor: 10 },
    Magician: { attack: 10, armor: 40 },
    Daemon: { attack: 25, armor: 25 },
    Undead: { attack: 40, armor: 10 },
    Zombie: { attack: 10, armor: 40 },
  };

  if ((typeof (name) !== 'string') || !(type in types) || (name.length < 2) || (name.length > 10)) {
    throw new Error('Incorrect parameters');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = types[type].attack;
  this.armor = types[type].armor;
}

export default Character;
