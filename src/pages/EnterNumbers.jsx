import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const EnterNumbers = () => {
  const [numbers, setNumbers] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post("your-api-endpoint", { numbers });
      console.log(response.data);
      // Handle response data
    } catch (error) {
      console.error("Error submitting numbers:", error);
      // Handle error
    }
  };

  const handleShowPrevious = async () => {
    try {
      // Adjust the API endpoint as necessary
      const response = await axios.get("your-api-endpoint");
      console.log(response.data);
      // Handle showing previous numbers
    } catch (error) {
      console.error("Error fetching previous numbers:", error);
      // Handle error
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Enter Numbers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="Enter numbers separated by commas"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleShowPrevious}>Show Previous</button>
    </div>
  );
};

export default EnterNumbers;
