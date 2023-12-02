import styles from '../labelCountry.module.css';

interface SuggestionsListProps {
  suggestions: string[];
  onSelect: (value: string) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  onSelect,
}) => {
  const handleSelect = (suggestion: string) => {
    onSelect(suggestion);
  };

  return (
    <ul className={styles.suggestionsList}>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => handleSelect(suggestion)}
          className={styles.suggestionsItem}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
