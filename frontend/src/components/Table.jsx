import { useState } from "react";
import TableRow from "./TableRow";
import data from '../data/books.json';

const Table = ({ handleSummaryDetails}) => {

    const [rows, setRows] = useState(data)

    const handleSave = (updatedData) => {
        rows.push(updatedData)
        setRows(rows)
    };

    const handleDeleteClick = (email) => {
        const updatedData = rows.filter(row => row.email !== email);
        setRows(updatedData);
    }

    return (
        <div className="bg-blue-200 min-h-screen  flex justify-center  dark:bg-slate-700">
            <table className="rounded-md table-fixed  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 m-5">
                <thead class="text-xs  text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-white">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Year Published
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Summary
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((rowData, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    data={rowData}
                                    onSave={handleSave}
                                    handleDeleteClick = {handleDeleteClick}
                                    handleSummaryDetails = {handleSummaryDetails}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default Table;