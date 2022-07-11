class SaleContext {
    
    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy){
        this.strategy = strategy
    }

    calculate(amount){
        return this.strategy.calculate(amount)
    }

}

class SimpleSale{

    constructor(tax) {
        this.tax   = tax
    }

    calculate(amount) {
        return amount + (amount * this.tax)
    }

}

class DiscountSale{

    constructor(tax, discount) {
        this.tax   = tax
        this.discount = discount
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount
    }

}

const simple = new SimpleSale(0.19)
const discount = new DiscountSale(300)
const context = new SaleContext(simple)
context.setStrategy()
console.log(context.calculate(20000))