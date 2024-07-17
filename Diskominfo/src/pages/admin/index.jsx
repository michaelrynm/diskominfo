import React from "react";
import { useState } from "react";
import Image1 from "../../assets/image4.svg";
import Image2 from "../../assets/image3.svg";
import Image3 from "../../assets/image5.svg";

export const Admin = () => {
  const [userNim, setUserNim] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleInput = (e) => {
    setUserNim(e.target.value);
  };
  console.log(userNim);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nim = "12345678";

    if (userNim === nim) {
      setIsLogin(true);
    } else {
      alert("Nim tidak terdaftar");
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
            ADMIN
          </p>
          <img src={Image2} alt="" className="mt-5" />
        </div>
        <div>
          <div>
            <p className="font-bold text-[#A91D3A] text-4xl">Silahkan Login!</p>
            <p className="text-2xl mt-5">
              Pastikan Nomor Induk Mahasiswa dan Password anda benar!
            </p>
          </div>
          <div className="mt-6">
            {isLogin ? (
              <div className="border border-gray-400 shadow-2xl rounded-lg p-20">
                <div className="flex flex-col items-center">
                  <img src={Image3} alt="" />
                  <p className="text-2xl font-medium mt-3">
                    Selamat Datang Audita Bella
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="" className="font-bold text-[#a91d3a]">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan Username Anda!"
                    className="input input-bordered w-full mt-3"
                    onChange={handleInput}
                    value={userNim}
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="" className="font-bold text-[#a91d3a]">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan Password Anda!"
                    className="input input-bordered w-full mt-3"
                    onChange={handleInput}
                    value={userNim}
                  />
                </div>

                <button className="btn w-full text-white bg-[#A91D3A] mt-32">
                  {" "}
                  Absen
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
