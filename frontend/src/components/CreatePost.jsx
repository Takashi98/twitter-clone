import React from "react";
import Avatar from "react-avatar";
import { profile_photo } from "../constant";
import { FaImage } from "react-icons/fa6";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer  hover:bg-slate-200 w-full text-center px-4 py-3 ">
            <h1 className="font-semibold text-gray-600 text-lg">for you</h1>
          </div>
          <div className="cursor-pointer  hover:bg-slate-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4 ">
            <div>
              <Avatar src={profile_photo} size="40" round={true} />
            </div>
            <input
              className="w-full outline-none border-none text-lg mx-4"
              type="text"
              placeholder="What is happening?"
            />
          </div>
          <div className="flex justify-between p-4 border-b border-gray-300">
            <div>
              <FaImage size="24px"/>
            </div>
            <button className="bg-[#1D98F0] px-4 py-2 border-none rounded-full text-lg text-white text-center">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
