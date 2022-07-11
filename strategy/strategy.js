// Context
class SaleContext {

    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    calculate(amount) {
        return this.strategy.calculate(amount)
    }


 }

// strategies
 class RegularSaleStrategy {

    constructor(tax) {
        this.tax = tax
    }

    calculate(amount) {
        return amount + (amount * this.tax)
    }

 }

 class DiscountSaleStrategy {

    constructor(tax, discount) {
        this.tax     = tax
        this.discount = discount
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount
    }

 }

 const strategyRegular = new RegularSaleStrategy(0.19)
 const discountStrategy = new DiscountSaleStrategy(0.19, 300)


 const sale = new SaleContext(strategyRegular)

 console.log(sale.calculate(20000))

 sale.setStrategy(discountStrategy)

 console.log(sale.calculate(20000))