import React, { useState, useRef } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaSearch } from "react-icons/fa";
import { DownloadTableExcel } from "react-export-table-to-excel";

export const Table = ({ data, columns }) => {
  const tableRef = useRef(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-between mb-5 items-center">
          <div>
            <span className="flex gap-3 items-center">
              <FaSearch />
              <input
                type="text"
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="input input-bordered"
                placeholder="Search data"
              />
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="select select-sm select-bordered"
            >
              {[5, 10, 20, 30, 40, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show: {pageSize}
                </option>
              ))}
            </select>
            <button
              className="btn btn-sm bg-[#A91D3A] text-white hover:bg-red-500"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="btn btn-sm bg-[#A91D3A] text-white hover:bg-red-500"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
          </div>
        </div>
        <table
          className="table table-zebra border border-slate-300"
          ref={tableRef}
        >
          {/* head */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <DownloadTableExcel
            filename="Table"
            sheet="sheet1"
            currentTableRef={tableRef.current}
          >
            <button className="btn btn-sm bg-[#A91D3A] hover:bg-[#A91D3A] text-white font-bold">
              Export to Excel
            </button>
          </DownloadTableExcel>
        </div>
      </div>
    </div>
  );
};
