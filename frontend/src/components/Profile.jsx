import React from 'react'
import { banner_image, profile_photo } from '../constant'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
  return (
    <div className='w-[50%] border border-l-gray-200'>
        <div className=''>
            <div className='flex items-center' px-4 py-2>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                <IoArrowBack size="24px" />
                </Link>
                <div className='ml-2'>
                    <h1 className='font-bold text-lg '>vishalprjpt "username"</h1>
                    <p className='text-gray-500 text-sm'>10posts</p>
                </div>
            </div>
            <img src={banner_image} alt="banner" />
            <div className='absolute top-52 ml-2'>
            <Avatar src={profile_photo} size="120" round={true} />
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1t font-semibold  rounded-full text-right border hover:bg-gray-100'>Edit profile</button>
            </div>
            <div className='m-6'>
                <h1 className='font-bold text-xl'>vishal</h1>
                <p>@vishal</p>
            </div>
            <div  className='m-4 text-sm'>
                <p>exploring the world and all the chutiyapa</p>
            </div>
        </div>
    </div>
  )
}

export default Profile
