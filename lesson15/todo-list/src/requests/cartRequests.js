const cartDataInitial = [];

if (!localStorage.getItem("todos_cart"))
  localStorage.setItem("todos_cart", JSON.stringify(cartDataInitial));

export function getCart() {
  return new Promise(function (resolve, reject) {
    const cartData = JSON.parse(localStorage.getItem("todos_cart"));
    setTimeout(() => resolve(cartData), 1000);
  });
}

export function addToCart(todo) {
  return new Promise(function (resolve, reject) {
    const cartData = JSON.parse(localStorage.getItem("todos_cart"));
    const index = cartData.findIndex((item) => item.id === todo.id);
    if (index === -1) {
      cartData.push({ ...todo, amount: 1 });
    } else {      
      cartData[index].amount++;
    }

    localStorage.setItem("todos_cart", JSON.stringify(cartData));
    setTimeout(() => resolve(cartData), 1000);
  });
}

export function deleteFromCart(todo) {
  return new Promise(function (resolve, reject) {
    const cartData = JSON.parse(localStorage.getItem("todos_cart"));
    const index = cartData.findIndex((item) => item.id === todo.id);
    if (index !== -1) {
      if (cartData[index].amount === 1) {
        cartData.splice(index, 1);
      } else {
        cartData[index].amount--;
      }
      localStorage.setItem("todos_cart", JSON.stringify(cartData));
    }
    setTimeout(() => resolve(cartData), 1000);
  });
}
