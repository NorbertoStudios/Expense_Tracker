import { category } from "./table-constant"

export const tableTitle = ["#","Name", "Current Balance", "Rate", "Minimun Payment", "Due Date", "Action"]

export const tableItemsMock = [
    {
    id: "0",
    name: "Capital One",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '2022-09-05',
    rate: 19.99,
    category: category.credit_card.name,
    startingBalance: 1004.97,
    currentBalance: 900.95,
    minimumPayment: 45.00
},
    {
    id: "1",
    name: "Wells Fargo",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '2022-09-05',
    rate: 29.99,
    category: category.credit_card.name,
    currentBalance: 1900.95,
    minimumPayment: 75.00
},
]