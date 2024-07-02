import React from "react";
import { Layout } from "../../components/admin/layout";

export const Dashboard = () => {
  return (
    <div>
      <Layout>
        <div>
          <p className="font-bold text-2xl">Data Mahasiswa Magang</p>
        </div>
        <div className="mt-7">
          <div className="flex gap-x-3 items-center">
            <p>Nama Tahun: </p>
            <select className="select select-bordered select-sm w-36">
              <option>2024</option>
              <option>2023</option>
            </select>
            <button className="btn btn-sm">Simpan</button>
          </div>

          <div>
            <div className="flex mt-5 justify-end">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-md rounded-3xl bg-[#A91D3A] hover:bg-[#A91D3A] text-white font-medium"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Tambah Mahasiswa +
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-10">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <p className="font-bold text-2xl">
                    Form Mahasiswa Magang Baru
                  </p>
                  <form>
                    <div className="grid grid-cols-2">
                      <div>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">Nama Mahasiswa</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </label>
                      </div>
                      <div>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">NIM</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mt-10">
                      <div>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">Periode Magang</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </label>
                      </div>
                      <div>
                        <label className="form-control w-full max-w-xs">
                          <div className="label">
                            <span className="label-text">Asal Universitas</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-end mt-24">
                      <button className="btn btn-md bg-[#A91D3A] text-white hover:bg-[#A91D3A]">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-x-4 items-center">
                <p>Tampilkan: </p>
                <select className="select select-bordered select-sm w-fit">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <p>Data</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <p>Pencarian: </p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-36"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
