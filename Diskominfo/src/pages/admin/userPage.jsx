import React, { useEffect, useState, useRef } from "react";
import { Layout } from "../../components/admin/layout";
import { UserForm } from "../../components/admin/userForm";
import { Table } from "../../components/admin/table";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserEditForm } from "../../components/admin/userEditForm";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const UserPage = () => {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/v1/user/");
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if (isLogin) {
      setIsLoggedin(true);
    } else {
      navigate("/admin");
    }
  });

  const columns = [
    columnHelper.accessor("nama", {
      header: "Nama",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nim", {
      header: "NIM",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("universitas", {
      header: "Universitas",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("periodeMulai", {
      header: "Periode Mulai Magang",
      cell: (info) => moment(info.getValue()).format("DD MMMM YYYY"),
    }),
    columnHelper.accessor("periodeSelesai", {
      header: "Periode Selesai Magang",
      cell: (info) => moment(info.getValue()).format("DD MMMM YYYY"),
    }),
    {
      header: "Actions",
      cell: (info) => (
        <div className="flex justify-center space-x-2">
          <UserEditForm data={info.row.original}  />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(info.row.original)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (row) => {
    console.log("Edit row:", row._id);
  };

  const handleDelete = (row) => {
    console.log("Deleting row:", row._id);
    Swal.fire({
      title: "Hapus data mahasiswa magang?",
      showCancelButton: true,
      confirmButtonText: "Hapus",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const result = await axios.delete(
            `http://localhost:3000/api/v1/user/${row._id}`
          );
          if (result.status === 200) {
            Swal.fire("Data Berhasil di Hapus!", "", "success");
          }
          getData();
        } catch (error) {
          Swal.fire("Hapus data gagal!", "coba lagi", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <Layout>
        <div className="mb-10">
          <p className="font-bold text-2xl text-[#A91D3A]">
            Data Mahasiswa Magang
          </p>
        </div>
        <div className="flex justify-end">
          <UserForm getData={getData} />
        </div>
        <div className="mt-5">
          <Table
            {...{
              data,
              columns,
            }}
          />
        </div>
      </Layout>
    </div>
  );
};
