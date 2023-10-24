import "./App.css";
import Data from "./components/Data";
import Search from "./components/Search";
import Maps from "./components/Maps";
import { useEffect, useState } from "react";
function App() {
const [fetchedData, setFetchedData] = useState({})
const [searchedIP, setSearchedIP] = useState('')
const [coordinates, setCoordinates] = useState([])
const apiKey = import.meta.env.VITE_KEY;
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8`
      );

      if (response.ok) {
        const data = await response.json();
        // Check if data is not null or empty before updating state
        if (data && Object.keys(data).length > 0) {
          setFetchedData(data);
          setCoordinates([data.location.lat, data.location.lng])
          console.log(data.location.lat)
        } else {
          console.error("Fetched data is null or empty.");
        }
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

useEffect(() => {
  console.log(fetchedData); // This will only run when fetchedData is updated
}, [fetchedData]);
  return (
    <>
      <div className="z-0 flex flex-col bg-[url('assets\pattern-bg-mobile.png')] h-1/3 justify-content align-center ">
        <div className="h-1/4 flex self-center my-8 items-center lg:h-1/3">
        
          <h1 className="h-1/3 self-center items-center font-rubik font-medium text-white text-3xl text-center">
            IP Adress Tracker
          </h1>
        </div>
        {/* <Search setSearchedIP={setSearchedIP} setPassedData={setFetchedData}/> */}
        {/* <Data passedData={fetchedData}/> */}
      </div>
      <Maps coord={coordinates}/>
    </>
  );
}

export default App;
