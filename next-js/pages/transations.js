import React from "react";
import Table from "../components/Table";
import { tableTitles, tableItemsMock } from "../constant/table-constant";

const transations = () => {


  return (
    <div className="flex flex-col w-full h-screen bg-gray-700 text-gray-300">
      <Table 
      tableTitles={tableTitles}
      tableRow = {tableItemsMock}
      type="transations"
      />
      <div className="px-4 flex  justify-center">
        {/* <!-- Previous Button --> */}
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg border bg-gray-800 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
        >
          Previous
        </a>

        {/* <!-- Next Button --> */}
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium rounded-lg border bg-gray-800 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
        >
          Next
        </a>
      </div>
      <div className="flex-1"></div>
      <footer className="flex mt-4 p-4 border-t h-10 justify-center items-center text-center">
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
};

export default transations;
