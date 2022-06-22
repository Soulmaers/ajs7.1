
import Team from '../app'

test('тест метода add', () => {
    const person = new Team();
    person.members.add('character')
    expect(person.members.has('character')).toEqual('character');

})
