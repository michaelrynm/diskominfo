import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BsClipboardData } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { FaPrint } from "react-icons/fa";

export const Sidebar = ({ children }) => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="p-10">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#d9d9d9] text-black font-medium">
            {/* Sidebar content here */}
            <div className="flex justify-center mb-8">
              <p className="font-bold text-2xl text-[#A91D3A]">KEHADIRAN</p>
            </div>
            <Link to={"/dashboard"}>
              <li className="hover:bg-[#A91D3A] rounded-xl hover:text-white">
                <div className="flex justify-between items-center">
                  <a>
                    <span className="flex items-center gap-3">
                      <BsClipboardData /> Dashboard
                    </span>
                  </a>
                  <SlArrowDown />
                </div>
              </li>
            </Link>
            <Link to={"/user"}>
              <li className="hover:bg-[#A91D3A] rounded-xl hover:text-white">
                <div className="flex justify-between items-center">
                  <a>
                    <span className="flex items-center gap-3">
                      <IoPeople /> Data Mahasiswa
                    </span>
                  </a>
                  <SlArrowDown />
                </div>
              </li>
            </Link>
            <Link to={"/rekapitulasi"}>
              <li className="hover:bg-[#A91D3A] rounded-xl hover:text-white">
                <div className="flex justify-between items-center">
                  <a>
                    <span className="flex items-center gap-3">
                      <FaPrint /> Rekapitulasi Kehadiran
                    </span>
                  </a>
                  <SlArrowDown />
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
