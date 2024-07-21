import React, { useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Swal from "sweetalert2";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    Swal.fire({
      icon: "success",
      title: "Logout Berhasil! ",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      navigate("/admin");
    }, 2500);
  };

  return (
    <div>
      <div className="bg-[#A91D3A] p-6">
        <div className="flex items-center justify-between">
          <div>
            <label
              htmlFor="my-drawer-2"
              className="btn bg-[#A91D3A] border-none hover:text-black text-white drawer-button lg:hidden"
            >
              <RxHamburgerMenu />
            </label>
          </div>
          <div className="flex items-center gap-3 justify-end">
            <p className="text-end font-bold text-white">
              Selamat Datang Admin
            </p>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="text-white">
                <SlArrowDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52"
              >
                <button
                  onClick={handleButton}
                  className="btn btn-sm font-bold hover:bg-[#A91D3A] hover:text-white"
                >
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
