const { fetchVerifiedCatFacts } = require('../src/catFacts');
const axios = require('axios');

jest.mock('axios');

describe('fetchVerifiedCatFacts function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should make a GET request to the Cat Facts API', async () => {
    axios.get.mockResolvedValue({ data: [] }); // Mock empty response for simplicity
    await fetchVerifiedCatFacts();
    expect(axios.get).toHaveBeenCalledWith('https://cat-fact.herokuapp.com/facts');
  });

  it('should return only verified cat facts', async () => {
    const mockData = [
      { status: { verified: true }, text: "Verified fact 1" },
      { status: { verified: false }, text: "Unverified fact" },
      { status: { verified: true }, text: "Verified fact 2" },
    ];
    axios.get.mockResolvedValue({ data: mockData });
    const facts = await fetchVerifiedCatFacts();
    expect(facts).toEqual(mockData.filter(fact => fact.status.verified));
  });

  it('should log an error message if the request fails', async () => {
    const errorMessage = 'Network Error';
    console.error = jest.fn();
    axios.get.mockRejectedValue(new Error(errorMessage));
    await fetchVerifiedCatFacts();
    expect(console.error).toHaveBeenCalledWith(errorMessage);
  });
});
