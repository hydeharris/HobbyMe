"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const imageRef1 = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const animateBackground = () => {
      if (imageRef1.current && imageRef2.current) {
        let position1 = 0;
        let position2 = 0;
        const scrollSpeed = 0.2;

        const animate = () => {
          if (!imageRef1.current || !imageRef2.current) return;

          position1 += scrollSpeed;
          position2 -= scrollSpeed;

          if (position1 >= imageRef1.current.clientWidth) {
            position1 = -imageRef1.current.clientWidth;
          }

          if (position2 <= -imageRef2.current.clientWidth) {
            position2 = imageRef2.current.clientWidth;
          }

          imageRef1.current.style.transform = `translateX(${position1}px)`;
          imageRef2.current.style.transform = `translateX(${position2}px)`;

          requestAnimationFrame(animate);
        };

        animate();
      }
    };

    animateBackground();
  }, []);

  return (
    <div className="background">
      <div className="background-image-container">
        <Image
          ref={imageRef1}
          src="/pineTrees.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur"
        />
        <Image
          ref={imageRef2}
          src="/pineTrees.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur"
        />
      </div>
      <div className="content">
        <h1 className="header">We will get back to you!</h1>

        <style jsx>{`
          .background {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
          }
            imageRef1 {
            transform: rotateY(180deg);
            }
          .background-image-container {
            width: 100%;
            height: 200%; /* Double the height to accommodate both images */
            position: absolute;
            top: 0;
            left: 0;
            animation: moveVertically 40s linear infinite;
          }

          .background-image-container > :nth-child(1) {
            top: 0;
          }
          .background-image-container > :nth-child(2) {
            bottom: 0;
          }

          @keyframes moveVertically {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

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
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            width: 200px;
            margin: 20px auto;
          }
        `}</style>
      </div>
    </div>
  );
}