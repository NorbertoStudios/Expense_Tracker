import { category } from "./table-constant"

export const tableTitle = ["#","Name", "Current Balance", "Rate", "Minimun Payment", "Due Date", "Action"]
export const tablePlanTitle = ["Order", "Current Balance", "APR","Total Interest Paid", "Payoff Date MM/YYYY","Minimunt Payment", "dueDate", "Action"]

export const planDescriptions = {
    snowball:"",
    avalanche: "",
    tableOrder:""
}

export const tableItemsMock = [
    {
    id: "0",
    name: "Capital One",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '20th',
    rate: 26.24,
    category: category.credit_card.name,
    startingBalance: 299.18,
    currentBalance: 921.58,
    minimumPayment: 30.00
},
    {
    id: "1",
    name: "Wells Fargo",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '02th',
    rate: 28.99,
    category: category.credit_card.name,
    startingBalance: 2004.97,
    currentBalance: 259.18,
    minimumPayment: 40.00
},
    {
    id: "2",
    name: "Barclays",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '12th',
    rate:29.24,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 7474.03,
    minimumPayment: 314.84
},
    {
    id: "3",
    name: "Home Depot",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '12th',
    rate:28.24,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 1742.01,
    // minimumPayment: 120.00
    minimumPayment: 47.00
},
    {
    id: "4",
    name: "Target",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '28th',
    rate:25.15,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 877.57,
    // minimumPayment: 180.00
    minimumPayment: 30.00
},
    {
    id: "5",
    name: "Tally",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '14th',
    rate:15.90,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 2787.65,
    minimumPayment: 95.00
    // minimumPayment: 65.00
},
    {
    id: "6",
    name: "Marcus",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '19th',
    rate:11.74,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 8117.23,
    minimumPayment: 398.51
},
    {
    id: "7",
    name: "Paypal",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '5th',
    rate:25.49,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 1631.55,
    minimumPayment: 44.00
},
    {
    id: "8",
    name: "Community Pay TY VISA",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '10th',
    rate:24.49,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 780.92,
    minimumPayment: 35.00
},
    {
    id: "9",
    name: "Community Pay TY",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '19th',
    rate:28.49,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 565.49,
    minimumPayment: 35.00
},
    {
    id: "10",
    name: "Best Buy",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '8th',
    rate:27.49,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 277.54,
    minimumPayment: 35.00
},
    {
    id: "11",
    name: "Pamela Capital One",
    createAt:new Date().toLocaleDateString(),
    modifiedAt: new Date().toLocaleDateString(),
    dueDate: '12th',
    rate:25.49,
    category: category.credit_card.name,
    startingBalance: 4004.97,
    currentBalance: 4821.20,
    minimumPayment: 141.00
},
]