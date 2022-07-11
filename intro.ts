// Clases
class Drink {
    
    private name: string

    constructor(name: string) {
        this.name = name
    }

    info(): string {
        return `Esta bebida es: ${this.name}`
    }

}

// const water = new Drink('agua')
// console.log(water)

// Interfaz o contrato de código
interface Product {
    price: number
    getPrice(): string
}

// Herencia
class Beer extends Drink implements Product {

    private alcohol: number
    price: number

    constructor(name: string, alcohol: number, price: number) {
        super(name)
        this.alcohol = alcohol
        this.price = price
    }

    info(): string {
        return super.info() + " " + this.alcohol
    }

    getPrice(): string {
        return `Esta bebida tiene un valor de: $ ${this.price.toString()}`
    }
}

class Snack implements Product {

    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    getPrice(): string {
        return this.price.toString()
    }

    info(): string {
        return `Este producto es ${this.name}, y su precio es $ ${this.price}`
    }
}

const corona = new Beer("Corona", 4.5, 4500)
const snack = new Snack("Papa Frita Lays", 600)
// console.log(corona.info())
// console.log(corona.getPrice())
// console.log(snack.info())

const products: Product[] = [
    new Beer('corona', 4.5, 1),
    new Snack('papas', 600),
    new Beer('heineken', 5, 1.2)
]

function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice())
    }
}

getPrices(products)