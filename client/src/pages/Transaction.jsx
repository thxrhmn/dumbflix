import React, {useRef, useState} from 'react'
import DropdownTransaction from "../assets/images/icons/dropdown.png"

function Transaction() {
  const dropdownRef = useRef(null);

  const handleClick = () => {
    dropdownRef.current.classList.toggle('hidden');
  };

  const dataTransactions = [
    {
      no: 1,
      user: "Jhon",
      buktitf: "bukti bca.jpg",
      remainingActive: "26/ Hari",
      statususer: "Active",
      statuspayment: "Approve",
    },
    {
      no: 2,
      user: "Rahman",
      buktitf: "bukti bca.jpg",
      remainingActive: "26/ Hari",
      statususer: "Active",
      statuspayment: "Approve",
    },
    {
      no: 3,
      user: "Jurig",
      buktitf: "indomaret.jpg",
      remainingActive: "5/ Hari",
      statususer: "Active",
      statuspayment: "Approve",
    },
    {
      no: 4,
      user: "Asep",
      buktitf: "bni.jpg",
      remainingActive: "26/ Hari",
      statususer: "Active",
      statuspayment: "Approve",
    },
    {
      no: 5,
      user: "Udin",
      buktitf: "alfamidi-tf.jpg",
      remainingActive: "26/ Hari",
      statususer: "Non Active",
      statuspayment: "Cancel",
    },
    {
      no: 6,
      user: "Rendi",
      buktitf: "bukti bca.jpg",
      remainingActive: "26/ Hari",
      statususer: "Non Active",
      statuspayment: "Pending",
    }
  ]
  
  return (
    <div className="bg-black w-screen h-screen pt-10">
      <div className="mx-auto w-[900px] h-[300px]">
        <h1 className="text-white font-semibold mb-5">Incoming Transaction</h1>
        <table class="rounded-md w-[100%]" style={{backgroundColor: "#1F1F1F"}} >
          <thead>
            <tr>
              <th className="text-red-700 p-3">No</th> 
              <th className="text-red-700 p-3 w-[140px]">Users</th>
              <th className="text-red-700 p-3 w-[140px]">Bukti Transfer</th> 
              <th className="text-red-700 p-3 w-[160px]">Remaining Active</th>
              <th className="text-red-700 p-3">Status User</th>
              <th className="text-red-700 p-3">Status Payment</th>
              <th className="text-red-700 p-3">Action</th>
            </tr>
          </thead>
          <tbody>

            {dataTransactions.map((item) => (
              <tr className="border-t-[1px] border-solid border-gray-700">
                <td className="text-white p-3 text-center">{item.no}</td>
                <td className="text-white p-3 text-center">{item.user}</td>
                <td className="text-white p-3 text-center">{item.buktitf}</td>
                <td className="text-white p-3 text-center">{item.remainingActive}</td>

                {`${item.statususer}` == "Non Active" ? (
                  <td className="text-red-500 p-3 text-center">{item.statususer}</td>
                ): (
                  <td className="text-green-500 p-3 text-center">{item.statususer}</td>
                )}
                {`${item.statuspayment}` == "Cancel" ? (
                  <td className="text-red-500 p-3 text-center ">{item.statuspayment}</td>
                ):(
                  <td className="text-green-500 p-3 text-center">{item.statuspayment}</td>
                )}

                <td className="text-cyan-700 p-4 mx-auto relative cursor-pointer">
                <img onClick={handleClick} className="mx-auto" src={DropdownTransaction} alt="" />
                <div ref={dropdownRef} className="hidden bg-gray-800 rounded-md absolute right-8 top-9">
                  <h3 className="text-green-600 hover:bg-gray-700 pt-2 px-3">Approved</h3>
                  <h3 className="text-red-600 hover:bg-gray-700 pb-2 px-3">Cancel</h3>
                </div>
              </td>
              </tr>
            ))}

            {/* <tr className="border-t-[1px] border-solid border-gray-700">
              <td className="text-white p-3 text-center">1</td>
              <td className="text-white p-3 text-center">Rahman</td>
              <td className="text-white p-3 text-center">bca.jpg</td>
              <td className="text-white p-3 text-center">26/ Hari</td>
              <td className="text-green-500 p-3 text-center">Active</td>
              <td className="text-green-500 p-3 text-center">Approve</td>
              <td className="text-cyan-700 p-4 mx-auto relative cursor-pointer">
                <img onClick={handleClick} className="mx-auto" src={DropdownTransaction} alt="" />
                <div ref={dropdownRef} className="hidden bg-gray-800 rounded-md absolute right-8 top-9">
                  <h3 className="text-green-600 hover:bg-gray-700 pt-2 px-3">Approved</h3>
                  <h3 className="text-red-600 hover:bg-gray-700 pb-2 px-3">Cancel</h3>
                </div>
              </td>
            </tr> */}
            {/* <tr className="border-t-[1px] border-solid border-gray-700">
              <td className="text-white p-3 text-center">1</td>
              <td className="text-white p-3 text-center">Rahman</td>
              <td className="text-white p-3 text-center">bca.jpg</td>
              <td className="text-white p-3 text-center">26/ Hari</td>
              <td className="text-green-500 p-3 text-center">Active</td>
              <td className="text-green-500 p-3 text-center">Approve</td>
              <td className="text-cyan-700 p-3 mx-auto">
                <img className="mx-auto" src={DropdownTransaction} alt="" />
              </td>
            </tr>
            <tr className="border-t-[1px] border-solid border-gray-700">
              <td className="text-white p-3 text-center">1</td>
              <td className="text-white p-3 text-center">Rahman</td>
              <td className="text-white p-3 text-center">bca.jpg</td>
              <td className="text-white p-3 text-center">26/ Hari</td>
              <td className="text-red-500 p-3 text-center">Non Active</td>
              <td className="text-yellow-500 p-3 text-center">Pending</td>
              <td className="text-cyan-700 p-3 mx-auto">
                <img className="mx-auto" src={DropdownTransaction} alt="" />
              </td>
            </tr>
            <tr className="border-t-[1px] border-solid border-gray-700">
              <td className="text-white p-3 text-center">1</td>
              <td className="text-white p-3 text-center">Rahman</td>
              <td className="text-white p-3 text-center">bca.jpg</td>
              <td className="text-white p-3 text-center">0/ Hari</td>
              <td className="text-red-500 p-3 text-center">Non Active</td>
              <td className="text-red-500 p-3 text-center">Cancel</td>
              <td className="text-cyan-700 p-3 mx-auto">
                <img className="mx-auto" src={DropdownTransaction} alt="" />
              </td>
            </tr>
            <tr className="border-t-[1px] border-solid border-gray-700">
              <td className="text-white p-3 text-center">1</td>
              <td className="text-white p-3 text-center">Rahman</td>
              <td className="text-white p-3 text-center">bca.jpg</td>
              <td className="text-white p-3 text-center">0/ Hari</td>
              <td className="text-red-500 p-3 text-center">Non Active</td>
              <td className="text-red-500 p-3 text-center">Cancel</td>
              <td className="text-cyan-700 p-3 mx-auto">
                <img className="mx-auto" src={DropdownTransaction} alt="" />
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transaction