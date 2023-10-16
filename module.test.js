import Portfolio from "./module";


test("Testing myPortfolio creation -- success", () => {
    const expected = 0;
    const result = Portfolio.myPorfolio().size;
    expect(expected).toBe(result);
  })

  test("Testing myPortfolio.isEmpty -- success", () => {
    const expected = true;
    const result = Portfolio.isEmpty();
    expect(expected).toBe(result);
  })

  //NEED TO ADD STONKS BEFORE BEING ABLE TO TEST COUNT
  test("Testing ADD TO PORTFOLIO -- success", () => {
    const expected = new Map([["GME", 5]]);
    const result = Portfolio.addStock("GME", 5);
    expect(expected).toStrictEqual(result);
  })

  //COUNTING STONKS
  test("Testing COUNT STONKS -- success", () => {
    const expected = 2;
    Portfolio.addStock("RBLX", 10);
    const result = Portfolio.allStock();
    expect(expected).toBe(result);
  })
  
  //SELL (ALWAYS HODL) Selling 7 of our RBLX 
  test("Testing SELL STONKS -- success", () => {
    const expected = new Map([
        ["GME", 5],
        ["RBLX", 3]]);
    const result = Portfolio.sellStock("RBLX", 7);
    expect(expected).toStrictEqual(result);
  })

  test("Testing SPECIFIC STONKS COUNT -- success", () => {
    const expected = 3;
    const result = Portfolio.stockCount("RBLX");
    expect(expected).toBe(result);
  })
//Zeroing Out the RBLX stock to 0 and remove from Map
  test("Testing ZERO OUT STONKS -- success", () => {
    const expected = new Map([
        ["GME", 5]]);
    const result = Portfolio.sellStock("RBLX", 3);
    expect(expected).toStrictEqual(result);
  })

  test("Testing ERROR OUT STONKS -- success", () => {
    const expected = "ShareSaleException";
    const result = Portfolio.sellStock("GME", 15);
    expect(expected).toBe(result);
  })