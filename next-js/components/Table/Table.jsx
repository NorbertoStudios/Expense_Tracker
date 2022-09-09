import React from "react";
import TableHead from "./TableHead/TableHead";
import { TableTransation, TablePayoff } from "./TableRow";

function Table({ title, type, tableTitles, tableRow, customTotal }) {
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
  const typeOfTable = (type, tableRow) => {
    switch (type) {
      case "transations":
        return <TableTransation tableItems={tableRow} />;
      case "payoff":
        return <TablePayoff tableItems={tableRow} />;
      // default:
      //   return 'foo';
    }
  };

  return (
    <>
      {title && <h1 className="pt-4 pb-2 flex justify-center space-x-4 font-bold ">
        {title}
      </h1>}

      <div className="m-4 overflow-auto sm:rounded-lg shadow-md ">
        <table className=" w-full text-sm text-left text-gray-400">
          <TableHead tableTitles={tableTitles} />
          <tbody>{typeOfTable(type, tableRow)}</tbody>
          <tfoot>
            {customTotal ? (
              customTotal
            ) : (
              <tr className="font-semibold ">
                <td></td>
                <td></td>
                <td></td>
                <th scope="row" className="py-3 px-6 text-base text-gray-300">
                  Total Expenses
                </th>
                <td
                  className={`py-3 px-6 ${
                    Math.sign(current_total) === 1
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  ${current_total.toFixed(2)}
                </td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Table;
