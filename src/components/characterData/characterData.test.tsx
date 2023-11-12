import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CharacterData from './characterData';
import GlobalContext from '../globalContext';
import { SearchResult } from '../../types';
import 'isomorphic-fetch';

describe('CharacterData', () => {
  it('when clicked, "show details" should change to "hide', () => {
    const mockResults: SearchResult[] = [
      {
        name: 'Luke Skywalker',
        height: 172,
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'yellow',
        birth_year: '19BBY',
        gender: 'male',
        mass: 0,
      },
    ];

    const mockContext = {
      searchTerm: 'Luke Skywalker',
      results: mockResults,
    };

    const { getByText } = render(
      <GlobalContext.Provider value={mockContext}>
        <CharacterData />
      </GlobalContext.Provider>
    );

    const showDetailsButton = getByText('show details');
    fireEvent.click(showDetailsButton);
    expect(getByText('hide')).toBeInTheDocument();
  });
});
