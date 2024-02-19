import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const Users = () => {
  const data = [
    {
      id: "728ed52f",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "728ed52e",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "728ed52d",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "blocked",
      email: "email@example.com",
    },
    {
      id: "728ed52c",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "728ed52e",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "728ed52d",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "blocked",
      email: "email@example.com",
    },
    {
      id: "728ed52c",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "728ed52e",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "728ed52d",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "blocked",
      email: "email@example.com",
    },
    {
      id: "728ed52c",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
    {
      id: "3252c",
      image: "../../assets/logo/main.png",
      name: "John Doe",
      status: "active",
      email: "email@example.com",
    },
  ];

  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default Users;
