const deliverPizza = (pizzaName) => {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  const makePizza = (pizzaName) => {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  const makeMessage = (pizzaName, callback) => {
    return callback(pizzaName);
  }
  
  console.log(makeMessage("Royal Grand", makePizza));
  