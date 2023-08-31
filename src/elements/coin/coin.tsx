import React from "react";
import "./coin.css";

interface iCoin {
  img: any;
  name: string;
  symbol: string;
  price_change: number;
  price: any;
}

export const Coin: React.FunctionComponent<iCoin> = ({
  img,
  name,
  symbol,
  price_change,
  price,
}) => {
  const priceConverted = (Number(price) * 0.012).toFixed(2);
  const symbolConverted = symbol?.toUpperCase();

  return (
    <div className="coin-row">
      <img width={32} src={img} alt="img" />
      <h3 style={{ fontWeight: 400 }}>
        {name} ({symbolConverted})
      </h3>
      <div className="coin-data">
        <p className="p-converted">
          <u>{priceConverted}$</u>
        </p>
        {price_change > 0 ? (
          <p style={{ color: "#0cad00" }}>{price_change.toFixed(2)} %</p>
        ) : (
          <p style={{ color: "red" }}>{price_change.toFixed(2)} %</p>
        )}
      </div>
    </div>
  );
};
