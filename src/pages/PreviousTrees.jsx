import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const PreviousTrees = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/previous-trees"
        );
        setTrees(response.data);
      } catch (error) {
        console.error("There was an error fetching the trees data:", error);
      }
    };

    fetchTrees();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Previous Trees</h1>
      {trees.length > 0 ? (
        <ul>
          {trees.map((tree) => (
            <li key={tree.id} className="link-item">
              <p className="link-id">ID: {tree.id}</p>
              <p>Input Numbers: {tree.inputNumbers}</p>
              <p>Binary Tree Structure: {tree.binaryTreeStructure}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No previous trees found.</p>
      )}
    </div>
  );
};

export default PreviousTrees;
