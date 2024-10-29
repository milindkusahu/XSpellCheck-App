import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const App = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Split the input into words
    const words = text.split(" ");

    // Find the first word that needs correction
    for (let word of words) {
      const lowercaseWord = word.toLowerCase();
      if (customDictionary[lowercaseWord]) {
        setSuggestedText(customDictionary[lowercaseWord]);
        return;
      }
    }

    // If no corrections needed, clear the suggestion
    setSuggestedText("");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default App;
