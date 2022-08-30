import React from "react";
import Table from "../components/Table";

const transations = () => {
  return (
    <div className="flex flex-col w-full bg-gray-700 text-gray-300">
      <main className="p-4 flex-1">
        <Table />
      </main>
      <footer className="flex p-4 border-t justify-center items-center text-center">
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
};

export default transations;
