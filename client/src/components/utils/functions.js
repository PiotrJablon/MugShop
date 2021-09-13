export const addToStorage = (product) => {
  const items = (() => {
    const fieldValue = localStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();

  if (items.some(i => i.id === product.id)) {
    const itemIndex = items.findIndex((itm => itm.id === product.id));
    items[itemIndex].amount = items[itemIndex].amount + product.amount;
  } else {
    items.push({
      'id': product.id,
      'title': product.title,
      'price': product.price,
      'img': product.img,
      'amount': product.amount,
      'info': '',
    });
  }

  localStorage.setItem('cart', JSON.stringify(items));
};

export const addAmount = (id) => {
  const items = (() => {
    const fieldValue = localStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();

  if (items.some(i => i.id === id)) {
    const itemIndex = items.findIndex((itm => itm.id === id));
    items[itemIndex].amount = items[itemIndex].amount + 1;
  }

  localStorage.setItem('cart', JSON.stringify(items));
  window.location.reload(true);
};

export const removeAmount = (id) => {
  const items = (() => {
    const fieldValue = localStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();

  if (items.some(i => i.id === id)) {
    const itemIndex = items.findIndex((itm => itm.id === id));
    if (items[itemIndex].amount > 1) {
      items[itemIndex].amount = items[itemIndex].amount - 1;
    } else {
      items.splice(itemIndex, 1);
    }
  }

  localStorage.setItem('cart', JSON.stringify(items));
  
  if (items.length === 0) {
    localStorage.removeItem('cart');
  }

  window.location.reload(true);
};

export const removeItem = (id) => {
  const items = (() => {
    const fieldValue = localStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();

  if (items.some(i => i.id === id)) {
    const itemIndex = items.findIndex((itm => itm.id === id));
    items.splice(itemIndex, 1);
  }

  localStorage.setItem('cart', JSON.stringify(items));
  
  if (items.length === 0) {
    localStorage.removeItem('cart');
  }

  window.location.reload(true);
};

export const calculateItemTotal = (price, amount) => {
  return price * amount;
};

export const calculateTotal = (cart) => {
  const cartTotalPriceArray = [];
  for (let i = 0; i < cart.length; i++) {
    const itemTotalPrice = cart[i].price * cart[i].amount;
    cartTotalPriceArray.push(itemTotalPrice);
  }
  const sum = cartTotalPriceArray.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
};