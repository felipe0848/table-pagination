import { useMemo, useState } from "react";
import { Table } from "./components/Table";
import { ColumnDef } from "@tanstack/react-table";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

function App() {
  const [pagination, setPagination] = useState({
    limit: 10,
    skip: 0,
    total: 0,
  });
  const cols = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "name",
        cell: (row) => {
          const value = row.renderValue() as string;
          return (
            <div className="name-column">
              <p>{value}</p>
            </div>
          );
        },
        header: "Nome",
      },
      {
        accessorKey: "billing_address.city",
        cell: (row) => row.renderValue(),
        header: "Cidade",
      },
      {
        accessorKey: "createdAt",
        cell: (row) => row.renderValue(),
        header: "Cadastro",
      },
      {
        accessorKey: "updatedAt",
        cell: (row) => row.renderValue(),
        header: "Útimo acesso",
        meta: { alignText: "center", alignHeader: "center" },
      },
      {
        accessorKey: "lastOrderDate",
        cell: (row) => {
          const date = row.renderValue() as string | null;
          if (date) return date;
          return "-";
        },
        header: "Útimo pedido",
        meta: { alignText: "center", alignHeader: "center" },
        size: 80,
      },
      {
        accessorKey: "amoutOders",
        cell: (row) => row.renderValue(),
        header: "Pedidos",
        meta: { alignHeader: "center", alignText: "center" },
        size: 80,
      },
      {
        accessorKey: "delete",
        header: "",
      },
    ],
    []
  );

  const dummyData = [
    {
      name: "<NAME>",
      billing_address: {
        city: "São Paulo",
      },
      createdAt: "2022-01-01 12:00:00",
      updatedAt: "2022-01-01 12:00:00",
      lastOrderDate: "2022-01-01 12:00:00",
      amoutOders: 0,
    },
    {
      name: "<NAME>",
      billing_address: {
        city: "São Paulo",
      },
      createdAt: "2022-01-01 12:00:00",
      updatedAt: "2022-01-01 12:00:00",
      lastOrderDate: "2022-01-01 12:00:00",
      amoutOders: 0,
    },
    {
      name: "<NAME>",
      billing_address: {
        city: "São Paulo",
      },
      createdAt: "2022-01-01 12:00:00",
      updatedAt: "2022-01-01 12:00:00",
      lastOrderDate: "2022-01-01 12:00:00",
      amoutOders: 0,
    },
  ];
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Table
          data={dummyData}
          columns={cols}
          onOpenRow={(e) => console.log(e)}
          // isLoading={isLoading}
          dataPagination={pagination}
          setPagination={setPagination}
          deleteButton={(e) => console.log(e)}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
