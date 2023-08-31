import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Coin } from "./elements/coin/coin";
import axios from "axios";
import { API_KEY } from "./api/config";
import "./App.css";
import "./Main.css";

function App() {
  const [coins, setCoins] = useState<any[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  const filteredCoin = coins.filter((coin) =>
    coin.name?.toLowerCase().includes(input?.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <div className="search-bar">
        <input placeholder="Search" onChange={handleInput} />
      </div>
      <div>
        {filteredCoin.map((coin, key) => {
          return (
            <Coin
              key={key}
              img={coin?.image}
              name={coin?.name}
              symbol={coin?.symbol}
              price={coin?.current_price}
              price_change={coin?.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
