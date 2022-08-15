const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    await getSavedCartItems()
    expect(localStorage.getItem).toBeCalled();
  });

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems', async () => {
    await getSavedCartItems('cartItem')
    expect(localStorage.getItem).toBeCalledWith('cartItem');
  });


});
