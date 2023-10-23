
import { useState, useEffect } from "react";
import Arrow from "../assets/icon-arrow.svg";
import PropTypes from 'prop-types'; // Import PropTypes

const Search=({setSearchedIP}) => {
    const [modInputIP, setModInputIP] = useState('')
   
    const handleChange = (e) => {
      const input = e.target.value
      setModInputIP(input)

    }
    const searchingIP = () =>{
        setSearchedIP(modInputIP)
      
    }

    
  return ( 
    <div className="flex flex-row items-center justify-center h-1/4 lg:h-1/3 w-5/6 self-center 	"
    onClick={() => searchingIP()}>
      <input type="text"
    value={modInputIP}
    onChange={handleChange}
      className="w-72 h-8  font-rubik text-lg rounded-l-md 
      focus:outline-none lg:h-12 lg:w-[400px] lg:p-8" />
      <div className="flex justify-center items-center
       bg-black h-8 w-8 
       rounded-r-md lg:h-16 lg:w-16 ">
      <img src={Arrow} alt="" className="h-2"/>
      </div>
   
    </div>
  );
}
Search.propTypes = {
    setSearchedIP: PropTypes.func.isRequired, // Define setSearchedIP as a required function prop
  };
export default Search;
