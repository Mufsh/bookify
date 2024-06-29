import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ViewAll from "./components/ViewAll";
import AddBook from "./components/AddBook";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="h-screen bg-[url('assets/background-sm.jpg')] lg:bg-[url('assets/background.jpg')] bg-cover">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/viewall" element={<ViewAll />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
