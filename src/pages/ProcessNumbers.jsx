import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProcessNumbers = () => {
  const location = useLocation();
  const { binaryTree } = location.state || {};

  console.log("This is the tree" + JSON.stringify(binaryTree, null, 2));

  return (
    <div>
      <Navbar />
      <h1>Process Numbers</h1>
      <div>
        {binaryTree ? (
          <div>
            <pre>{JSON.stringify(binaryTree, null, 2)}</pre>
          </div>
        ) : (
          <p>No binary tree data to display.</p>
        )}
      </div>
    </div>
  );
};

export default ProcessNumbers;
