import React from 'react';
import './Table.css';

export interface Column<T> {
  id:  number;
  accessorKey: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  caption: string;
}

export function Table<T>({data, columns, caption}: TableProps<T>) {
  return (
    <div tabIndex={0} role="region" aria-label={caption} className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} scope="col"> 
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => {
                const cellContent = column.render
                  ? column.render(item)
                  : String(item[column.accessorKey!]);
                return <td key={column.id}>{cellContent}</td>;
              })}
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  )
}