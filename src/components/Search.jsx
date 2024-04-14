
import { useState, useEffect } from "react";
import Arrow from "../assets/icon-arrow.svg";
import PropTypes from 'prop-types'; // Import PropTypes

const Search=({setSearchedIP, setPassedData, setCoordinates}) => {
    const [modInputIP, setModInputIP] = useState('')
    const apiKey = import.meta.env.VITE_KEY;
    const handleChange = (e) => {
      const input = e.target.value
      setModInputIP(input)

    }
    const url =`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${modInputIP}`
    const searchingIP = async () => {
      try {
        // Perform the API call here
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setSearchedIP(modInputIP);
          // Handle the fetched data here if needed
          console.log(data);
          setPassedData(data)
          setCoordinates([data.location.lat, data.location.lng])
          
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
  return ( 
    <div className="flex flex-row items-center justify-center h-1/4 lg:h-1/3 w-5/6 self-center 	z-10"
    >
      <input type="text"
      placeholder="Enter IP address"
    value={modInputIP}
    onChange={handleChange}
      className="w-72 h-8  font-rubik text-lg rounded-l-xl 
      focus:outline-none lg:h-12 lg:w-[400px] lg:p-8" />
      <div className="flex justify-center items-center
       bg-black h-8 w-8 
       rounded-r-xl lg:h-16 lg:w-16 "
       onClick={() => searchingIP()}
      //  onClick={()=>console.log(url)}
       
       >
      <img src={Arrow} alt="" className="h-2"/>
      </div>
   
    </div>
  );
}

export default Search;
