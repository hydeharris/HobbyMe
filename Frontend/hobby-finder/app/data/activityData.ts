export interface Step {
  id: number;
  text: string;
}

export interface Activity {
    imageSrc: string;
    activityName: string;
    tags: string[];
    description: string;
    steps: Step[];
  }
  
  export const activities: Activity[] = [
    {
      imageSrc: "hiking.jpg",
      activityName: "Hiking",
      tags: ["Outdoor", "Adventure", "Fitness", "Nature"],
      description: "Hiking is a great way to get outdoors and enjoy nature. It's also a great way to get some exercise and stay fit.",
      steps: [
        { id: 1, text: "Find a trail" },
        { id: 2, text: "Pack your gear" },
        { id: 3, text: "Start hiking" }
      ]
    },
    {
      imageSrc: "cooking.jpg",
      activityName: "Cooking",
      tags: ["Food", "Learning", "Social", "Indoor"],
      description: "Cooking is a great way to get outdoors and enjoy nature. It's also a great way to get some exercise and stay fit.",
      steps: [
        { id: 1, text: "Pack a trail" },
        { id: 2, text: "Pack your gear" },
        { id: 3, text: "Start hiking" }
      ]
    },
    {
      imageSrc: "painting.jpg",
      activityName: "Painting",
      tags: ["Art", "Creativity", "Relaxing", "Indoor"],
      description: "Hiking is a great way to get outdoors and enjoy nature. It's also a great way to get some exercise and stay fit.",
      steps: [
        { id: 1, text: "Find a trail" },
        { id: 2, text: "Pack your gear" },
        { id: 3, text: "Start hiking" }
      ]    },
    {
      imageSrc: "pineTrees.jpg",
      activityName: "Painting",
      tags: ["Art", "Creativity", "Relaxing", "Indoor"],
      description: "Hiking is a great way to get outdoors and enjoy nature. It's also a great way to get some exercise and stay fit.",
      steps: [
        { id: 1, text: "Find a trail" },
        { id: 2, text: "Pack your gear" },
        { id: 3, text: "Start hiking" }
      ]
    },
    {
      imageSrc: "pineTrees.jpg",
      activityName: "Woodworking",
      tags: ["Art", "Creativity", "Relaxing", "Indoor"],
      description: "Hiking is a great way to get outdoors and enjoy nature. It's also a great way to get some exercise and stay fit.",
      steps: [
        { id: 1, text: "Find a trail" },
        { id: 2, text: "Pack your gear" },
        { id: 3, text: "Start hiking" }
      ]
    }
  ];
  