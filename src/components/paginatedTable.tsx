import React from 'react';
import { IPaginationData } from "@/pages/otserversList";
import Row from "@/components/row";
import PaginationLink from "@/components/paginationLink";

interface PaginatedTableProps {
  paginationData: IPaginationData
  dataColumn: string[]
}

const PaginatedTable: React.FC<PaginatedTableProps> = ({ paginationData, dataColumn }) => {
  const { items, totalPages, onPageChange, currentPage }:IPaginationData = paginationData
  
  console.log("PAGADATAAA",paginationData)
  console.log("AMOUNTITEXASXSAASMS",paginationData.items.length)
  return (
    <div className="w-full">
      <table className="table-auto w-full">
        <thead>
        <tr>
          {
            dataColumn.map((item, index) =>
              <th key={index}>{ item }</th>
            )
          }
        </tr>
        </thead>
        <tbody>
        { items.map((item, index) => (
          <Row key={index} data={item}/>
        )) }
        </tbody>
      </table>
      <div className="flex justify-end mt-5">
        <PaginationLink currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}/>
      </div>
    </div>
  );
};

export default PaginatedTable;
