import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import { v4 as uuid } from "uuid";

import { category } from "../constant/table-constant";
import { tableTitle, tableItemsMock } from "../constant/payoff-constant";

const debtMock = {

  id: "",
  name: "",
  createAt: new Date().toLocaleDateString(),
  modifiedAt: new Date().toLocaleDateString(),
  dueDate: new Date().toISOString().slice(0, 10),
  rate: 0.0,
  category: category.credit_card.name,
  startingBalance: 0,
  currentBalance: 0,
  minimumPayment: 0,
}

const payoff = () => {
  const [mock, setMock] = useState(tableItemsMock);

  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [value, setValue] = useState("snowball");
  const [plan, setPlan] = useState([]);
  const [totalBal, setTotalBal] = useState({
    currentBalance: 0,
    minimumPayment: 0,
  });
  const [addDebt, setAddDebt] = useState(debtMock);

  const handleModalClick = (e) => {
    let t = e.target.name;
    let ct = e.currentTarget.name;
    if (t === "addDebt" || ct === "addDebt") {
      setAddModal(!addModal);
    } else {
      setModal(!modal);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // let name = e.target.name;
    if (name === "strategy") {
      console.log(e.target.value);
      setValue(e.target.value);
    }
  };

  const handleAddDebtChange = (e) => {
    const { name, value } = e.target;

    setAddDebt((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMock((old) => [...old, addDebt]);
    setAddModal(false);
    setAddDebt(debtMock)
  };

  // const modalCreatePlan = (
  //   <div
  //     id="authentication-modal"
  //     tabIndex="-1"
  //     className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
  //     aria-modal="true"
  //     role="dialog"
  //   >
  //     <div className="relative p-4 w-full max-w-md h-full md:h-auto">
  //       <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
  //         <button
  //           type="button"
  //           className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
  //           onClick={handleModalClick}
  //         >
  //           <svg
  //             aria-hidden="true"
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //               clipRule="evenodd"
  //             ></path>
  //           </svg>
  //           <span className="sr-only">Close modal</span>
  //         </button>

  //         <div className="py-6 px-6 lg:px-8">
  //           <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
  //             Create Pay Off Plan
  //           </h3>
  //           <form className="space-y-6" onSubmit={handleSubmit}>
  //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
  //               Choose your strategy
  //             </label>
  //             <select
  //               id="strategy"
  //               name="strategy"
  //               onChange={handleChange}
  //               value={value}
  //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             >
  //               <option value="snowball">
  //                 Snowball (Lowest Balance First)
  //               </option>
  //               <option value="avalanche">
  //                 Avalanche (Highest Interest rate First)
  //               </option>
  //               <option value="table-order">Table order</option>
  //             </select>
  //             <div>
  //               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
  //                 Name of Plan
  //               </label>
  //               <input
  //                 type="text"
  //                 name="name"
  //                 id="name"
  //                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
  //                 placeholder="default"
  //                 onChange={handleChange}
  //                 value={name}
  //               />
  //             </div>

  //             <button
  //               type="submit"
  //               className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //             >
  //               Create Plan
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const modalAddDebt = (
    <div
      id="add-debt"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={handleModalClick}
            name="addDebt"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add Debt
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name of the debt"
                  onChange={handleAddDebtChange}
                  value={addDebt.name}
                  required
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Current Balance
                  </label>
                  <input
                    type="number"
                    name="currentBalance"
                    id="currentBalance"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0"
                    onChange={handleAddDebtChange}
                    value={addDebt.currentBalance}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={handleAddDebtChange}
                    value={addDebt.dueDate}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Rate %
                  </label>
                  <input
                    type="number"
                    name="rate"
                    id="rate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0%"
                    onChange={handleAddDebtChange}
                    value={addDebt.rate}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Minimun Payment
                  </label>
                  <input
                    type="number"
                    name="minimumPayment"
                    id="minimumPayment"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0"
                    onChange={handleAddDebtChange}
                    value={addDebt.minimumPayment}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Debt
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  const displayAddDebt = () => {};

  const displayPlan = (name, value) => (
    <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      {/* <a
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
    </div>
  );


  const totalCal = () => {
    let a = 0;
    let b = 0;
    tableItemsMock.map((item) => {
      (a += item.currentBalance), (b += item.minimumPayment);
    });

    setTotalBal({
      currentBalance: a,
      minimumPayment: b,
    });
  };

  useEffect(() => {
    totalCal();
  }, []);

  const tableCustomTotal = (
    <tr className="font-semibold ">
      <td></td>

      <th scope="row" className="py-3 px-6 text-base text-gray-300">
        Total
      </th>
      <td className="py-4 px-6">${totalBal.currentBalance.toLocaleString()}</td>
      <td></td>
      <td className="py-4 px-6">${totalBal.minimumPayment.toLocaleString()}</td>
    </tr>
  );

  return (
    <div className="flex p-4 flex-col w-full h-full bg-gray-700 text-gray-300">
      <div className="flex justify-center p-6 text-lg font-bold">
        <h1>Pay Off Page</h1>
      </div>

      {/* <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleModalClick}
        >
          Create plan
        </button>
      </div>
      {modal && modalCreate} */}
      {/* {plan[0] != undefined && displayPlan(plan[0].name)} */}
      {/* {console.log(plan)} */}
      {/* <Table type="payoff" data={[]} /> */}

      <div>
        <Table
          title="Debts"
          tableTitles={tableTitle}
          tableRow={mock}
          type="payoff"
          customTotal={tableCustomTotal}
        />
      </div>
      {addModal && modalAddDebt}

      <div className="flex justify-end p-4">
        <button
          type="button"
          name="addDebt"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleModalClick}
        >
          Add Debt
        </button>
      </div>

      {/* If plan is empty */}
      <div className="flex flex-col items-center p-6 text-center">
        <p>
          Debt is the reason why you are not happy <br />
          Let's fix it by creating a plan and achive happines!!
        </p>
        <div className="p-6">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleModalClick}
          >
            Create plan
          </button>
        </div>
      </div>

     {plan && <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
}

      <div className="flex-1"></div>
      <footer className="flex mt-4 p-4 border-t h-10 justify-center items-center text-center">
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
};

export default payoff;

/*
We need a date 
Grabing the transations we can deduce or link the current debt 
we can add custom and watch htmlFor those or add a payment manually

snowball - lowest balance first
avalanche - highest interest first
*/
