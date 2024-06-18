"use client";

import { IOTServerData } from "@/components/otserverItem";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas)
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

const detailsLookup: IconLookup = { prefix: 'fas', iconName: 'circle-info' }
const detailsIconDefinition: IconDefinition = findIconDefinition(detailsLookup)

interface ITableRow {
  data: IOTServerData;
}

export default function Row({ data }: ITableRow) {
  const router = useRouter();
  
  const handleRowClick = (url: string): void => {
    router.push(url);
  };
  const countryFlagURL = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${data.location}.svg`;
  return (
    <tr className="border-b-slate-600 border-b-2 cursor-pointer hover:bg-pallet-dark-blue hover:text-white transition">
      { Object.keys(data as IOTServerData).map((item, index) => (
        <td key={index} className={`p-3 text-center ${item == 'location' ? 'flex justify-center' : ''}`}>
          { item == 'location' ? <Image
            src={ countryFlagURL }
            alt="Celebration Gif"
            width={ 25 }
            height={ 25 }
            className="flex justify-center object-fill"
          /> :
          data[item as keyof IOTServerData] }
        </td>
      )) }
      <td onClick={ () => handleRowClick(data.url) } className="cursor-pointer p-3 text-center">
        <FontAwesomeIcon icon={detailsIconDefinition} />
      </td>
    </tr>
  );
}
