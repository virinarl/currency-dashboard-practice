import { useState } from "react";
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD"];
  const [originalCurrency, setOriginalCurrency] = useState("BTC");
  const [secondaryCurrency, setSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(0);
  const [exRate, setExRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: originalCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: secondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setExRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2>Currency converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>From:</td>
              <td>
                <input
                  type="number"
                  name="original-currency-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={originalCurrency}
                  name="original-currency"
                  className="original-currency-option"
                  onChange={(e) => setOriginalCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>To:</td>
              <td>
                <input
                  name="secondary-currency-amount"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={secondaryCurrency}
                  name="secondary-currency"
                  className="secondary-currency-option"
                  onChange={(e) => setSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRateDisplay
        exchangeRate={exRate}
        primaryCurrency={originalCurrency}
        secondaryCurrency={secondaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
