import React, { useState } from "react";
import { FaClosedCaptioning, FaPlus } from "react-icons/fa6";
import { Input } from "./input";
import axios from "axios";
import moment from "moment";

export const UserForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    universitas: "",
    periodeMulai: "",
    periodeSelesai: "",
    nim: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // if (name === "periodeMulai" || name === "periodeSelesai") {
    //   const formattedDate = moment(value).toISOString();

    //   setFormData({
    //     ...formData,
    //     [name]: formattedDate,
    //   });
    // } else {
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/api/v1/user/create",
        formData
      );
      if (result.status === 200) {
        alert("Data berhasil ditambahkan");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("User already exist");
        } else {
          console.log("Error status:", error.response.status);
        }
      } else {
        console.log("Network error:", error.message);
      }

      console.error("Error:", error);
    } finally {
      setFormData({
        nama: "",
        universitas: "",
        periodeMulai: "",
        periodeSelesai: "",
        nim: "",
        password: "",
      });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <Input
                label="Nama"
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
              />
              <Input
                label="Universitas"
                type="text"
                name="universitas"
                value={formData.universitas}
                onChange={handleChange}
              />
              <Input
                label="Periode Mulai Magang"
                type="date"
                name="periodeMulai"
                value={formData.periodeMulai}
                onChange={handleChange}
              />
              <Input
                label="Periode Selesai Magang"
                type="date"
                name="periodeSelesai"
                value={formData.periodeSelesai}
                onChange={handleChange}
              />
              <Input
                label="NIM"
                type="number"
                name="nim"
                value={formData.nim}
                onChange={handleChange}
              />
              <Input
                label="Password"
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
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
