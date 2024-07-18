import React, { useEffect, useState } from "react";
import { Layout } from "../../components/admin/layout";
import { Chart } from "../../components/admin/chart";
import { Table } from "../../components/admin/table";
import moment from "moment";
import axios from "axios";

// React Table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

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

export const Dashboard = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/v1/absensi/recent/"
      );
      console.log(result.data.data);
      setData(result.data.data);
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
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <Layout>
        <div className="mb-5">
          <p className="font-bold text-2xl text-[#A91D3A]">Dashboard</p>
        </div>
        <div className="flex gap-5">
          <Chart />
          <Chart />
        </div>
        <div className="mt-7">
          <div>
            <p className="font-bold text-2xl text-[#A91D3A]">
              Aktivitas Absen Terakhir
            </p>
          </div>
        </div>
        {/* Table */}
        <div className="mt-10">
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
