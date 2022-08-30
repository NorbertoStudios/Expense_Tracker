import React from 'react'
import { tableItemsMock } from '../../../constant/table-constant';
import Image from 'next/image';

const TableRow = () => {
  return (
    <>
    {
        tableItemsMock.map((item, i) => (
        <tr
        key={i}
         className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
         {/* className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"> */}
            <td className="p-4 w-4">{i}</td>
          <th
            scope="row"
            className="flex items-center py-4 px-6 whitespace-nowrap text-white"
          >
            <Image
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
              src={item.image.src}
              alt={item.image.alt}
            />
            <div className="pl-3">
              <div className="text-base font-semibold text-gray-300">{item.name}</div>
              <div className="font-normal text-gray-500">
                      description
                    </div>
            </div>
          </th>
          <td className="py-4 px-6">{item.date}</td>
          <td className="py-4 px-6">{item.category}</td>
          <td className="py-4 px-6">
            <div className="flex items-center">
                <div className={`h-2.5 w-2.5 rounded-full ${item.amountSign.name === "+" ? "bg-green-400" : "bg-red-400"}  mr-2`}></div>
              ${item.amount.toLocaleString()}
            </div>
          </td>

        </tr>
      ))
    }
    </>
  );
}

export default TableRow

