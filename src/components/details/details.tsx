import { useEffect } from 'react';
import { SearchResult, DetailsProps } from '../../types';
import { useDispatch } from 'react-redux';
import {
  setSearchResults,
  startLoading,
  endLoading,
} from '../../reducers/detailsReduser';

const Details = ({ name, setCharacterData }: DetailsProps) => {
  const dispatch = useDispatch();
  const encodedName = name.replace(/ /g, '%20');
  useEffect(() => {
    dispatch(startLoading());
    const url = `https://swapi.dev/api/people/?search=${encodedName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setSearchResults(data));
        dispatch(endLoading());
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
      })
      .finally(() => {
        dispatch(endLoading());
      });
  }, [name, setCharacterData]);

  return <h1>Loading...</h1>;
};

export default Details;
