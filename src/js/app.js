export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    if (this.members.has(name)) {
      throw new Error('Уже есть');
    } else {
      this.members.add(name);
    }
  }

  addAll(...names) {
    for (let i = 0; i < names.length; i += 1) {
      if (!this.members.has(names[i])) { this.members.add(names[i]); }
    }
  }

  toArray() {
    const arrPerson = [];
    this.members.forEach((el) => arrPerson.push(el));

    return arrPerson;
  }
}
