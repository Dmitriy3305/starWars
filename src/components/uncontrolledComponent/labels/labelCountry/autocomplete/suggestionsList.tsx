import styles from '../labelCountry.module.css';
import { useDispatch } from 'react-redux';
import { setCountryReducer } from '../../../../../reducers/uncontrolled/countryReduser';

interface SuggestionsListProps {
  suggestions: string[];
  onSelect: (value: string) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  onSelect,
}) => {
  const dispatch = useDispatch();
  const handleSelect = (suggestion: string) => {
    dispatch(setCountryReducer(suggestion));
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
