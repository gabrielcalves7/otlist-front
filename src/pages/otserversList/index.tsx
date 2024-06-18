'use client'
import React, { useEffect, useState } from 'react';
import { httpRequest } from "@/services/api";
import PaginatedTable from "@/components/paginatedTable";
import { IOTServerData } from "@/components/otserverItem";

export interface IPaginationData {
  items: IOTServerData[]|[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const OTServersList: React.FC = () => {
  
  
  const [ loading, setLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ paginationData, setPaginationData ] = useState<IPaginationData|null>(null)
  const [totalItems, setTotalItems] = useState<number>(0)
  const maxItemsToShow = 11;
  
  const dataColumn = [
    'Location',
    'Name',
    'Website',
    'Release Date',
    'Rate',
    'Online',
    'Status',
  ]
  const onPageChange = (page: number) => {
    console.log("NEWPAGE:", page)
    setCurrentPage(page);
  };
  useEffect(() => {
    
    async function fetchData() {
      setLoading(true);
      
      
      try {
        const responseData = await httpRequest(`/api/otservers?amount=${ maxItemsToShow }&page=${ currentPage }`);
        console.log(responseData)
        
        const filteredData = responseData.data.items.map((item: IOTServerData) => ({
          location: item.location,
          name: item.name,
          url: item.url,
          launchDate: item.launchDate,
          initialRate: item.initialRate,
          playersOnline: String(item.playersOnline) + '/' + String(item.maxPlayersOnline),
          status: item.status,
        }));
        
        setPaginationData({
          items: filteredData,
          totalPages: responseData.data.totalPages,
          currentPage,
          onPageChange: onPageChange
        })
        setTotalItems(responseData.data.totalCount)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, [ currentPage ]);
  
  return (
    <div className="p-5 mt-14">
      { loading || paginationData == null ? (
        <p>Loading data...</p>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold my-4">{totalItems} OTServers Found.</h1>
          <PaginatedTable
            paginationData={ paginationData }
            dataColumn={dataColumn}
          />
        </div>
      ) }
    </div>
  );
};

export default OTServersList;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  
  return {
    props: { data },
  };
};
