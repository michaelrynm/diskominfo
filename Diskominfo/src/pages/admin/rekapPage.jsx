import React, { useEffect, useState } from "react";
import { Layout } from "../../components/admin/layout";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import moment from "moment";
import { Table } from "../../components/admin/table";
import { useNavigate } from "react-router-dom";

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("nim", {
    header: "NIM",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("nama", {
    header: "Nama",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("universitas", {
    header: "Universitas",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("waktuAbsensi", {
    header: "Waktu Absensi",
    cell: (info) => moment(info.getValue()).format("DD MMMM YYYY HH:mm"),
  }),
];

export const RekapPage = () => {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/v1/absensi/");
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Layout>
        <div className="mb-10">
          <p className="font-bold text-2xl text-[#A91D3A]">
            Rekapitulasi Kehadiran
          </p>
        </div>
        <div>
          <Table {...{ data, columns }} />
        </div>
      </Layout>
    </div>
  );
};
