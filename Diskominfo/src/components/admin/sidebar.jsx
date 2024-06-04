import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

export const Sidebar = ({ children }) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
            <Link to={"/dashboard"}>
              <li className="hover:bg-[#A91D3A] rounded-xl hover:text-white">
                <div className="flex justify-between items-center">
                  <a>Data Mahasiswa</a>
                  <SlArrowDown />
                </div>
              </li>
            </Link>
            <Link to={"/rekapitulasi"}>
              <li className="hover:bg-[#A91D3A] rounded-xl hover:text-white">
                <div className="flex justify-between items-center">
                  <a>Rekapitulasi Kehadiran</a>
                  <SlArrowDown />
                </div>
              </li>
            </Link>
            <li>
              <div className="flex justify-between items-center">
                <a>Sidebar Item 1 </a>
                <SlArrowDown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
