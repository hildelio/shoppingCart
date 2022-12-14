require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function')
  });

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    const data = await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    const data = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    try {
      await fetchProducts();
    } catch(error) {
      expect(error).toEqual("You must provide an url");
    };
  });



  // implemente seus testes aqui

});
