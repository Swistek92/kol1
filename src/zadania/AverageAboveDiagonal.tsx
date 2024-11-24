import React, { useState } from "react";

const AverageAboveDiagonal = () => {
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    let sum = 0;
    let count = 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = i + 1; j < cols; j++) {
        sum += matrix[i][j];
        count++;
      }
    }

    if (count > 0) {
      setAverage(sum / count);
    } else {
      setAverage(null);
    }
  };

  return (
    <div>
      <h1>Średnia nad przekątną</h1>
      <div>
        <h3>Tablica:</h3>
        {matrix.map((row, rowIndex) => (
          <p key={rowIndex}>{row.join(", ")}</p>
        ))}
      </div>
      <button onClick={calculateAverage}>Oblicz średnią</button>
      {average !== null ? (
        <div>
          <h3>Średnia:</h3>
          <p>{average.toFixed(2)}</p>
        </div>
      ) : (
        <p>Brak elementów nad przekątną.</p>
      )}
    </div>
  );
};

export default AverageAboveDiagonal;
