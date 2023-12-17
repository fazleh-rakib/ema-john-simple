export const addToCart = (id) => {
  let quantity = localStorage.getItem(id);
  if (quantity) {
    console.log("exist");
    const newQuantity = parseInt(quantity) + 1;

    localStorage.setItem(id, newQuantity);
  } else {
    console.log("new");
    localStorage.setItem(id, 1);
  }
};
