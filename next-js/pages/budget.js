import React, { useState } from "react";

const budget = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

  const budgetDropDown = (
    <div
      id="dropdownDefaultRadio"
      className=" absolute m-0 translate-y-3 inset-3  hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      // data-popper-reference-hidden=""
      // data-popper-escaped=""
      // data-popper-placement="bottom"
      // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 10px, 0px);"
    >
      <ul
        className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownRadioButton"
      >
        <li>
          <div className="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              // for="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input
              checked=""
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              // for="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Checked state
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <input
              id="default-radio-3"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              // forHtml="default-radio-3"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-screen bg-gray-700 text-gray-300">
      <main className="flex-1">
        <div className="flex justify-center p-6 text-lg font-bold">
          <h1>Budget Page</h1>
        </div>
        <div className="flex flex-col items-center p-6 text-center">
          <div className="p-6">
            <button
              id="dropdownRadioButton"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              // onClick={handleModalClick}
            >
              Choose Budget Rule
              <svg
                class="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {budgetDropDown}

        {/* {modal && modalCreatePlan} */}
      </main>
      <footer className="flex mt-4 p-4 border-t h-10 justify-center items-center text-center">
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
};

export default budget;
