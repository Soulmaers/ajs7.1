


export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(name) {
        this.members.forEach((el) => {
            if (el !== name) {
                this.members.add(name);
            }
            else {
                throw new Error('Дубль')
            }
        })


    }
    addAll() {

    }
    toArray() {


    }
}
