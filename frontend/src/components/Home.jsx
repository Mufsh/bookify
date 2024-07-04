import { useState } from "react";
import ViewAll from "./ViewAll";
import Summary from "./Summary";
const Home = () => {
  const [summaryClicked, setSummaryClicked] = useState(false)
  const [summary, setSummary] = useState(
    {
      title: "",
      author: "",
      yearPublished: "",
      category: "",
      summary: "",
      fetched: false,
      clicked: false
    }
  )
  const handleSummaryClicked = () => {
    setSummaryClicked(!summaryClicked)
  }

  const handleSummaryDetails = (details) => {
    setSummary(details)
    if(details.clicked && !details.fetched)
        handleSummaryClicked()
  }

  return (
    <>
      <div className="w-full bg-slate-800">
        <div className="m-5 p-5 flex justify-center items-center flex-col ">
          {!summaryClicked ?
            (<ViewAll  handleSummaryDetails = {handleSummaryDetails }/>) :
            <Summary details = {summary} handleSummaryClicked = {handleSummaryClicked}/>
          }
        </div>
      </div>
    </>
  );
};

export default Home;
