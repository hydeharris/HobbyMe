"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendData = async () => {
    try {
      setLoading(true);
      console.log(JSON.stringify({ data: selectedItems }));
      // Assuming Flask server is running on port 5000
      const response = await fetch("http://localhost:8000/process-array", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: selectedItems }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponse(result.message);
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error properly regardless of its type
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setResponse(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const items: string[] = [
    "Books",
    "Games",
    "Strategy",
    "Travels",
    "Sports",
    "Music",
    "Art",
    "Competitions",
    "Learning",
    "Socializing",
    "Exploring",
    "Creating",
    "Exercising",
    "Relaxing",
    "Adventuring",
    "Nature",
    "Technology",
    "Fashion",
    "Food",
    "Movies",
  ];

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    console.log(selectedItems.toString());
  };

  return (
    <div className="background">
      <Image
        src="/pineTrees.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="blur"
      />
      <div className="content">
        <h1 className="header">Let's get to know you...</h1>
        <h2 className="subheader">What are your interests?</h2>
        <div className="scrollable-list">
          {items.map((item) => (
            <div key={item} className="list-item">
              <label htmlFor={item}>{item}</label>

              <input
                type="checkbox"
                id={item}
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
              />
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <div className="nav-button">
            <button className="circle-button" onClick={() => handleSendData()}>
              →
            </button>
            <p>Next</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
        }
        .header {
          font-size: 3rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        .subheader {
          font-size: 2rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        .scrollable-list {
          background-color: rgba(255, 255, 255, 1);
          margin-top: 20px;
          max-height: 200px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 20px 17px;
        }
        .list-item {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 300px;
          color: black;
          background-color: rgba(255, 255, 255, 0);
        }
        .navigation-buttons {
          display: flex;
          justify-content: space-between; /* Changed from center */
          align-items: center;
          flex-direction: row;
          width: 200px; /* Set a fixed width */
          margin: 20px auto; /* Center the container using margin auto */
        }
      `}</style>
    </div>
  );
}
