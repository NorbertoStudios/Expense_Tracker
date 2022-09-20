import React from "react";
import TableHead from "./TableHead/TableHead";
import { TableTransation, TablePayoff, TablePayoffSnowball } from "./TableRow";
import {tableItemsMock} from '../../constant/payoff-constant'


function Table({
  title,
  type,
  tableTitles,
  tableRow,
  customTotal,
  customTitle,
  spaces,
}) {
  let current_total = 0.0;
  tableItemsMock.forEach((item) => (current_total += item.minimumPayment));
  // if (item.amountSign.name === '+')

  // {
  // console.log(current_total);
  // }
  // else {current_total -= item.amount
  //   console.log(current_total);
  // }
  // return current_total

  // })
  console.log(current_total);
  const typeOfTable = (type, tableRow) => {
    switch (type) {
      case "transations":
        return <TableTransation tableItems={tableRow} />;
      case "payoff":
        return <TablePayoff tableItems={tableRow} />;
      case "payoff-snowball":
        return <TablePayoffSnowball tableItems={tableRow} />;
      // default:
      //   return 'foo';
    }
  };

  const customPlanTotal = (
    <tr className="font-semibold ">
      <td></td>
      <td></td>
      <th scope="row" className="py-3 px-6 text-base text-gray-300">
        {customTitle}
      </th>
      <td
        className={`py-3 px-6 ${
          Math.sign(current_total) === 1 ? "text-green-300" : "text-red-300"
        }`}
      >
        ${current_total.toFixed(2)}
      </td>
    </tr>
  );

  // space number
  // custom array object
  const customFooter = (spaces, custom) => {
    let tableTitleSpace = [];
    let tableTotalSpace = [];
    for (let space = 0; space < spaces.title; space++)
      tableTitleSpace.push(<td></td>);
    for (let space = 0; space < spaces.total; space++)
      tableTotalSpace.push(<td></td>);

    return (
      <tfoot>
        <tr className="font-semibold ">
          {tableTitleSpace.map((space) => space)}
          <th scope="row" className="py-3 px-6 text-base text-gray-300">
            {customTitle}
          </th>
          {tableTotalSpace.map((space) => space)}
          <td
            className={`py-3 px-6 ${
              Math.sign(current_total) === 0 ? "text-green-300" : "text-red-300"
            }`}
          >
            ${current_total.toFixed(2)}
          </td>
        </tr>
      </tfoot>
    );
  };

  return (
    <>
      {title && (
        <h1 className="pt-4 pb-2 flex justify-center space-x-4 font-bold ">
          {title}
        </h1>
      )}

      <div className="m-4 overflow-auto sm:rounded-lg shadow-md ">
        <table className=" w-full text-sm text-left text-gray-400">
          <TableHead tableTitles={tableTitles} />
          <tbody>{typeOfTable(type, tableRow)}</tbody>
          {spaces && customFooter(spaces, "")}
        </table>
      </div>
    </>
  );
}

export default Table;
