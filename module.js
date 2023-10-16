let portfolio = new Map();

function myPorfolio() {
    return portfolio;
}

function isEmpty() {
    if (portfolio.size == 0) {
        return true;
    } else {
        return false;
    }
}

function addStock(stock, count) {
    portfolio.set(stock, count);
    return portfolio;
}

function allStock() {
    return portfolio.size;
}

function stockCount(name) {
    return portfolio.get(name);
}

function sellStock(stock, count) {
    try {
        let curCount = portfolio.get(stock);

        if (curCount < count) {
            throw "ShareSaleException";
        }
        if (curCount == count) {
            portfolio.delete(stock);
        } else {
            portfolio.set(stock, (curCount - count))
        }

    } catch (error) {
        if (error == "ShareSaleException") {
            return error;
            //console.error(error + ": Can't Sell More Shares Than You Own!");
        } else {
            console.error(error);
        }
    } 

    return portfolio;
}

export default { myPorfolio, isEmpty, addStock, stockCount, sellStock,allStock};