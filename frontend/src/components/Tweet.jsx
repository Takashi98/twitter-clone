import React from "react";
import { profile_photo } from "../constant";
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";

const Tweet = () => {
  return (
    <div className='border-b border-gray-200'>
      <div>
        <div className='flex p-4'>
            <Avatar src={profile_photo} size="40" round={true} />
            <div className="ml-2 w-full" >
              <div className="flex items-center">
                <h1 className="font-bold">Vishal</h1>
                <p className="text-gray-500 text-sm ml-1">@vishalprjpt </p>
              </div>
              <div>
                <p>hello developers lets connect and grow together</p>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex items-center">
                  <div className="p-2 hover:bg-pink-200 rounded-full">
                    <FaRegHeart size="24px" className="cursor-pointer" />
                  </div>
                  <p className="ml-1">0</p>
                </div>
                <div className="flex items-center ">
                  <div className="p-2 hover:bg-green-200 rounded-full">
                    <FaRegComment size="20px" className="cursor-pointer" />
                  </div>
                  <p className="ml-1">0</p>
                </div>
                <div className="flex items-centers">
                  <div className="p-2 hover:bg-green-200 rounded-full">
                    <MdSaveAlt size="24px" className="cursor-pointer" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
