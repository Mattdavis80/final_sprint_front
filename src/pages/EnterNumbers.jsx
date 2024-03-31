import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const EnterNumbers = () => {
  const [numbers, setNumbers] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/process-numbers",
        numbers,
        {
          headers: { "Content-Type": "text/plain" },
        }
      );
      console.log(response.data);
      navigate("/process-numbers", { state: { binaryTree: response.data } });
    } catch (error) {
      console.error("Error submitting numbers:", error, numbers);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="intro-text">
        <h1>Enter Numbers</h1>
        <p>Input numbers below to generate a binary tree structure</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="Enter numbers separated by commas (ex. 8,3,14,2,5,9,11)"
          className="input-large"
        />
        <button type="submit" className="button-large">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterNumbers;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router v6

// const EnterNumbers = () => {
//   const [numbers, setNumbers] = useState("");
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   // Function to load previous numbers
//   const loadPreviousNumbers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/previous-trees");
//       console.log(response.data); // Log or handle previous numbers
//     } catch (error) {
//       console.error("Error fetching previous numbers:", error);
//     }
//   };

//   useEffect(() => {
//     loadPreviousNumbers(); // Load previous numbers on component mount
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/process-numbers",
//         numbers,
//         {
//           headers: { "Content-Type": "text/plain" },
//         }
//       );
//       console.log(response.data);
//       // Navigate with state
//       navigate("/process-numbers", { state: { binaryTree: response.data } });
//     } catch (error) {
//       console.error("Error submitting numbers:", error, numbers);
//     }
//   };

//   // Function to handle showing previous numbers
//   const handleShowPrevious = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/previous-trees");
//       console.log(response.data); // Log or handle showing previous numbers
//     } catch (error) {
//       console.error("Error fetching previous numbers:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Enter Numbers</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={numbers}
//           onChange={(e) => setNumbers(e.target.value)}
//           placeholder="Enter numbers separated by commas"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default EnterNumbers;
