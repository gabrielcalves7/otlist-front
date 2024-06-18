"use client"

interface TableHeader {
  columns: string[]
}

export default function MenuItem({ columns }: TableHeader) {
  return (
    <thead>
    <tr>
      { columns.map((item, index) => (
        <th key={ index }>{ item }</th>
      )) }
    </tr>
    </thead>
  );
}
