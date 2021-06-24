const SelectCoin = ({ coins, handleSelectCoin }) => {
  return (
    <div>
      <span>
        <select
          className="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none
          focus:shadow-outline"
          name="coins"
          id="coins"
          onChange={handleSelectCoin}>
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
