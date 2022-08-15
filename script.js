const cartList = document.getElementsByClassName('cart__items')[0];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const productSelected = event.target;
  productSelected.remove();
  saveCartItems(cartList.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const buttonEmptyCart = document.getElementsByClassName('empty-cart')[0];

function emptyCart() {
  cartList.innerHTML = '';
  saveCartItems(cartList.innerHTML);
}

buttonEmptyCart.addEventListener('click', emptyCart);

console.log(getSkuFromProductItem);
const sectionItems = document.getElementsByClassName('items')[0];

window.onload = async () => {
  const computers = await fetchProducts('computador');
  const resultsComp = computers.results;
  const savedItems = getSavedCartItems();
  cartList.innerHTML = savedItems;
  const liFromCartList = cartList.children;
  Array.from(liFromCartList).forEach((e) => e.addEventListener('click', cartItemClickListener));
  resultsComp.forEach((e) => {
    const itemElement = createProductItemElement({ sku: e.id, name: e.title, image: e.thumbnail });
    const buttonAddCart = itemElement.getElementsByClassName('item__add')[0];
    buttonAddCart.addEventListener('click', () => {
      const prod = createCartItemElement({ sku: e.id, name: e.title, salePrice: e.price });
      cartList.appendChild(prod);
      saveCartItems(cartList.innerHTML);
    });
    sectionItems.appendChild(itemElement);
  });
};