import React, { useState, useRef } from "react";
import { FaClosedCaptioning, FaPlus } from "react-icons/fa6";
import { Input } from "./input";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

export const UserForm = ({ getData }) => {
  const [formData, setFormData] = useState({
    nama: "",
    universitas: "",
    periodeMulai: "",
    periodeSelesai: "",
    nim: "",
    password: "",
  });

  const modalRef = useRef(null);
  const closeModal = () => {
    modalRef.current.close();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/api/v1/user/create",
        formData
      );
      if (result.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data Peserta Magang Berhasil Ditambahkan! ",
          showConfirmButton: false,
          timer: 3000,
        });
      }
      closeModal();
      getData();
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Data Peserta Peserta Magang Sudah Ada! ",
            showConfirmButton: false,
            timer: 2000,
            target: document.getElementById("my_modal_3"),
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something Went Wrong Please Try Again! ",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        console.log("Network error:", error.message);
      }

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
      <dialog id="my_modal_3" ref={modalRef} className="modal">
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
