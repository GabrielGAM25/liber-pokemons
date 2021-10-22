import APIClient from 'shared/apiClient';

import API from '.';

jest.mock('shared/apiClient', () => ({
  __esModule: true,
  default: { get: jest.fn() },
}));

describe('API', () => {
  describe('getPokemonNames', () => {
    it('calls APIClient.get with the corret path', () => {
      APIClient.get.mockReturnValueOnce(Promise.resolve({ results: [] }));

      API.getPokemonNames();

      expect(APIClient.get).toBeCalledWith('pokemon-species?limit=898');
    });

    it('returns the results names from the response object', async () => {
      const mockResults = [{ name: 'foo' }, { name: 'bar' }];
      APIClient.get.mockReturnValueOnce(Promise.resolve({ results: mockResults }));

      const response = await API.getPokemonNames();

      expect(response).toEqual(['foo', 'bar']);
    });
  });

  describe('getAbilityNames', () => {
    it('calls APIClient.get with the corret path', () => {
      const name = 'pikachu';
      APIClient.get.mockReturnValueOnce(Promise.resolve({ abilities: [] }));

      API.getAbilityNames(name);

      expect(APIClient.get).toBeCalledWith(`pokemon/${name}`);
    });

    it('returns the abilities from the response object', async () => {
      const name = 'pikachu';
      const mockAbilities = [{ ability: { name: 'foo' } }, { ability: { name: 'bar' } }];
      APIClient.get.mockReturnValueOnce(Promise.resolve({ abilities: mockAbilities }));

      const response = await API.getAbilityNames(name);

      expect(response).toEqual(['foo', 'bar']);
    });
  });
});
