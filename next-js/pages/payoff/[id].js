import moment from "moment";
import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { tablePlanTitle, tableItemsMock } from "../../constant/payoff-constant";

const payoffId = () => {
  const [plan, setPlan] = useState([
    // {
    //     name: "",
    //   startingBalance: 0,
    //   currentBalance: 0,
    //   totalInterest: 0,
    //   monthlyPayments: 0,
    //   payoffDate: new Date().toLocaleDateString(),
    // },
  ]);

  // const [monthlyPayment, setMonthlyPayment] = useState();
  const [yearPayment, setyearPayment] = useState(0);

  let leftPayment = 2000;

  useEffect(() => {
    snowball(tableItemsMock);
  }, []);

  let prevCount = 0;

  const snowball = (tableItems) => {
    let arr = [];

    let newArray = [...tableItems];

    // Clone the Array to work with it

    // check if balance is not zero

    // Sort array of object by APR
    newArray.sort(({ rate: a }, { rate: b }) => b - a);

    // get the total minimun payment
    // take monthly payment and subtract it by the minimunt payment total

    // // if there is anything left in the monthly payment apply it to the first in the sort

    // How is APR calculated - (daily)
    // calculations principal and interest
    // to find the principal and interest

    // console.log("first list rate",newArray[0]["rate"]/100/12)
    // console.log("first list montlhy",(newArray[0]["rate"]/100/12) * newArray[0]["rate"])

    // calculate one at a time

    newArray.forEach((item) => {
      leftPayment -= item["minimumPayment"];
      console.log(leftPayment);
    });

    newArray.map((item, index) => {
      // r = R/100 = 3.875%/100 = 0.03875 per year.
      let dailyRate = item.rate / 100 / 12;

      let monthlyRate = Math.ceil(dailyRate * item.currentBalance * 100) / 100;

      let balance = item.currentBalance;
      let monthCount = 0;
      let totalRate = 0.0;
      let payment = leftPayment + item.minimumPayment;

      while (balance > 0.0) {
        monthCount++;
        if (index === 0) {
          totalRate = totalRate + monthlyRate;
          balance -= payment + monthlyRate;
          prevCount = monthCount;
        } else if (prevCount <= monthCount) {
          totalRate = totalRate + monthlyRate;
          let newPayment = payment + newArray[index - 1]["minimumPayment"];
          balance -= newPayment + monthlyRate;
          if (balance <= 0) {
            prevCount = monthCount;
          }
        } else {
          totalRate = totalRate + monthlyRate;
          balance -= item.minimumPayment;
        }
      }

      arr.push({
        name: item.name,
        currentBalance: item.currentBalance,
        apr: item.rate,
        totalRate: totalRate,
        payoffDate: moment().add(monthCount, "months").format("MMMM YYYY"),
        dueDate: item.dueDate,
        minimumPayment: item.minimumPayment,
      });
    });
    setPlan(arr);
  };

  return (
    <div className="flex p-4 flex-col w-full h-full bg-gray-700 text-gray-300">
      <main className="flex flex-1 flex-col p-6 text-lg font-bold">
        <div className="flex justify-center p-6 text-lg font-bold">
          <h1>Default - Snowball</h1>
        </div>
        <div className="pl-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Put Down
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="$300"
            // onChange={handleChange}
            // value={value.name}
          />
        </div>
        <div>
          <Table
            // title="Default - Snowball"
            tableTitles={tablePlanTitle}
            tableRow={plan}
            type="payoff-snowball"
            spaces={{ title: 0, total: 4 }}
            customTitle="Total Pay"
            // customTotal={""}
          />
        </div>
      </main>
      <footer className="flex mt-4 p-4 border-t h-10 justify-center items-center text-center">
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
};

export default payoffId;
