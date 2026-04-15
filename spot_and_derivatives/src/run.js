import { Buyer } from "./buyer.js";
import { Seller } from "./seller.js";
import { OrderBook } from "./order.js";
import { MatchingEngine } from "./matching.js";

const orderbook = new OrderBook();
let Sell_price = 0
let Buy_price = 0

const matchEngine = new MatchingEngine();

setInterval(() => {
  const prices = Math.floor(Math.random(1) * 10000);
  const userid = Math.floor(Math.random(1) + 1000000000)
  new Buyer(prices, "BTC");
  orderbook.buyerPlaceOrder(`${userid}`, "BTC", prices);
}, 1000);

setInterval(() => {
  const prices = Math.floor(Math.random(1) * 10000);
  const userid = Math.floor(Math.random(1) + 1000000000)
  new Seller(prices, "BTC");
  orderbook.sellerPlaceOrder(`${userid}`, "BTC", prices);
}, 1000);

setInterval(() => {
  orderbook.buyerorderBook.forEach((element) => {
    console.log("-------- Buyer ---------");
    console.log(element);
    Buy_price = element
    console.log("---------------");
  });
  orderbook.sellerorderBook.forEach((element) => {
    console.log("-------Seller-------");
    console.log(element);
    Sell_price = element
    console.log("--------------");
  });


  console.log(matchEngine.isorderMatched(Buy_price,Sell_price))

}, 1000);

