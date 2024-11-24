import React, { useState } from "react";

const MedianCalculator = () => {
  const [numbers, setNumbers] = useState([7, 2, 9, 4, 1]);
  const [median, setMedian] = useState<Number | null>(null);

  const calculateMedian = () => {
    if (numbers.length === 0) {
      setMedian(null);
      return;
    }

    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    const midIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
      setMedian((sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2);
    } else {
      setMedian(sortedNumbers[midIndex]);
    }
  };

  return (
    <div>
      <h1>Obliczanie Mediany</h1>
      <p>Tablica liczb: {numbers.join(", ")}</p>
      <button onClick={calculateMedian}>Oblicz medianę</button>
      {median !== null && (
        <div>
          <h2>Mediana:</h2>
          <p>{String(median)}</p>
        </div>
      )}
    </div>
  );
};

export default MedianCalculator;
