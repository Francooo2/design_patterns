class Singleton {

    constructor() {

        this.random = Math.random()

        if ( Singleton.instance ) {
            return Singleton.instance
        }

        Singleton.instance = this

    }

    static getInstance() {
        return Singleton.instance
    }

}

const singleton = new Singleton()
const singleton2 = new Singleton()
const singleton3 = Singleton.getInstance()
console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton3.random)