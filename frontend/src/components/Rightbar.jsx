import React from "react";
import Avatar from "react-avatar";
import { IoSearch } from "react-icons/io5";
import { profile_photo } from "../constant";

const Rightbar = () => {
  return (
    <div className="w-[20%]">
      <div className=" flex items-center p-2 bg-gray-100 rounded-full outline-none">
        <IoSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg ">Who to follow</h1>
        <div className="flex justify-between my-3">
          <div className="flex">
            <div>
              <Avatar src={profile_photo} size="40" round={true} />
            </div>

            <div className="ml-2">
              <h1 className="font-bold">Vishal</h1>
              <p className="text-sm">@vishalprjpt</p> 
            </div>
          </div>
          <button className="px-4 rounded-full bg-black text-white">Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
