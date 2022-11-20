export class Phone {
    name: string
    phoneID: number
    price: number
    brand: string

    constructor(phoneID: number, price: number, name: string, brand: string) {
        this.phoneID = phoneID
        this.price = price
        this.name = name
        this.brand = brand
    }

}

export class Iphone extends Phone {
    amount: number
    date: number


    constructor(phoneID: number, amount: number, name: string, price: number, date: number, brand = 'Iphone') {
        super(phoneID, price, name, brand = 'Iphone')
        this.date = date
        this.amount = amount


    }
}


export class Samsung extends Phone {
    amount: number
    date: number


    constructor(phoneID: number, amount: number, name: string, price: number, date: number, brand = 'Samsung') {
        super(phoneID, price, name, brand = 'Samsung')
        this.date = date
        this.amount = amount


    }
}


export class Nokia extends Phone {
    amount: number
    date: number


    constructor(phoneID: number, amount: number, name: string, price: number, date: number, brand = 'Nokia') {
        super(phoneID, price, name, brand = 'Nokia')
        this.date = date
        this.amount = amount


    }
}

