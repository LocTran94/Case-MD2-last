export abstract class Phone {

    phoneID: number
    amount: number
    price: number
    constructor(phoneID: number, amount: number,price:number) {
        this.phoneID = phoneID
        this.amount = amount
        this.price = price

    }

}

export class Iphone extends Phone {
    name: string
    date: number
    brand: string = 'Iphone'

    constructor(phoneID: number, amount: number, name: string, price: number, date: number) {
        super(phoneID, amount,price)
        this.date = date
        this.name = name


    }
}


export class Samsung extends Phone {
    name: string
    date: number
    brand: string = 'Samsung'

    constructor(phoneID: number, amount: number, name: string, price: number, date: number) {
        super(phoneID, amount,price)
        this.date = date
        this.name = name


    }
}


export class Nokia extends Phone {
    name: string
    date: number
    brand: string = 'Nokia'

    constructor(phoneID: number, amount: number, name: string, price: number, date: number) {
        super(phoneID, amount,price)
        this.date = date
        this.name = name


    }
}
