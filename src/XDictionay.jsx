import React, { useState } from "react";

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setResult({ found: true, meaning: found.meaning });
    } else {
      setResult({ found: false });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter a word"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {result && result.found && (
          <>
            <h3>Definition:</h3>
            <p>{result.meaning}</p>
          </>
        )}
        {result && !result.found && (
          <p>Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  );
};

export default XDictionary;
