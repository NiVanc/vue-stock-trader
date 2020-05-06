const state = {
  funds: 1000,
  stocks: [],
};

const mutations = {
  BUY_STOCK(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find((el) => el.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity,
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find((el) => el.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
      funds -= stockPrice * quantity;
    } else {
      state.stocks.splice(state.stocks.indexof(record), 1);
      funds -= stockPrice * state.stocks.quantity;
    }
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find((el) => el.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};
