import React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

import CharacterData from './characterData';

const mockResults = [
  {
    name: 'Luke Skywalker',
    height: '172',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'yellow',
    birth_year: '19BBY',
    gender: 'male',
  },
];

const mockContext = {
  results: mockResults,
};

type Queries = typeof import('@testing-library/dom/types/queries');

const setup = (): RenderResult<Queries, HTMLElement> => {
  const utils = render(<CharacterData />, {
    wrapper: ({ children }) => (
      <MockGlobalContext.Provider value={mockContext}>
        {children}
      </MockGlobalContext.Provider>
    ),
  });

  return {
    ...utils,
  };
};

const MockGlobalContext = React.createContext(mockContext);

test('render the relevant card data', () => {
  setup();

  const characterName = screen.queryAllByTestId('results-name');
  characterName.forEach((details, index) => {
    const result = mockResults[index];
    expect(details).toHaveTextContent(result.name);
  });
});

test('render the relevant characters details', () => {
  setup();

  const characterDetails = screen.queryAllByTestId('results-item');
  characterDetails.forEach((details, index) => {
    const result = mockResults[index];
    expect(details).toHaveTextContent(`Height: ${result.height}`);
    expect(details).toHaveTextContent(`Hair color: ${result.hair_color}`);
    expect(details).toHaveTextContent(`Skin color: ${result.skin_color}`);
    expect(details).toHaveTextContent(`Birth year: ${result.birth_year}`);
    expect(details).toHaveTextContent(`Gender: ${result.gender}`);
  });
});

test('render loader when loading details', () => {
  setup();

  const loader = screen.queryAllByTestId('loader');
  expect(loader.length).toBe(0);

  const showDetailsButtons = screen.queryAllByTestId('show-details-button');
  showDetailsButtons.forEach((button) => fireEvent.click(button));

  const updatedLoader = screen.queryAllByTestId('loader');
  expect(updatedLoader.length).toBe(showDetailsButtons.length);
});
