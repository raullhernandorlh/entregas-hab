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
  // TODO: validar los valores recibidos

  products.push({
    id: id++,
    name: req.body.name,
    stock: req.body.stock,
    price: req.body.price
  })

  res.send();
}


const put = (req, res) => {

  //TODO Validar los valores recibidos

  console.log(req.params);
  let { id } = req.params;
  id = parseInt(id);
  console.log(id);

  if (req.body.name === undefined ||
    req.body.stock === undefined ||
    req.body.price === undefined) {
    res.status(400).send();
    return;
  }

  let searchedElement = products.find(item => item.id === id);
  if (searchedElement === undefined) {
    res.status(404).send();
    return;
  }

  searchedElement.name = req.body.name;
  searchedElement.stock = req.body.stock;
  searchedElement.price = req.body.price;

  res.send();
};


module.exports = {
  add,
  put,
  list
}


