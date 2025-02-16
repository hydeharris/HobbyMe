"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/AmountQuestion");
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
        <h1 className="header">HobbyMe</h1>
        <h2 className="subheader">Welcome.</h2>
        <div className="navigation-buttons">
          <div className="nav-button">
            <button className="square-button" onClick={handleNext}>
              Get Started
            </button>
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
          margin-top: 20px;
          max-height: 200px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          flex-direction: column;
          width: 200px; /* Set a fixed width */
          margin: 20px auto; /* Center the container using margin auto */
        }
        .nav-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 10px;
        }
        .square-button {
          width: 150px;
          height: 50px;
          border-radius: 5% / 15%;
          border: none;
          background-color: white;
          color: black;
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
        .square-button:hover {
          background-color: #f0f0f0;
        }
        .nav-button p {
          margin-top: 5px;
          color: white;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
