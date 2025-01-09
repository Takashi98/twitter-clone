import React from "react";
import { twitter_image } from "../constant";
import { CiHome } from "react-icons/ci";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBookmarks } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img className="size-36" src={twitter_image} />
        </div>
        <div className="my-4">
          <Link to ="/" className="flex items-center my-4 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <CiHome className="size-8" />
            <h1 className="font-bold text-lg">Home</h1>
          </Link>
          <div className="flex items-center my-4 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <MdOutlineTravelExplore className="size-8" />
            <h1 className="font-bold text-lg">Explore</h1>
          </div>
          <div className="flex items-center my-4 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <IoIosNotifications className="size-8" />
            <h1 className="font-bold text-lg">Notification</h1>
          </div>
          <Link to="/profile" className="flex items-center my-4 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <CgProfile className="size-8"/>
            <h1 className="font-bold text-lg">Profile</h1>
          </Link>
          <div className="flex items-center my-4 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <IoBookmarks className="size-8" />
            <h1 className="font-bold text-lg">Bookmarks</h1>
          </div>
          <div className="flex items-center my-4 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <LuLogOut className="size-8" />
            <h1 className="font-bold text-lg">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-lg bg-[#1D98F0] w-full rounded-full text-white font-bold">Post</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
