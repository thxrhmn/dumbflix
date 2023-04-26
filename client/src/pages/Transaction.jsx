import React, {useRef} from 'react'
import DropdownTransaction from "../assets/images/icons/dropdown.png"
import { useQuery } from "react-query"
import { API } from "../config/Api"

function Transaction() {
  // Fetching data Transactions from database
  let { data: transactions, refetch } = useQuery("transactionCache", async () => {
      const response = await API.get("/transactions");
      return response.data.data;
    }
  );
  console.log(transactions);

  const dataTransactions = transactions

  const dropdownRef = useRef(null);

  const handleClick = () => {
    dropdownRef.current.classList.toggle('hidden');
  };
  
  return (
    <div className="bg-black w-screen h-screen pt-10">
      <div className="mx-auto w-[900px] h-[300px]">
        <h1 className="text-white font-semibold mb-5">Incoming Transaction</h1>
        <table class="rounded-md w-[100%]" style={{backgroundColor: "#1F1F1F"}} >
          <thead>
            <tr>
              <th className="text-red-700 p-3">No</th> 
              <th className="text-red-700 p-3 w-[140px]">Users</th>
              <th className="text-red-700 p-3 w-[160px]">Subscribe for</th>
              <th className="text-red-700 p-3">Status User</th>
              <th className="text-red-700 p-3">Status Payment</th>
              <th className="text-red-700 p-3">Action</th>
            </tr>
          </thead>
          <tbody>

            {dataTransactions.map((item) => (
              <tr className="border-t-[1px] border-solid border-gray-700">
                <td className="text-white p-3 text-center">{item.id}</td>
                <td className="text-white p-3 text-center">{item.user.fullname}</td>

                {item.price == "30000" && <td className="text-white p-3 text-center">1 Month</td> }
                {item.price == "80000" && <td className="text-white p-3 text-center">2 Month</td> }
                {item.price == "150000" && <td className="text-white p-3 text-center">6 Month</td> }
                {item.price == "300000" && <td className="text-white p-3 text-center">1 Year</td> }
                
                <td className="text-green-500 p-3 text-center">Active</td>
                
                <td className="text-green-500 p-3 text-center ">Approve</td>

                {/* {item.status == "pending" && <td className="text-yellow-500 p-3 text-center ">Pending</td> }
                {item.status == "approve" && <td className="text-green-500 p-3 text-center ">Approve</td> } */}

                <td className="text-cyan-700 p-4 mx-auto relative cursor-pointer">
                <img onClick={handleClick} className="mx-auto" src={DropdownTransaction} alt="" />
                <div ref={dropdownRef} className="hidden bg-gray-800 rounded-md absolute right-8 top-9">
                  <h3 className="text-green-600 hover:bg-gray-700 pt-2 px-3">Approved</h3>
                  <h3 className="text-red-600 hover:bg-gray-700 pb-2 px-3">Cancel</h3>
                </div>
              </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  )
}

export default Transaction