import React from "react";
import Table from "../components/Table";

const transations = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-700 text-gray-300">
      <Table />
      <div className="px-4 flex  justify-center">
        {/* <!-- Previous Button --> */}
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </a>

        {/* <!-- Next Button --> */}
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
