const SelectCoin = ({ coins, handleSelectCoin }) => {
  return (
    <div>
      <span>
        <select name="coins" id="coins" onChange={handleSelectCoin}>
          <option>Select A Coin</option>
          {coins
            ? coins.map((coin) => (
                <option key={coin.id} value={coin.currency}>
                  {coin.currency}
                </option>
              ))
            : null}
        </select>
      </span>
    </div>
  );
};

export default SelectCoin;
