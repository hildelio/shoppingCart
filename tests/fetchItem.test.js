require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function')
  });

  it('Execute a função fetchItem com o argumento MLB1615760527 e teste se fetch foi chamada', async () => {
    const data = await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  it('Teste se, ao chamar a função fetchItem com o argumento MLB1615760527, a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {
    const data = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    try {
      await fetchItem();
    } catch(error) {
      expect(error).toEqual("You must provide an url");
    };
  });
});
