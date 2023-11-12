import { useEffect } from 'react';
import { SearchResult, DetailsProps } from '../../types';

const Details = ({ name, setCharacterData }: DetailsProps) => {
  const encodedName = name.replace(/ /g, '%20');
  useEffect(() => {
    const url = `https://swapi.dev/api/people/?search=${encodedName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacterData((prevState: SearchResult[]) => {
          if (prevState.length === 0) {
            return data.results;
          }
          const newData = prevState.map((character) => {
            if (character.name === name) {
              return data.results[0];
            }
            return data.results[0];
          });
          return newData;
        });
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [name, setCharacterData]);

  return <h1>Loading...</h1>;
};

export default Details;
