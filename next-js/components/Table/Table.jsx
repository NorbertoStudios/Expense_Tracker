import React from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody';

import { tableItemsMock, title } from '../../constant/table-constant';

function Table() {

  let current_total = 0.0;
//   tableItemsMock.forEach((item) => { 
//     if (item.amountSign.name === '+') 
//     {current_total += item.amount
//     console.log(current_total);
//     } 
//     else {current_total -= item.amount
//       console.log(current_total);
// }
// return current_total

// })
// console.log(current_total)

  return (
    <>
      <h1 className="pt-4 pb-2 flex justify-center space-x-4 font-bold ">
      Transations
      </h1>
      {/* <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>

        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div> */}
      <div className="m-4  overflow-auto sm:rounded-lg shadow-md ">
        <table className=" w-full text-sm text-left text-gray-400">
          <TableHead />
          <TableBody />
          <tfoot>
            <tr className="font-semibold ">
              <td></td>
              <td></td>
              <td></td>
              <th scope="row" className="py-3 px-6 text-base text-gray-300">Total Expenses</th>
              <td className={`py-3 px-6 ${Math.sign(current_total) === 1 ? "text-green-300" : "text-red-300"}`}>${current_total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        {/* "bg-green-400" : "bg-red-400" */}

      </div>



    </>
  )
}

export default Table
