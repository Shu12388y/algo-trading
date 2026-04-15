export class Seller{
    symbol 
    price
    constructor(price,symbol){
        this.price = price
        this.symbol = symbol
    }
    getPrice(){
        return this.price
    }
}