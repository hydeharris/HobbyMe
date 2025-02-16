"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FreeTimeQuestion() {
  const [freeTime, setFreeTime] = useState(3);
  const [exertion, setExertion] = useState(50);

  const router = useRouter();

  const handleSubmitValues = async () => {
    try {
      const response = await fetch("http://localhost:8000/store-fitness", {
        // Send message to chat endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          freeTime: freeTime,
          exertion: exertion,
        }),
      });
      const data = await response.json();

      if (data.status === "success") {
        console.log("Values stored successfully");
        // You can proceed to next page here if needed
        router.push("/PersonalInterests");
      }
    } catch (error) {
      console.error("Error sending values:", error);
    }
  };

  const handleNext = async () => {
    await handleSubmitValues();
    router.push("/PersonalInterests");
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
        <div className="question">
          <h1 className="subheader">How much free time do you have?</h1>
          <div className="slider-container">
            <div className="slider-labels">
              <span className="left-label">less</span>
              <span className="right-label">more</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={freeTime}
              onChange={(e) => setFreeTime(Number(e.target.value))}
              className="slider"
              id="freeTimeRange"
            />
            <h2>{freeTime} hours</h2>
          </div>
        </div>

        <div className="question">
          <h1 className="subheader">
            How much excertion would you be willing to endure?
          </h1>
          <div className="slider-container">
            <div className="slider-labels">
              <span className="left-label">less</span>
              <span className="right-label">more</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={exertion}
              onChange={(e) => setExertion(Number(e.target.value))}
              className="slider"
              id="excertionRange"
            />
            <h2>{exertion}% challenging</h2>
          </div>
        </div>

        <div className="navigation-buttons">
          <div className="nav-button">
            <button className="circle-button" onClick={handleNext}>
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
        .background {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: "Isok Web", sans-serif;
        }
        .question {
          margin-bottom: 6rem;
        }
        .subheader {
          font-size: 2rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        }
        .blur {
          filter: blur(8px);
        }
        .slider-container {
          width: 75%;
          margin: 0 auto;
        }
        .slider {
          width: 75%;
          margin-top: 16px;
        }
        .slider-labels {
          display: flex;
          justify-content: space-between;
          margin-bottom: -34px;
          font-size: 0.9rem;
          padding: 0 30px;
        }
        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          width: 200px;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
}
