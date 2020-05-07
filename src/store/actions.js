import axios from "axios";

export const fetchData = ({ commit }) => {
  axios
    .get("/data.json")
    .then((res) => {
      const data = res.data;
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit("SET_PORTFOLIO", portfolio);
        commit("SET_STOCKS", stocks);
      }
    })
    .catch((error) => console.log(error));
};
