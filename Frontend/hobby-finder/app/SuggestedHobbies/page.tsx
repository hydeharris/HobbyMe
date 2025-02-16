"use client";

import Image from "next/image";
import ActivityCard from "../../components/ActivityCard";
import { activities } from "../data/activityData";
import { useState, useEffect } from "react";

export default function About() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredActivities = activities.filter((activity) =>
    activity.tags.some((tag) => selectedItems.includes(tag))
  );

  useEffect(() => {
    const storedItems = localStorage.getItem("selectedItems");
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }
  }, []);

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
        <h1 className="header">
          We found some hobbies that <br></br> might interest you...
        </h1>
        <div className="scrollable-list">
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={index}
              imageSrc={activity.imageSrc}
              activityName={activity.activityName}
              tags={activity.tags}
            />
          ))}
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
          margin: 20px auto;
          max-height: 500px; // Increased height
          overflow-y: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr); // 4 items per row
          gap: 20px; // Space between cards
          padding: 20px;
          width: 100%;
          max-width: 1200px; // Increased to accommodate 4 cards per row
  
        // Custom scrollbar styling
        &::-webkit-scrollbar {
          width: 8px;
        }
  
        &::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        &::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .list-item {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 300px;
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
