export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: "Pizza",
    price: 7
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: "Pizza",
    price: 8
  },
  {
    name: 'Hawaiian Pizza',
    img: '/img/hawaiian.jpg',
    section: "Pizza",
    price: 10.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 9.5
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 6
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 4
  },
  {
    img: "/img/gyro.jpeg",
    name: "Gyro",
    section: "Sandwich",
    price: 3
  },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 5
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 3.5
  },
  {
    img: "/img/drinks.jpg",
    price: 1,
    name: "Drinks",
    section: "Drinks",
    choices: ["Coke", "Mr Pibb", "Root Beer", "Dr Pepper", "Tea", "Beer", "Wine"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});