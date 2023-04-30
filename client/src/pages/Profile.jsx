import avatarLogo from '../assets/images/icons/avatar.png'
import emailLogo from '../assets/images/icons/email.png'
import phoneLogo from '../assets/images/icons/phone.png'
import statusLogo from '../assets/images/icons/status.png'
import genderLogo from '../assets/images/icons/gender.png'
import addressLogo from '../assets/images/icons/address.png'

import React, { useState, useEffect, useContext } from 'react'
import { API } from '../config/Api'
import { UserContext } from '../context/UserContext'

function Profile() {
  const [state] = useContext(UserContext)

  const [profile, setProfile] = useState({})

  // fetching profile by id from state
  const getProfileData = async () => {
    try {
      const response = await API.get(`/user/${state.user.id}`)
      setProfile(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfileData()
  }, [])

  // avatar image
  const avatarImage = import.meta.env.VITE_REACT_APP_IMAGE_URL + profile.avatarprofile

  return (
    <div style={{color: 'white'}} className="bg-black pb-[200px] pt-[50px]">
      <div style={{backgroundColor: "#1F1F1F"}} className="w-[700px] h-[450px] mx-auto rounded-md flex justify-between overflow-hidden items-center">
        <div className=" w-[50%]">
          <h1 className="font-semibold ml-4 my-6">Personal Info</h1>
          <div className="flex name items-center ml-4 mb-3">
            <img src={avatarLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{profile.fullname}</h1>
              <h3 className="text-gray-600">Full Name</h3>
            </div>
          </div>
          <div className="flex email items-center ml-4 mb-3">
            <img src={emailLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{profile.email}</h1>
              <h3 className="text-gray-600">Email</h3>
            </div>
          </div>
          <div className="flex status items-center ml-4 mb-3">
            <img src={statusLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{profile.subscribe == "active" ? "Active" : "Non active"}</h1>
              <h3 className="text-gray-600">Status</h3>
            </div>
          </div>
          <div className="flex gender items-center ml-4 mb-3">
            <img src={genderLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{profile.gender}</h1>
              <h3 className="text-gray-600">Gender</h3>
            </div>
          </div>
          <div className="flex name items-center ml-4 mb-3">
            <img src={phoneLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{profile.phone}</h1>
              <h3 className="text-gray-600">Mobile Phone</h3>
            </div>
          </div>
          <div className="flex name items-center ml-4 mb-3">
            <img src={addressLogo} alt="" />
            <div className="ml-3">
              <h1 className="font-semibold">{profile.address}</h1>
              <h3 className="text-gray-600">Address</h3>
            </div>
          </div>
        </div>
        <div className="w-[40%] p-5">
          <div className="flex flex-col justify-center">
            <img className="rounded-md" src={avatarImage} alt="" />
            <div className="w-full mt-5">

              <label htmlFor="my-modal-4" className="btn bg-red-700 py-3 px-auto w-full rounded-md">Change Photo Profile</label>

              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <h1>Update Profile</h1>
                  <input type="text" placeholder="Full Name" className="input input-bordered w-full mb-4" />
                  <input type="text" placeholder="Email" className="input input-bordered w-full mb-4" />
                  <input type="text" placeholder="Status" className="input input-bordered w-full mb-4" />
                  <input type="text" placeholder="Gender" className="input input-bordered w-full mb-4" />
                  <input type="text" placeholder="Phone" className="input input-bordered w-full mb-4" />
                  <input type="text" placeholder="Address" className="input input-bordered w-full mb-4" />
                  
                </label>
              </label>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile