import React from 'react';
import styles from '../labelCountry.module.css';

interface SuggestionsListProps {
  suggestions: string[];
  onSelect: (value: string) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  onSelect,
}) => (
  <ul className={styles.suggestionsList}>
    {suggestions.map((suggestion, index) => (
      <li
        key={index}
        onClick={() => onSelect(suggestion)}
        className={styles.suggestionsItem}
      >
        {suggestion}
      </li>
    ))}
  </ul>
);

export default SuggestionsList;
