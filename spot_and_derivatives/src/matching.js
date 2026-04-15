export class MatchingEngine {
  isorderMatched(buy, sell) {
    if (sell - buy > 10 && sell > buy) {
      return "Order matched";
    } else {
      return "order not matched";
    }
  }
}
