// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const prices = [4, 5, 6, 1, 8]

var maxProfit = function (prices) {
  let profit = 0
  let min = prices[0]
  prices.forEach((element) => {
    min = Math.min(element, min)
    profit = Math.max(element - min, profit)
  })
  return profit
}
maxProfit(prices)
