import React, { useEffect, useState } from "react";
import Image1 from "../assets/image4.svg";
import Image2 from "../assets/image3.svg";
import Image3 from "../assets/image5.svg";
import axios from "axios";
import Swal from "sweetalert2";

export default function Index() {
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    nim: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (userData && userData.nama && userData.nim) {
      Swal.fire({
        icon: "success",
        title: "Absensi anda berhasil tercatat! ",
        text: `${userData.nama} ${userData.nim}`,
        showConfirmButton: false,
        timer: 5000,
      });
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/absensi/login",
        formData
      );
      setUserData(response.data.user);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Password yang anda masukkan salah! ",
            showConfirmButton: false,
            timer: 3000,
            target: document.getElementById("my_modal_3"),
          });
        } else if (error.response.status === 402) {
          Swal.fire({
            icon: "error",
            title: "Data user tidak ditemukan! ",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      } else {
        console.log("Network error:", error.message);
      }
    } finally {
      setFormData({
        nim: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-24">
        <img src={Image1} alt="" />
      </div>
      <div className="md:grid md:grid-cols-2 place-items-center px-16 md:px-10 mt-16">
        <div>
          <p className="font-bold text-[#A91D3A] text-4xl md:text-5xl">
            Selamat Datang <br />
            Peserta Magang Diskominfo
          </p>
          <img src={Image2} alt="" className="mt-5" />
        </div>
        <div>
          <div>
            <p className="font-bold text-[#A91D3A] text-4xl">Silahkan Absen!</p>
            <p className="text-2xl mt-5">
              Pastikan Username dan Password anda benar!
            </p>
          </div>
          <div className="mt-6">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="" className="font-bold text-[#a91d3a]">
                  Nomor Induk Mahasiswa
                </label>
                <input
                  type="text"
                  placeholder="Masukan NIM Anda!"
                  className="input input-bordered w-full mt-3"
                  name="nim"
                  onChange={handleChange}
                  value={formData.nim}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="" className="font-bold text-[#a91d3a]">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan Password Anda!"
                  className="input input-bordered w-full mt-3"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
                <div className="flex items-center gap-3 mt-3 text-gray-400">
                  <label htmlFor="">Show Password</label>
                  <input
                    type="checkbox"
                    className="toggle toggle-xs"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              <button className="btn w-full text-white bg-[#A91D3A] mt-32">
                {" "}
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
