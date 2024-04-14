import "./App.css";
import Data from "./components/Data";
import Search from "./components/Search";
import Maps from "./components/Maps";
import { useEffect, useState } from "react";
function App() {
const [fetchedData, setFetchedData] = useState({})
const [searchedIP, setSearchedIP] = useState('')
const [coordinates, setCoordinates] = useState([50.499527,4.475402500000001])


useEffect(() => {
  console.log(coordinates); // This will only run when fetchedData is updated
}, [coordinates]);
useEffect(() => {
  console.log(fetchedData); // This will only run when fetchedData is updated
}, [fetchedData]);
  return (
    <>
      <div className="z-0 flex flex-col bg-[url('assets\pattern-bg-mobile.png')] h-1/3 justify-content align-center ">
        <div className="h-1/5 flex self-center my-6 items-center lg:h-1/5">
        
          <h1 className=" self-center items-center font-rubik font-medium text-white text-3xl text-center">
            IP Adress Tracker
          </h1>
        </div>
        <Search setSearchedIP={setSearchedIP} setPassedData={setFetchedData} setCoordinates={setCoordinates}/>
        <Data passedData={fetchedData} />
      </div>
      <Maps  coord={coordinates} passedData={fetchedData}/>
    </>
  );
}

export default App;
