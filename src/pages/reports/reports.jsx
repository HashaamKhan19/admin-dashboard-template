import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const Reports = () => {
  const data = [
    {
      id: "728ed52f",
      name: "John Doe",
      email: "email@example.com",
      status: "active",
      details: "loreum ipsum",
    },
    {
      id: "728ed52d",
      name: "John Doe",
      email: "lma@example.com",
      status: "active",
      details:
        "loreum ipsum loreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsum",
    },
    {
      id: "728ed52c",
      name: "John Doe",
      email: "email@example.com",
      status: "active",
      details: "loreum ipsum",
    },
    {
      id: "728ed52e",
      name: "John Doe",
      email: "email@example.com",
      status: "active",
      details: "loreum ipsum",
    },
    {
      id: "728ed52d",
      name: "John Doe",
      email: "email@example.com",
      status: "active",
      details: "loreum ipsum",
    },
    {
      id: "728ed52c",
      name: "John Doe",
      email: "email@example.com",
      status: "active",
      details: "loreum ipsum",
    },
    {
      id: "3252c",
      name: "John Doe",
      email: "email@example.com",
      status: "active",
      details: "loreum ipsum",
    },
  ];

  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default Reports;
