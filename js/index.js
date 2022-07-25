// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const subtotalValue = price * quantity;
  // console.log(subtotalValue)
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  console.log(products);

  products.forEach((product) => {
    updateSubtotal(product);
  });

  // for (let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i]);
  // }

  // ITERATION 3
  const subtotals = document.querySelectorAll('.subtotal span');
  //console.log(subtotals);

  let totalValue = 0;
  subtotals.forEach((subtotal) => {
    return totalValue += parseFloat(subtotal.innerHTML)
  });

  console.log(totalValue);

  const total = document.querySelector('#total-value span');
  console.log(total)
  total.innerHTML = totalValue
}

// ITERATION 4

const removeBtns = document.querySelectorAll('.btn-remove')
removeBtns.forEach((button) => {
  button.addEventListener('click', removeProduct)
})

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


