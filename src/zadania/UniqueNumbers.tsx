import React, { useState } from "react";

const UniqueNumbers = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [uniqueCount, setUniqueCount] = useState<number | null>(null);
  const handleAddNumber = () => {
    const num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
      if (num === 0) {
        const uniqueNumbers = numbers.filter(
          (number) => numbers.filter((x) => x === number).length === 1
        );
        setUniqueCount(uniqueNumbers.length);
      } else {
        setNumbers([...numbers, num]);
      }
    }
    setInputValue("");
  };

  return (
    <div>
      <h2>Unikalne liczby</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Podaj liczbę"
      />
      <button onClick={handleAddNumber}>Dodaj</button>

      <div style={{ display: numbers.length > 0 ? "block" : "none" }}>
        <h6>Wprowadzone liczby:</h6>
        <p>{numbers.join(", ")}</p>
      </div>

      {uniqueCount !== null && (
        <div>
          <h2>Liczba unikalnych liczb:</h2>
          <p>{uniqueCount}</p>
        </div>
      )}
    </div>
  );
};

export default UniqueNumbers;
