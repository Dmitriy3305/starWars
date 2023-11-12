import React, { useContext, useState } from 'react';
import Details from '../details/details';
import { SearchResult } from '../../types';
import GlobalContext from '../globalContext';

const CharacterData: React.FC = () => {
  const [selectedDetailIndex, setSelectedDetailIndex] = useState<number | null>(
    null
  );
  const [isLoading] = useState(false);
  const [characterData, setCharacterData] = useState<SearchResult[]>([]);

  const context = useContext(GlobalContext);

  const handleShowDetails = (index: number) => {
    if (selectedDetailIndex === index) {
      setSelectedDetailIndex(null);
    } else {
      setSelectedDetailIndex(index);
    }
  };

  return (
    <div className="search-results">
      {context.results.map((result, index) => (
        <div key={result.name} className="results-items">
          <h2 className="results-name">{result.name}</h2>
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
                    {result.height && (
                      <p className="results-item">Height: {result.height}</p>
                    )}
                    {result.hair_color && (
                      <p className="results-item">
                        Hair color: {result.hair_color}
                      </p>
                    )}
                    {result.skin_color && (
                      <p className="results-item">
                        Skin color: {result.skin_color}
                      </p>
                    )}
                    {result.eye_color && <p>Eye color: {result.eye_color}</p>}
                    {result.birth_year && (
                      <p className="results-item">
                        Birth year: {result.birth_year}
                      </p>
                    )}
                    {result.gender && (
                      <p className="results-item">Gender: {result.gender}</p>
                    )}
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
