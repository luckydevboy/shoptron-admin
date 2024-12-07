import React from "react";

type Props = {
  headers: { key: string; title: string }[];
  // FIXME: This should be generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] | undefined;
  error: string;
  isLoading: boolean;
};

const Table = ({ headers, data, error, isLoading }: Props) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-y-scroll">
      <table className="min-w-full divide-y divide-neutral-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-neutral-700 uppercase"
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {(isLoading || error) && (
            <tr>
              <td colSpan={headers.length} className="px-6 py-4">
                {isLoading ? (
                  <svg
                    className="animate-spin h-4 w-4 text-primary-500 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <div className="text-error-600 text-center">{error}</div>
                )}
              </td>
            </tr>
          )}
          {data?.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700"
                >
                  {item[header.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
