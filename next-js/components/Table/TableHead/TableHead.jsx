import React from 'react'
import { tableTitles } from '../../../constant/table-constant'

function TableHead() {
  return (
    <thead className="sticky top-0 z-10 text-xs uppercase bg-gray-700 text-gray-400">
      <tr>
        {tableTitles.map((title, i) => (
          <th
          key={title} 
          scope="col" 
          className={i === 0 ? "p-4" : "py-3 px-6"}>
            {title}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
