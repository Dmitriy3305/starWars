import React from 'react';
import InputField from './inputField';
import SuggestionsList from './suggestionsList';

interface AutocompleteProps {
  suggestions: string[];
  onSuggestionSelected?: (value: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions,
  onSuggestionSelected,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = React.useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<
    string[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    if (userInput.trim()) {
      const filtered = suggestions
        .filter((suggestion) =>
          suggestion.toLowerCase().includes(userInput.toLowerCase())
        )
        .slice(0, 3);
      setFilteredSuggestions(filtered);
      setIsSuggestionsVisible(true);
    } else {
      setFilteredSuggestions([]);
      setIsSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (inputRef.current) {
      inputRef.current.value = suggestion;
    }
    setFilteredSuggestions([]);
    setIsSuggestionsVisible(false);
    if (onSuggestionSelected) {
      onSuggestionSelected(suggestion);
    }
  };

  return (
    <div>
      <InputField ref={inputRef} onChange={handleInputChange} />
      {isSuggestionsVisible && (
        <SuggestionsList
          suggestions={filteredSuggestions}
          onSelect={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default Autocomplete;
