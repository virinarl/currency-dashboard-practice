import { useState } from "react";
import ExchangeRateDisplay from "./ExchangeRateDisplay";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD"];
  const [OriginalCurrency, setOriginalCurrency] = useState("BTC");
  const [SecondaryCurrency, setSecondaryCurrency] = useState("BTC");

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
                  value={""}
                />
              </td>
              <td>
                <select
                  value={OriginalCurrency}
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
                  type="number"
                  name="secondary-currency-amount"
                  value={""}
                />
              </td>
              <td>
                <select
                  value={SecondaryCurrency}
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
      </div>
      <ExchangeRateDisplay />
    </div>
  );
};

export default CurrencyConverter;
