const content = document.getElementById('content')
const select  = document.getElementById('slcOptions')
const data    = [
    {
        name: 'Bicicleta Mountain',
        country: 'Alemania',
        info: 'Bicicleta de origen aleman, utilizada para prácticar descenso',
        image: 'https://pixnio.com/free-images/2020/07/18/2020-07-18-08-01-24-850x1275.jpg'
    },
    {
        name: 'Bicicleta City',
        country: 'Inglaterra',
        info: 'Bicicleta de origen ingles, utilizada para transitar en ciudad',
        image: 'https://pixnio.com/free-images/2021/12/01/2021-12-01-10-17-51-900x1350.jpg'
    },
    {
        name: 'Bicicleta',
        country: 'Brasil',
        info: 'Bicicleta de origen brasileño, utilizada para competición profesional',
        image: 'https://cdn.pixabay.com/photo/2019/05/29/23/41/mountain-terrain-bike-4238805_960_720.jpg'
    }
]

class InfoContext {

    constructor(strategy, data, element) {
        this.setStrategy(strategy)
        this.data    = data
        this.element = element
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }

}

class ListStrategy {
    
    show(data, element) {
        element.innerHTML = data.reduce((ac, bike) => {
            return ac + `<div>
                <h2>${bike.name}</h2>
                <p>${bike.country}</p>
            </div>
            <hr>`
        }, '')
    }

}

class DetailedListStrategy {
    
    show(data, element) {
        element.innerHTML = data.reduce((ac, bike) => {
            return ac + `<div>
                <h2>${bike.name}</h2>
                <p>${bike.country}</p>
                <p>${bike.info}</p>
            </div>
            <hr>`
        }, '')
    }

}

const strategies = [ new ListStrategy(), new DetailedListStrategy() ]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()

select.addEventListener('change', (e) => {
    const position = e.target.value
    info.setStrategy(strategies[position])
    info.show()
})