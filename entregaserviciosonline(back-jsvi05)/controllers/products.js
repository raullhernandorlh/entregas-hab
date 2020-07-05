const validator = require('validator');

let products = [];

let id = 1;


const list = (req, res) => {

  let filteredProducts = products;

  const filterName = req.query['name'];

  if (filterName !== undefined) {

    filteredProducts = products.filter(product => product.name === filterName);
  }

  res.json(filteredProducts);

}

const add = (req, res) => {
  
  const name = req.body.name;
  const stock = req.body.name;
  const price = req.body.price;

  if(name === undefined || stock === undefined || price === undefined){
    res.status(400).send();
    return;
  }

  if (validator.isNumber(name) || validator.isString(stock) || validator.isString(price)){
    console.log("One of more of the objects values do not have the appropiate values")
    return;
  }


  products.push({
    id: id++,
    name: req.body.name,
    stock: req.body.stock,
    price: req.body.price
  })

  res.send();
}


const put = (req, res) => {

  let { id } = req.params;
  id = parseInt(id);
  
  const name = req.body.name;
  const stock = req.body.stock;
  const price = req.body.price;


  if (name === undefined || stock === undefined || price === undefined) {
    res.status(400).send();
    return;
  }

  let searchedElement = products.find(item => item.id === id);
  if (searchedElement === undefined) {
    res.status(404).send();
    return;
  }

  searchedElement.name = name;
  searchedElement.stock = stock;
  searchedElement.price = price;

  res.send();
};


module.exports = {
  add,
  put,
  list
}


