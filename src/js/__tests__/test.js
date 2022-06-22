import Team from '../app';

test('проверка добавления', () => {
  const person = new Team();
  const character = {

  };
  person.add(character);

  expect(person.members.has(character)).toBe(true);
});

test('проверка ошибки дубля', () => {
  const person = new Team();
  const character = {
  };
  person.add(character);

  function twoAdd() {
    person.add(character);
  }

  expect(twoAdd).toThrowError('Уже есть');
});

test('добавление уникальных объектов', () => {
  const person = new Team();

  const bowman = {};
  const magic = {};
  person.addAll(magic, bowman, magic, bowman);

  const res = new Set([magic, bowman]);
  expect(person.members).toEqual(res);
});

test('конвертация в массив', () => {
  const person = new Team();

  const bowman = {};
  const magic = {};
  person.addAll(magic, bowman, magic, bowman);

  const res = [magic, bowman];
  expect(person.toArray()).toEqual(res);
});
