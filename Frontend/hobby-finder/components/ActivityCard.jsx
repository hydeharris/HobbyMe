import React from 'react';
import { useRouter } from 'next/navigation';

const ActivityCard = ({ imageSrc, activityName, tags }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/HobbyDetails?activity=${activityName}`);
  };

  return (
    <div className="w-64 rounded-xl overflow-hidden bg-white shadow-lg"
    onClick={handleClick}
    >  
      {/* Landscape image - reduced height */}
      <div className="w-full h-40">
        <img 
          src={imageSrc} 
          alt={activityName} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Activity name section - reduced padding */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-black">{activityName}</h2>
        
        {/* Tags container with 2x2 grid - smaller text */}
        <div className="grid grid-cols-2 gap-2">
          {tags.map((tag, index) => (
            <div 
              key={index}
              className="bg-[#3c2415] text-white py-2 px-3 rounded-full text-center text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const infoCards = [
  {
    name: "Bob",
    photo: "/images/bob.jpg",
    description: "Bob is a friendly guy who loves hiking."
  },
  {
    name: "Alice",
    photo: "/images/alice.jpg",
    description: "Alice enjoys painting and reading books."
  }
];
export default ActivityCard;