export const tableTitles = ["#", "transations", "category", "amount"];
export const amountSign = { plus: { name: "+" }, minus: { name: "-" } };
export const category = {
  food: {
    id: 0,
    name: "Food",
  },
  restaurant: {
    id: 1,
    name: "Restaurant",
  },
  home_improvement: {
    id: 2,
    name: "Home Improvements",
  },
  gas: {
    id: 3,
    name: "Gas",
  },
  deposit: {
    id: 4,
    name: "Deposit",
  },
  subcription: {
    id: 5,
    name: "Subcription",
  },
};

export const tableItemsMock = [
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
      alt: "Jese image",
    },
    id: "0",
    name: "Walmart",
    category: category.food.name,
    amount: "30.13",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      alt: "Jese image",
    },
    id: "1",
    name: "Home Depot",
    category: category.home_improvement.name,
    amount: "650.45",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
      alt: "Jese image",
    },
    id: "2",
    name: "Paycheck",
    category: category.deposit.name,
    amount: "1,050.45",
    amountSign: amountSign.plus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/4.webp",
      alt: "Jese image",
    },
    id: "3",
    name: "Gas",
    category: category.gas.name,
    amount: "50.25",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
      alt: "Jese image",
    },
    id: "4",
    name: "Lowes",
    category: category.home_improvement.name,
    amount: "350.45",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      alt: "Jese image",
    },
    id: "5",
    name: "Apple Music",
    category: category.subcription.name,
    amount: "20.95",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      alt: "Jese image",
    },
    id: "5",
    name: "Apple Music",
    category: category.subcription.name,
    amount: "20.95",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      alt: "Jese image",
    },
    id: "5",
    name: "Apple Music",
    category: category.subcription.name,
    amount: "20.95",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      alt: "Jese image",
    },
    id: "5",
    name: "Apple Music",
    category: category.subcription.name,
    amount: "20.95",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      alt: "Jese image",
    },
    id: "5",
    name: "Apple Music",
    category: category.subcription.name,
    amount: "20.95",
    amountSign: amountSign.minus,
  },
  {
    image: {
      src: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      alt: "Jese image",
    },
    id: "5",
    name: "Apple Music",
    category: category.subcription.name,
    amount: "20.95",
    amountSign: amountSign.minus,
  },
];
