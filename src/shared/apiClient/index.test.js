import axios from 'axios';

import APIClient, { BASE_API_URL } from '.';

jest.mock('axios');

describe('APIClient', () => {
  describe('get(path, ...props)', () => {
    it('calls axios.get with the correct params', () => {
      const path = 'foo';
      const otherParams = ['foo', 'bar', 'baz'];
      axios.get.mockReturnValueOnce(Promise.resolve({}));

      APIClient.get(path, ...otherParams);

      expect(axios.get).toBeCalledWith(`${BASE_API_URL}/${path}`, ...otherParams);
    });

    it('extracts the data from the response body', async () => {
      const mockData = { foo: 'bar' };
      axios.get.mockReturnValueOnce(Promise.resolve({ data: mockData }));

      const response = await APIClient.get();

      expect(response).toEqual(mockData);
    });
  });
});
