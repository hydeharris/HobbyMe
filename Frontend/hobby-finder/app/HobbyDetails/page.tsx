"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // Add useEffect import
import { activities } from "../data/activityData";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function About() {
  const searchParams = useSearchParams();
  const activityParam = searchParams.get("activity");
  const router = useRouter();

  const targetActivity = activityParam ? [activityParam] : ["Cooking"]; // Default to "Cooking" if no parameter
  const activitesMatch = activities.filter((activity) =>
    targetActivity.includes(activity.activityName)
  );

  const sendBack = () => {
    router.push("/SuggestedHobbies");
  };

  const restartData = async () => {
    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: inputMessage,
        activity: activityProfile.activityName,
      }),
    });
  };
  const restart = () => {
    restartData();
    localStorage.clear();
    router.push("/");
  };

  const activityProfile = activitesMatch[0];
  const instructions = activityProfile.steps;
  const [fitDescription, setFitDescription] = useState(
    activityProfile.description
  );
  interface ChatMessage {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
  }

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi! I'm your hobby helper. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Add this function to handle sending messages
  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      try {
        // Send message to chat endpoint
        const response = await fetch("http://localhost:8000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputMessage,
            activity: activityProfile.activityName,
          }),
        });

        const data = await response.json();

        if (data.status === "success") {
          const botResponse: ChatMessage = {
            id: messages.length + 2,
            text: data.message,
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botResponse]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const [isLoadingFit, setIsLoadingFit] = useState(false);

  const getFitDescription = async () => {
    setIsLoadingFit(true);
    try {
      const response = await fetch("http://localhost:8000/fit-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activity: activityProfile.activityName,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        setFitDescription(data.fitDescription);
      } else {
        console.error("Failed to get fit description:", data.message);
        setFitDescription(
          "We're currently analyzing how this activity fits your interests."
        );
      }
    } catch (error) {
      console.error("Error getting fit description:", error);
      setFitDescription(
        "Unable to analyze fit at the moment. Please try again later."
      );
    } finally {
      setIsLoadingFit(false);
    }
  };

  // Fix useEffect dependencies
  useEffect(() => {
    if (activityProfile?.activityName) {
      getFitDescription();
    }
  }, [activityProfile?.activityName]); // Now properly references activityProfile

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
        <div className="hobby-background">
          <div className="w-full h-40">
            <img
              src={`/${activityProfile.imageSrc}`}
              alt={"Hiking"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hobby-brief">Hobby Info:</div>
          <div className="hobby-name">{activityProfile.activityName}</div>
          <div className="hobby-info">
            <div className="hobby-info-subgroup-left">
              <div className="hobby-info-header">About:</div>
              <div className="bodyText">{activityProfile.description}</div>
              <div className="hobby-info-header">How to Get Started:</div>
              <div className="bodyText">
                <ol>
                  {" "}
                  {instructions.map((item, index) => (
                    <li key={item.id}>
                      {item.id}
                      {". " + item.text}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="hobby-info-subgroup-right">
              <div className="hobby-info-header">
                How we think it fits for you:
              </div>
              <div className="bodyText">
                {isLoadingFit ? <span>Analyzing fit...</span> : fitDescription}
              </div>

              <div className="hobby-info-header">Get Help:</div>
              <div className="chat-box">
                <div className="messages-container">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`message ${message.sender}`}>
                      <div className="message-bubble">
                        {message.text}
                        <span className="timestamp">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="message-input"
                  />
                  <button onClick={handleSendMessage} className="send-button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-buttons">
          <div className="nav-button">
            <button className="circle-button" onClick={sendBack}>
              ←
            </button>
            <p>Back</p>
          </div>
          <div className="nav-button">
            <button className="circle-button" onClick={restart}>
              ↺
            </button>
            <p>Start Over</p>
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

        .hobby-background {
          margin: 20px auto;
          width: 90vw;
          height: 80vh;
          max-width: 1500px;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          background-color: rgba(255, 255, 255, 1);
          border-radius: 20px 17px;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          width: 200px;
          margin: 20px auto;
        }

        .hobby-brief {
          font-size: 1rem;
          text-align: left;
          font-weight: bold;
          color: black;
          margin-top: 10px;
          margin-left: 20px;
        }
        .hobby-name {
          font-size: 4rem;
          text-align: left;
          font-weight: bold;
          color: black;
          margin-left: 20px;
          margin-top: -15px;
        }
        img {
          border-radius: 20px 20px 0 0;
        }

        .hobby-info {
          display: flex;
          width: 100%;
          overflow: hidden; /* prevents children from visibly overflowing */
        }
        .hobby-info-subgroup-left {
          flex: 3;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0);
          overflow-y: auto; /* allows vertical scrolling if content is too tall */
        }
        .hobby-info-subgroup-right {
          margin-top: 0px;
          flex: 7;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0);
          overflow-y: auto; /* allows vertical scrolling if content is too tall */
        }

        .hobby-info-header {
          font-size: 2rem;
          text-align: left;
          font-weight: bold;
          color: black;
          margin-top: 10px;
          margin-left: 20px;
        }
        .bodyText {
          font-size: 1rem;
          text-align: left;
          color: black;
          margin-top: 10px;
          margin-left: 20px;
        }

        .chat-box {
          display: flex;
          flex-direction: column;
          height: 80%;
          background-color: white;
          overflow: hidden;
        }

        .messages-container {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message {
          display: flex;
          margin-bottom: 8px;
        }

        .message.user {
          justify-content: flex-end;
        }

        .message-bubble {
          max-width: 70%;
          padding: 12px;
          border-radius: 16px;
          position: relative;
        }

        .message.user .message-bubble {
          background-color: #007aff;
          color: white;
          border-bottom-right-radius: 4px;
          text-align: left;
        }

        .message.bot .message-bubble {
          background-color: #e9ecef;
          color: black;
          border-bottom-left-radius: 4px;
          text-align: left;
        }

        .timestamp {
          font-size: 0.7rem;
          opacity: 0.7;
          margin-left: 8px;
          display: inline-block;
        }

        .input-container {
          display: flex;
          padding: 16px;
          border-top: 1px solid #dee2e6;
          gap: 12px;
        }

        .message-input {
          flex-grow: 1;
          padding: 12px;
          border: 1px solid #dee2e6;
          border-radius: 24px;
          outline: none;
          color: black;
        }

        .message-input:focus {
          border-color: #007aff;
        }

        .send-button {
          padding: 8px 24px;
          background-color: #007aff;
          color: white;
          border: none;
          border-radius: 24px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .send-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
