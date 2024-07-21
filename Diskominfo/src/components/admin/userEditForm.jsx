import React, { useState, useRef } from "react";
import { FaClosedCaptioning, FaPlus } from "react-icons/fa6";
import { Input } from "./input";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

export const UserEditForm = ({ data }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [formData, setFormData] = useState({
    nama: data.nama,
    universitas: data.universitas,
    periodeMulai: moment(data.periodeMulai).format("YYYY-MM-DD"),
    periodeSelesai: moment(data.periodeSelesai).format("YYYY-MM-DD"),
    nim: data.nim,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Swal.fire({
      title: "Apakah data sudah benar?",
      showCancelButton: true,
      confirmButtonText: "Save",
      target: document.getElementById("my_modal_4"),
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const response = await axios.put(
            `http://localhost:3000/api/v1/user/${data._id}`,
            formData
          );
          if (response.status === 200) {
            closeModal();
            Swal.fire("Saved!", "", "success");
            setTimeout(() => {
              location.reload();
            }, 1500);
          }
        } catch (error) {
          console.log(error);
        }
      } else if (result.isDismissed) {
        closeModal();
        Swal.fire("Changes are not saved", "", "info");
      }
    });

    // try {
    //   const response = await axios.put(
    //     `http://localhost:3000/api/v1/user/${data._id}`,
    //     formData
    //   );
    //   if (response.status === 200) {

    //     closeModal();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <span className="flex gap-3">Edit</span>
      </button>
      <dialog id="my_modal_4" ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit Data Peserta Magang!</h3>
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
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="leave blank if will not be updated"
              />
              <span className="label-text-alt flex items-center gap-3 mt-2">
                <label htmlFor="">Show Password</label>
                <input
                  type="checkbox"
                  className="toggle toggle-xs"
                  onClick={togglePasswordVisibility}
                />
              </span>

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
