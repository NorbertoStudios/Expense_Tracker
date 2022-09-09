import React from "react";

import Image from "next/image";
import moment from "moment";

export const TableTransation = ({ tableItems }) => {
  return (
    <>
      {tableItems.map((item, i) => (
        <tr
          key={i}
          className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
        >
          {/* className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"> */}
          <td className="p-4 w-4">{i}</td>
          <th
            scope="row"
            className="flex items-center py-4 px-6 whitespace-nowrap text-white"
          >
            {item.image && (
              <Image
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
                src={item.image.src}
                alt={item.image.alt}
              />
            )}
            <div className="pl-3">
              <div className="text-base font-semibold text-gray-300">
                {item.name}
              </div>
              <div className="font-normal text-gray-500">description</div>
            </div>
          </th>
          <td className="py-4 px-6">{item.date}</td>
          <td className="py-4 px-6">{item.category}</td>
          <td className="py-4 px-6">
            <div className="flex items-center">
              {item.amountSign && (
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    item.amountSign.name === "+" ? "bg-green-400" : "bg-red-400"
                  }  mr-2`}
                ></div>
              )}
              ${item.amount && item.amount.toLocaleString()}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export const TablePayoff = ({ tableItems }) => {
  const reformatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <>
      {tableItems.map((item, i) => (
        <tr
          key={i}
          className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
        >
          <td className="p-4 w-4">{i}</td>
          {/* <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th> */}

          <th
            scope="row"
            className="flex items-center py-4 px-6 whitespace-nowrap text-white"
          >
            {/* {item.image && (
              <Image
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
                src={item.image.src}
                alt={item.image.alt}
              />
            )} */}
            {/* <div className="pl-3"> */}
            <div className="text-base font-semibold text-gray-300">
              {item.name}
              {/* </div> */}
            </div>
          </th>
          <td className="py-4 px-6">${item.currentBalance.toLocaleString()}</td>
          <td className="py-4 px-6">{item.rate}%</td>
          <td className="py-4 px-6">${item.minimumPayment}</td>
          <td className="py-4 px-2">{moment(item.dueDate).format("L")}</td>
          <td className="py-4 px-6">
            <a
              href="#"
              type="button"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};
