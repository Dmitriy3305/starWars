import React, { useState } from 'react';
import { ResultsProps, SearchResult } from '../types';
import Details from './details';

const CharacterData = (props: ResultsProps) => {
  const { results } = props;
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
        <div key={result.name}>
          <h1 className="results-item">Name: {result.name}</h1>
          <button onClick={() => handleShowDetails(index)}>
            {selectedDetailIndex === index ? 'hide' : 'show details'}
          </button>
          {isLoading ? (
            <div className="loader"></div>
          ) : selectedDetailIndex === index ? (
            <>
              {characterData.find(
                (character) => character.name === result.name
              ) ? (
                <div>
                  {result.height && <h2>Height: {result.height}</h2>}
                  {result.hair_color && (
                    <h2>Hair color: {result.hair_color}</h2>
                  )}
                  {result.skin_color && (
                    <h2>Skin color: {result.skin_color}</h2>
                  )}
                  {result.eye_color && <h2>Eye color: {result.eye_color}</h2>}
                  {result.birth_year && (
                    <h2>Birth year: {result.birth_year}</h2>
                  )}
                  {result.gender && <h2>Gender: {result.gender}</h2>}
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
      ))}
    </div>
  );
};

export default CharacterData;
