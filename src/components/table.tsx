import React from 'react';
import { IOTServerData } from "@/components/otserverItem";
import TableRow from "@/components/tableRow";
import TableHeader from "@/components/tableHeader";
import { useRouter } from "next/router";

interface Props {
  data: IOTServerData[];
  columns: string[];
}

const Table: React.FC<Props> = ({ data, columns }) => {

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHeader columns={columns} />
      <tbody>
        {data.map((item: IOTServerData) => ( // Loop through data with type IOTServerData
          <TableRow key={item._id} data={item} /> // Assuming TableRow uses item properties
        ))}
      </tbody>
    </table>
  );
};

export default Table;