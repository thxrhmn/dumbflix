import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { API } from '../config/Api';
import { useMutation } from 'react-query';

function Payment() {
  const navigate = useNavigate();

  const handleSubmit = useMutation(async (data) => {
    try {
      const response = await API.post("/transaction", data);
      console.log("success : ", response.data.data.token);
      const token = response.data.data.token;
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result);
          navigate("/");
        },
        onPending: function (result) {
          console.log(result);
        },
        onError: function (result) {
          console.log(result);
        },
        onClose: function () {
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log("transaction failed: ", error);
    }
  });

  useEffect(() => {
    
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = import.meta.env.VITE_REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="bg-black h-[600px] pt-28">
      <div className="mx-auto w-[550px] justify-center">
        <h1 className="font-semibold mb-4 text-4xl text-white text-center">Premium</h1>
        <div className="flex">
          <p className="text-white mb-2">Bayar sekarang dan nikmati streaming film-film yang kekinian dari </p>
          <p className="text-red-700 font-semibold ml-[3px]">DUMBFLIX</p>
        </div>
        <div className="flex justify-center mb-5">
          <p className="text-red-700 font-semibold">DUMBFLIX</p><p className="font-semibold text-white ml-2"> : 0981312323</p>
        </div>
        <form className="flex flex-col w-[100%]">
          <select hidden>
            <option value="1-month">1-month</option>
            <option value="3-month">3-month</option>
            <option value="6-month">6-month</option>
            <option value="12-month">12-month</option>
          </select>

          <div className='text-black flex gap-6 mb-5'>
            <div className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
              <div type="submit" onClick={() => handleSubmit.mutate({price:30000,days:30})} className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl text-red-600 hover:text-white'>30K</h1>
                <h1 className='text-center font-semibold text-1xl'>1 Month</h1>
              </div>
            </div>
            <div type="submit" onClick={() => handleSubmit.mutate({price:80000,days:90})} className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl text-red-600 hover:text-white'>80K</h1>
                <h1 className='text-center font-semibold text-1xl'>3 Month</h1>
              </div>
            </div>
            <div type="submit" onClick={() => handleSubmit.mutate({price:150000,days:180})} className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl text-red-600 hover:text-white'>150K</h1>
                <h1 className='text-center font-semibold text-1xl'>6 Month</h1>
              </div>
            </div>
            <div type="submit" onClick={() => handleSubmit.mutate({price:300000,days:360})} className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl text-red-600 hover:text-white'>300K</h1>
                <h1 className='text-center font-semibold text-1xl'>12 Month</h1>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Payment