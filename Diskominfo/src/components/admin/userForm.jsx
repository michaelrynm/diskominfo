import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Input } from "./input";

export const UserForm = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm rounded-lg bg-[#A91D3A] text-white hover:bg-[#A91D3A] hover:text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <span className="flex gap-3">
          Tambah Peserta Magang
          <FaPlus />
        </span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Data Peserta Magang!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <div>
            <form>
              <Input label="Nama" type="text" />
              <Input label="Universitas" type="text" />
              <Input label="Periode Magang" type="date" />
              <Input label="NIM" type="number" />
              <Input label="Password" type="text" />
              <div className="mt-3 flex justify-center">
                <button className="btn btn-wide rounded-lg bg-[#A91D3A] text-white">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
