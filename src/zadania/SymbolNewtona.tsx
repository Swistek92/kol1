import React, { useState } from "react";

const SymbolNewtona = () => {
  const [n, setN] = useState(5);
  const [k, setK] = useState(2);
  const [result, setResult] = useState(null);

  const calculateNewton = (n, k) => {
    if (k === 0 || k === n) {
      return 1;
    }
    return calculateNewton(n - 1, k - 1) + calculateNewton(n - 1, k);
  };

  const handleCalculate = () => {
    const res = calculateNewton(n, k);
    setResult(res);
  };

  return (
    <div>
      <h1>Symbol Newtona</h1>
      <div>
        <label>
          n:{" "}
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <div>
        <label>
          k:{" "}
          <input
            type="number"
            value={k}
            onChange={(e) => setK(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Oblicz</button>
      {result !== null && (
        <div>
          <h2>Wynik:</h2>
          <p>
            Symbol Newtona C({n}, {k}) = {result}
          </p>
        </div>
      )}
    </div>
  );
};

export default SymbolNewtona;
