import '../assets/css/profile.css'
import React from 'react'
import avatarLogo from '../assets/images/icons/avatar.png'
import emailLogo from '../assets/images/icons/email.png'
import phoneLogo from '../assets/images/icons/phone.png'
import statusLogo from '../assets/images/icons/status.png'
import genderLogo from '../assets/images/icons/gender.png'
import addressLogo from '../assets/images/icons/address.png'


function Profile() {

  const datalocal = localStorage.getItem("dumblogin")
  const dumblogin = JSON.parse(datalocal)
  console.log(dumblogin)
  console.log("Ini email dari datalocal", dumblogin.email)

  return (
    <div className="bg-black profile__custom pb-[200px] pt-[50px]">
      <div style={{backgroundColor: "#1F1F1F"}} className="w-[700px] h-[450px] mx-auto rounded-md flex justify-between overflow-hidden items-center">
        <div className=" w-[50%]">
          <h1 className="font-semibold ml-4 my-6">Personal Info</h1>
          <div className="flex name items-center ml-4 mb-3">
            <img src={avatarLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{dumblogin.fullname}</h1>
              <h3 className="text-gray-600">Full Name</h3>
            </div>
          </div>
          <div className="flex email items-center ml-4 mb-3">
            <img src={emailLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{dumblogin.email}</h1>
              <h3 className="text-gray-600">Email</h3>
            </div>
          </div>
          <div className="flex status items-center ml-4 mb-3">
            <img src={statusLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{dumblogin.status}</h1>
              <h3 className="text-gray-600">Status</h3>
            </div>
          </div>
          <div className="flex gender items-center ml-4 mb-3">
            <img src={genderLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{dumblogin.gender}</h1>
              <h3 className="text-gray-600">Gender</h3>
            </div>
          </div>
          <div className="flex name items-center ml-4 mb-3">
            <img src={phoneLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{dumblogin.phone}</h1>
              <h3 className="text-gray-600">Mobile Phone</h3>
            </div>
          </div>
          <div className="flex name items-center ml-4 mb-3">
            <img src={addressLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{dumblogin.address}</h1>
              <h3 className="text-gray-600">Address</h3>
            </div>
          </div>
        </div>
        <div className="w-[40%] p-5">
          <div className="flex flex-col justify-center">
            <img className="rounded-md" src="https://avatars.githubusercontent.com/u/123728862?v=4" alt="" />
            <div className="w-25 mt-5 mx-auto">
              <a className="bg-red-700 py-3 px-11 rounded-md" href="#">Change Photo Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile