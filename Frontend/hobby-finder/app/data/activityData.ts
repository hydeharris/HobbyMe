export interface Activity {
    imageSrc: string;
    activityName: string;
    tags: string[];
  }
  
  export const activities: Activity[] = [
    {
      imageSrc: "hiking.jpg",
      activityName: "Hiking",
      tags: ["Outdoor", "Adventure", "Fitness", "Nature"],
    },
    {
      imageSrc: "cooking.jpg",
      activityName: "Cooking",
      tags: ["Food", "Learning", "Social", "Indoor"],
    },
    {
      imageSrc: "painting.jpg",
      activityName: "Painting",
      tags: ["Art", "Creativity", "Relaxing", "Indoor"],
    },
    {
      imageSrc: "pineTrees.jpg",
      activityName: "Painting",
      tags: ["Art", "Creativity", "Relaxing", "Indoor"],
    }
  ];
  