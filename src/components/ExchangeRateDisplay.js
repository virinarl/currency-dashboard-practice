const ExchangeRateDisplay = ({
  exchangeRate,
  primaryCurrency,
  secondaryCurrency,
}) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <p>{exchangeRate}</p>
      <p>
        {primaryCurrency} to {secondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRateDisplay;
