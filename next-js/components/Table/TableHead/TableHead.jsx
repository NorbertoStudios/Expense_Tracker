import React from 'react'

function TableHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-4">
          #
        </th>
        <th scope="col" className="py-3 px-6">
          Transactions
        </th>
        <th scope="col" className="py-3 px-6">
          Category
        </th>
        <th scope="col" className="py-3 px-6">
          Amount
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
