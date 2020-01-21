var faker = require('faker');

var database = { cars: []};

for (var i = 1; i<= 300; i++) {
  database.cars.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?car",
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));