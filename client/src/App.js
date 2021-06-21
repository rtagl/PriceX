import { useEffect, useState } from "react";
import SelectCoin from "./components/SelectCoin";
import axios from "axios";

const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_NOMIC_KEY}`;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [coin1, setCoin1] = useState({});
  const [coin2, setCoin2] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data.slice(0, 125));
    });
  }, []);

  console.log(coins);

  const handleSelectCoin1 = (e) => {
    const selectedCoin = coins.find((coin) => coin.currency === e.target.value);
    setCoin1(selectedCoin);
  };

  const handleSelectCoin2 = (e) => {
    const selectedCoin = coins.find((coin) => coin.currency === e.target.value);
    setCoin2(selectedCoin);
  };

  const findPrice = () => {
    const multiplier = Number(coin2.market_cap) / Number(coin1.market_cap);
    const newPrice = Number(coin1.price) * multiplier;
    if (isNaN(newPrice)) {
      return "";
    } else {
      return "$" + newPrice.toFixed(2);
    }
  };

  return (
    <div>
      <div>
        <h2>IF</h2>
        <SelectCoin coins={coins} handleSelectCoin={handleSelectCoin1} />
        <h3>Had the market cap of</h3>
        <SelectCoin coins={coins} handleSelectCoin={handleSelectCoin2} />
        <h3>
          It would be worth... <span>{findPrice()}</span>
        </h3>
      </div>
    </div>
  );
};

export default App;
