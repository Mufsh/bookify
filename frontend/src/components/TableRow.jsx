import { useEffect, useState } from "react";

const TableRow = ({ data, onSave, handleDeleteClick, handleSummaryDetails }) => {
    const [rowData, setRowData] = useState(data);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onSave(rowData);
    };

    const handleGenerateSummaryClick = (rowData) => {
        const details = {...rowData, ["summary"]: "This is the summary"}
        handleSummaryDetails(details)
    }

    const handleInputChange = (e, fieldName) => {
        const updatedData = { ...rowData, [fieldName]: e.target.value };
        setRowData(updatedData);
    };


    useEffect(() => {
        setRowData(data);
    }, [data])


    return (
        <tr className="border-b border-gray-200 bg-slate-300 dark:bg-slate-600 overflow-scroll">
            {Object.keys(rowData).map((fieldName, index) => (
                <td key={index} className="px-4 py-2 w-1/17 ">
                    {isEditing ? (
                        <input
                            type="text"
                            value={rowData[fieldName]}
                            onChange={(e) => handleInputChange(e, fieldName)}
                            className="w-full h-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                            style={{ width: "100%", height: "100%" }}
                        />
                    ) : (
                        <span className="w-full h-full flex items-center justify-center">
                            {typeof rowData[fieldName] === "string"
                                ? rowData[fieldName]
                                : rowData[fieldName].toString()}
                        </span>
                    )}
                </td>
            ))}
            <td className="px-4 py-2 w-1/17">
                <button
                    onClick={() => handleGenerateSummaryClick(rowData)}
                    className="bg-slate-600 hover:bg-slate-800 dark:bg-red-700 dark:hover:bg-red-900 text-white font-bold py-1 px-4 rounded"
                >
                    Generate Summary
                </button>
            </td>
            <td className="px-4 py-2 w-1/17">
                {isEditing ? (
                    <button
                        onClick={handleSaveClick}
                        className="bg-blue-500 hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white font-bold py-1 px-4 rounded"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={handleEditClick}
                        className="bg-green-500 hover:bg-green-700 dark:bg-cyan-800 dark:hover:bg-cyan-950 text-white font-bold py-1 px-4 rounded"
                    >
                        Edit
                    </button>
                )}
            </td>
            <td className="px-4 py-2 w-1/17">
                <button
                    onClick={() => handleDeleteClick(rowData["email"])}
                    className="bg-red-400 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-900 text-white font-bold py-1 px-4 rounded"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TableRow;