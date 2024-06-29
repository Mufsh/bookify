import React, { useState, useEffect } from "react";
import Operation from "./Operation";
import Table from "./Table";

const ViewAll = ({ handleSummaryDetails}) => {
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
          <div className="p-5 flex flex-col  bg-slate-50 border border-gray-800 rounded-lg overflow-scroll">
            <div className="w-full text-center bg-gray-300 p-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Books
            </div>
            <Table  handleSummaryDetails = {handleSummaryDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
