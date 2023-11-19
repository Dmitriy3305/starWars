import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { startLoading, endLoading } from '../../reducers/detailsReducer';
import Details from './details';

const mockDispatch = vi.fn();

vi.stubGlobal(
  'fetch',
  vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [
            {
              name: 'Luke Skywalker',
              height: '172',
              hair_color: 'blond',
              skin_color: 'fair',
              eye_color: 'blue',
              birth_year: '19BBY',
              gender: 'male',
            },
          ],
        }),
    })
  )
);

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Details Component', () => {
  it('should dispatch correct actions and set character data on mount', async () => {
    const setCharacterDataMock = vi.fn();

    render(
      <Details name="Luke Skywalker" setCharacterData={setCharacterDataMock} />
    );

    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith(startLoading())
    );
    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith(endLoading())
    );

    it('should handle fetch error', async () => {
      render(<Details name="Error Case" setCharacterData={vi.fn()} />);

      await waitFor(() =>
        expect(mockDispatch).toHaveBeenCalledWith(startLoading())
      );
      await waitFor(() =>
        expect(mockDispatch).toHaveBeenCalledWith(endLoading())
      );
    });
  });
});
