import React, { useEffect, useState } from "react";
import { Layout } from "../../components/admin/layout";
import { UserForm } from "../../components/admin/userForm";
import { Table } from "../../components/admin/table";
import axios from "axios";
import moment from "moment";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

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
  columnHelper.accessor("periode", {
    header: "Periode Magang",
    cell: (info) => moment(info.getValue()).format("DD MMMM YYYY HH:mm"),
  }),
];

export const UserPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/v1/user/");
      setData(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
            Data Mahasiswa Magang
          </p>
        </div>
        <div className="flex justify-end">
          <UserForm />
        </div>
        <div className="mt-5">
          <Table table={table} />
        </div>
      </Layout>
    </div>
  );
};
