import "./App.css";
import Data from "./components/Data";
import Search from "./components/Search";
import Map from "./components/Map";
import { useEffect, useState } from "react";
function App() {
const [fetchedData, setFetchedData] = useState({})
const [searchedIP, setSearchedIP] = useState('')
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_0BH3NjKYh6qTCXmV6lCKuZL18XKTP&ipAddress=8.8.8.8');
  //     const data = await response.json();
  //     setFetchedData(data)
    
  //   }
  //   fetchData()
    
  // }, [])
  console.log(searchedIP)

  console.log(fetchedData)
  return (
    <>
      <div className="z-0 flex flex-col bg-[url('assets\pattern-bg-mobile.png')] h-1/3 justify-content align-center ">
        <div className="h-1/4 flex self-center my-8 items-center lg:h-1/3">
        
          <h1 className="h-1/3 self-center items-center font-rubik font-medium text-white text-3xl text-center">
            IP Adress Tracker
          </h1>
        </div>
        <Search setSearchedIP={setSearchedIP}/>
        {/* <Data passedData={fetchedData}/> */}
      </div>
      <Map />
    </>
  );
}

export default App;
