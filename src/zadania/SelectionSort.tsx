import React, { useState } from "react";

const SelectionSort = () => {
  const [array, setArray] = useState<number[]>([29, 10, 14, 37, 13]);
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  const selectionSort = (arr: number[]): number[] => {
    const newArray = [...arr];
    for (let i = 0; i < newArray.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < newArray.length; j++) {
        if (newArray[j] < newArray[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [newArray[i], newArray[minIndex]] = [newArray[minIndex], newArray[i]];
      }
    }
    return newArray;
  };

  const handleSort = () => {
    const result = selectionSort(array);
    setSortedArray(result);
  };

  return (
    <div>
      <h1>Sortowanie przez wybór</h1>
      <p>Tablica przed sortowaniem: {array.join(", ")}</p>
      <button onClick={handleSort}>Sortuj</button>
      {sortedArray.length > 0 && (
        <div>
          <h2>Tablica po sortowaniu:</h2>
          <p>{sortedArray.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default SelectionSort;
