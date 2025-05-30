import React from 'react';

interface DashboardTableProps {
    headers: string[];
    rows: Array<{ [key: string]: string | number }>;
}

const DashboardTable: React.FC<DashboardTableProps> = ({ headers, rows }) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DashboardTable;