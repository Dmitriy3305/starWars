import { Dispatch, SetStateAction, useEffect } from 'react';
import { ResultsProps, SearchResult } from '../types';

interface DetailsProps {
  name: string;
  setCharacterData: Dispatch<SetStateAction<SearchResult[]>>;
}

interface Data {
  results: ResultsProps[];
}

const Details = ({ name, setCharacterData }: DetailsProps) => {
  const encodedName = name.replace(/ /g, '%20');
  useEffect(() => {
    const url = `https://swapi.dev/api/people/?search=${encodedName}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data: Data) => {
        setCharacterData((prevState: SearchResult[]) => {
          if (prevState.length === 0) {
            return data.results;
          }
          const newData = prevState.map((character) => {
            if (character.name === name) {
              return data.results[0];
            }
            console.log(character);
            return data.results[0];
          });
          console.log(newData);
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
