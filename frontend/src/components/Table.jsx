import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const Table = ({ handleSummaryDetails }) => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8000/api/viewall",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await response.json();
                if (data.success) {
                    console.log(data);
                    const books = data.data
                    const transformedBooks = books.map(book => ({
                        title: book.title,
                        author: book.author,
                        yearPublished: book.year,
                        category: book.category
                    }))
                    setRows(transformedBooks);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    const handleSave = async (updatedData) => {
        
        console.log("title: ", updatedData)
        
        const formData = new FormData()
        formData.append('title', updatedData.title)
        formData.append('author', updatedData.author)
        formData.append('year', parseInt(updatedData.yearPublished))
        formData.append('category', updatedData.category)
        console.log("formData: ", formData.yearPublished)
        try {
            const response = await fetch("http://localhost:8000/books/update", {
                method: "PUT",
                body: formData
            });
      
            const data = await response.json();
            console.log(data);
            if (data.success) {
                alert(data.message, data.book);
                rows.push(updatedData)
                setRows(rows)
            } else {
                alert("Operation failed. Please try again. " + data.message);
            }
          } catch (error) {
            console.error("Error:", error);
          }
    };

    const handleDeleteClick = async (title) => {
        const updatedData = rows.filter(row => row.title !== title);
        try {
            const response = await fetch(
                `http://localhost:8000/books/delete/${title}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await response.json();
            console.log(data)
            alert("Book deleted from database.")
        } catch (error) {
            console.error("Error deleting book:", error);
        }
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
                                    handleDeleteClick={handleDeleteClick}
                                    handleSummaryDetails={handleSummaryDetails}
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