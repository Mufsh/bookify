

const Summary = ({ details, handleSummaryClicked }) => {
    const handleBackClick = () => {
        handleSummaryClicked()
    }
    return (
        <>
            <div className="w-full bg-slate-800">
                <div className="overflow-x-auto m-5 p-5 flex flex-col justify-center items-center h-screen">
                    <div className="w-full text-center bg-gray-300 p-4 rounded-lg  text-2xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Summary
                        {
                            details.fetched ? (
                                <div className="bg-slate-400 text-black text-lg font-sans tracking-wide p-4 m-3 rounded-md   flex flex-col justify-center   dark:bg-slate-700">
                                    <div className="font-bold ">
                                        Title: {details.title}, Author: {details.author}, Year Published: {details.yearPublished}, Category: {details.category}
                                    </div>
                                    {details.summary}
                                    <button
                                        onClick={handleBackClick}
                                        className="bg-blue-500 text-lg font-bold tracking-wider  hover:bg-blue-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white m-4  py-2 px-6 rounded"
                                    >
                                        Back
                                    </button>

                                </div>
                            ) : (<div className='flex space-x-2 justify-center items-center m-5 p-5 bg-white  dark:invert'>
                                <div className=' text-slate-950 text-2xl font-bold tracking-wider'>Generating Summary</div>
                                <div className='h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.4s]'></div>
                                <div className='h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.25s]'></div>
                                <div className='h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.10s]'></div>
                                <div className='h-4 w-4 bg-slate-600 rounded-full animate-bounce'></div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary;