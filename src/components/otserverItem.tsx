import React from 'react';
import Link from "next/link";

export interface IOTServerData {
  _id: string,
  name: string,
  url: string,
  location: string,
  creationDate: string,
  launchDate: string,
  playersOnline: number,
  initialRate: number,
  maxPlayersOnline: number,
  ownerName: string,
  status: string,
}

const OTServerItem = ({ data }: { data: IOTServerData }) => {
  return (
    <Link href={data.url}>
      <div>
        <h2>{data.name}</h2>
        <p>Players Online: {data.playersOnline}/{data.maxPlayersOnline}</p>
        <p>Initial Rate: {data.initialRate}</p>
        <p>Status: {data.status}</p>
        <p>Location: {data.location}</p>
      </div>
    </Link>
  );
};

OTServerItem.displayName = 'OTServerItem'; // Adding display name

export default OTServerItem;
