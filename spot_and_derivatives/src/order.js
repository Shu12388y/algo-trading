export class OrderBook{
    buyerorderBook = new Map()
    sellerorderBook = new Map()

    buyerPlaceOrder(userid,symbol,price){
        this.buyerorderBook.set(`${userid}:${symbol}`,price)
    }
    sellerPlaceOrder(userid,symbol,price){
        this.sellerorderBook.set(`${userid}:${symbol}`,price)
    }
}

