const makePizza = (pizzaName, callback) => {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", (pizzaName) => {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  
  makePizza("Ultracheese", (pizzaName) => {
    console.log(`Eating pizza ${pizzaName}.`);
  });
  