import getData from '../../utils/getData';
describe('Fetch api', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    test('Llamar API y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({
            data: '12345',
        }));
        return getData('https://www.google.com')
            .then((response) => {
                expect(response.data).toEqual('12345');
            });
        // expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com')
    });
});
