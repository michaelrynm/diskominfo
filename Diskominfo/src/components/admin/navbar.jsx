import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="bg-[#A91D3A] p-6">
        <div className="flex items-center gap-3 justify-end">
          <p className="text-end font-bold text-white">Selamat Datang Admin</p>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-white">
              <SlArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/"}>
                <li className="hover:bg-[#A91D3A] hover:text-white rounded-xl font-bold">
                  <a>Logout</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
