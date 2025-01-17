import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "NULL",
    author: "NULL",
    year: "NULL",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const [addClciked, setAddClicked] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddClicked(!addClciked)
    const formDataFinal = new FormData();
    formDataFinal.append('title', formData.title);
    formDataFinal.append('author', formData.author);
    formDataFinal.append('year', formData.year);
    if (selectedFile) {
      formData["file"] = selectedFile
      formDataFinal.append("file", selectedFile);
      console.log("Uploading file...", formData);
    }
    console.log("formDataFinal: ", formDataFinal)
    try {
      const response = await fetch("http://localhost:8000/addbook", {
        method: "POST",
        body: formDataFinal
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Book added successfully");
        navigate("/");
      } else {
        alert("Operation failed. Please try again. " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-800 overflow-y-scroll">
        <div className="p-10 rounded-md bg-white shadow-2xl">
          <div className="w-full text-center  m-2  p-4 font-extrabold leading-none tracking-tight text-slate-800 md:text-xl lg:text-3xl dark:text-white">
            Add A Book
          </div>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-row flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="title"
                >
                  Book Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="title"
                  type="text"
                  placeholder="The Famous Five"
                  name="title"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full  px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="author"
                >
                  Author
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="author"
                  type="text"
                  placeholder="Enid Blyton"
                  onChange={handleChange}
                  name="author"
                  required
                />
              </div>
              <div className="w-full  px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="year"
                >
                  Year Published
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="year"
                  type="number"
                  placeholder="2024"
                  onChange={handleChange}
                  name="year"
                  max={2024}
                  min={1500}
                  required
                />
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label htmlFor="file" className="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2">Upload Book</label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="file"
                  id="file"
                  name="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <a
                href="/"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                {
                  addClciked ? (<div
                    class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status">
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                  </div>) : (
                    <>
                      Add Book
                    </>

                  )
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
