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
      // Convert to lowercase for checking
      const lowercaseWord = word.toLowerCase();

      // Check if word exists in dictionary
      if (customDictionary[lowercaseWord]) {
        // If the original word started with uppercase, capitalize the suggestion
        if (word[0] === word[0].toUpperCase()) {
          const correctedWord = customDictionary[lowercaseWord];
          setSuggestedText(
            correctedWord.charAt(0).toUpperCase() + correctedWord.slice(1)
          );
        } else {
          setSuggestedText(customDictionary[lowercaseWord]);
        }
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
