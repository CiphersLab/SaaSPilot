"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Purchase } from "@prisma/client";
import { format } from "date-fns";

export const columns: ColumnDef<Purchase>[] = [
  {
    accessorKey: "packageName",
    header: "Package Name",
    cell: ({ row }) => {
      return (
        <div className="truncate line-clamp-2">{row.getValue("packageName")}</div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Purchased at",
    cell: ({ row }) => {
      return <div>{format(row.getValue("createdAt"), "dd/MM/yyyy")}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount Paid",
    cell: ({ row }) => {
      return (
        <div className="truncate line-clamp-2">{row.getValue("amount")}</div>
      );
    }    
  },
  {
    accessorKey: "creditsAdded",
    header: "Credits Purchased",
    cell: ({ row }) => {      
      return (
        <div className="truncate line-clamp-2">{row.getValue("creditsAdded")}</div>
      );
    },
  }  
];
