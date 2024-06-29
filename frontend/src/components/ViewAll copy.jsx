import React, { useState, useEffect } from "react";
import Operation from "./Operation";

const ViewAll = () => {
  const [books, setBooks] = useState([]);

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
        console.log("data: " + data);
        if (data.success) {
          console.log(data.data);
          setBooks(data.data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <>
      <div className="w-full bg-slate-800">
        <div className="overflow-x-auto m-5 p-5 flex flex-col justify-center items-center h-screen">
          <Operation route="/add" operation="Add a Book" />
          <div className="p-5 flex flex-col justify-center items-center bg-slate-50 border border-gray-800 rounded-lg overflow-scroll">
            <div className="w-full text-center bg-gray-300 p-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Books
            </div>
            <table className="table-auto min-w-full divide-y divide-gray-200 border border-black shadow-2xl">
              <thead className="bg-gray-300 text-lg font-bold border border-gray-800">
                <tr className="">
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Year Published
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Book Link
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Summary
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Edit
                  </th>
                  <th className="px-6 py-3 text-left  text-gray-500 uppercase">
                    Delete
                  </th>

                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {books.map((book) => (
                  <tr key={book._id} className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {book.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {book.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {book.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {book.link}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {book.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
