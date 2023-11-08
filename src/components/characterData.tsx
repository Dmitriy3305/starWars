import React, { useState } from 'react';
import Details from './details';
import { CharacterDataProps, SearchResult } from '../types';

const CharacterData: React.FC<CharacterDataProps> = ({ results }) => {
  const [selectedDetailIndex, setSelectedDetailIndex] = useState<number | null>(
    null
  );
  const [isLoading] = useState(false);
  const [characterData, setCharacterData] = useState<SearchResult[]>([]);

  const handleShowDetails = (index: number) => {
    if (selectedDetailIndex === index) {
      setSelectedDetailIndex(null);
    } else {
      setSelectedDetailIndex(index);
    }
  };

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={result.name} className="results-items">
          <h1 className="results-item">{result.name}</h1>
          <div className="details-container">
            <button
              className="show-details"
              onClick={() => handleShowDetails(index)}
            >
              {selectedDetailIndex === index ? 'hide' : 'show details'}
            </button>
            {isLoading ? (
              <div className="loader"></div>
            ) : selectedDetailIndex === index ? (
              <>
                {characterData.find(
                  (character) => character.name === result.name
                ) ? (
                  <div className="characters-detail">
                    {result.height && <p>Height: {result.height}</p>}
                    {result.hair_color && (
                      <p>Hair color: {result.hair_color}</p>
                    )}
                    {result.skin_color && (
                      <p>Skin color: {result.skin_color}</p>
                    )}
                    {result.eye_color && <p>Eye color: {result.eye_color}</p>}
                    {result.birth_year && (
                      <p>Birth year: {result.birth_year}</p>
                    )}
                    {result.gender && <p>Gender: {result.gender}</p>}
                  </div>
                ) : (
                  <Details
                    setCharacterData={setCharacterData}
                    name={result.name}
                  />
                )}
              </>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterData;
