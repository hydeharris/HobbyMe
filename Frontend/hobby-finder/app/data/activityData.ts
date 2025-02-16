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
      tags: ["Nature", "Exercise", "Exploring", "Adventuring"],
      description: "Hiking is a fantastic way to connect with nature, challenge yourself physically, and explore new environments.  Whether you prefer leisurely strolls through gentle meadows or challenging climbs up rugged mountains, there's a trail out there for you. Hiking not only improves your cardiovascular health and strengthens your muscles, but it also provides mental clarity and reduces stress. It's an opportunity to escape the hustle and bustle of daily life and immerse yourself in the tranquility of the natural world.  From spotting local wildlife to discovering breathtaking vistas, each hike offers a unique and rewarding experience.",
      steps: [
        { id: 1, text: "Start small: Don't feel pressured to tackle advanced trails right away. Begin with short, easy walks in local parks or nature reserves. This will help you get comfortable with being outdoors and build a base level of fitness." },
        { id: 2, text: "Gear up gradually: You don't need to buy expensive hiking boots and backpacks immediately. Start with comfortable walking shoes and a water bottle. As you become more serious about hiking, you can invest in better gear." },
        { id: 3, text: "Find local resources: Search online for hiking groups or clubs in your area. These groups often organize beginner-friendly hikes and can provide valuable advice on trails and gear." },
        { id: 4, text: "Learn basic safety: Familiarize yourself with essential hiking safety tips, such as how to pack a first-aid kit, what to do if you encounter wildlife, and how to navigate using a map or GPS." },
        { id: 5, text: "Buddy up: Hiking with a friend or family member is always a good idea, especially when you're just starting out. It's safer and more fun." },
        { id: 6, text: "Respect nature: Practice Leave No Trace principles by packing out all your trash, staying on marked trails, and avoiding disturbing wildlife." }
      ]
    },
    {
      imageSrc: "cooking.jpg",
      activityName: "Cooking",
      tags: ["Food", "Creating", "Learning", "Socializing"],
      description: "Cooking is a creative and essential life skill that allows you to nourish yourself and others. From simple weeknight meals to elaborate gourmet dishes, the culinary world is full of exciting possibilities.  Cooking is a great way to learn about different cultures, experiment with flavors, and express your creativity. It can also be a social activity, bringing friends and family together to share delicious food and create lasting memories. Whether you're a seasoned chef or a beginner in the kitchen, cooking is a rewarding experience that can bring joy and satisfaction.",
      steps: [
        { id: 1, text: "Start with the basics: Focus on mastering fundamental cooking techniques like chopping vegetables, boiling pasta, and cooking eggs. There are many online resources and cookbooks that teach these skills." },
        { id: 2, text: "Explore simple recipes: Choose easy-to-follow recipes with few ingredients. Websites and cookbooks aimed at beginners are a great place to start. Think one-pan meals, stir-fries, or simple pasta dishes." },
        { id: 3, text: "Don't be afraid to experiment: Once you're comfortable with basic recipes, start experimenting with flavors and ingredients. Add spices, herbs, or different vegetables to create your own variations." },
        { id: 4, text: "Invest in a few essential tools: You don't need a kitchen full of gadgets. Start with a good chef's knife, a cutting board, a saucepan, a frying pan, and a baking sheet." },
        { id: 5, text: "Watch cooking videos: Many online platforms offer free cooking tutorials that can help you learn new techniques and recipes." },
        { id: 6, text: "Join a cooking class: If you're looking for more structured learning, consider taking a beginner cooking class at a local community center or culinary school." }
      ]
    },
    {
      imageSrc: "painting.jpg",
      activityName: "Painting",
      tags: ["Art", "Creating", "Relaxing", "Expressing"],
      description: "Painting is a powerful form of artistic expression that allows you to translate your thoughts, emotions, and experiences onto canvas. Whether you prefer the realism of landscapes and portraits or the abstract expression of colors and shapes, painting offers a unique way to communicate your inner world. It's a therapeutic and meditative activity that can help you relax, de-stress, and tap into your creative potential.  From exploring different techniques and mediums to developing your own unique style, painting is a journey of self-discovery and artistic growth.",
      steps: [
        { id: 1, text: "Start with inexpensive supplies: You don't need to buy top-of-the-line paints and brushes when you're just starting out. Student-grade supplies are perfectly fine for practicing." },
        { id: 2, text: "Explore different mediums: Try acrylics, watercolors, or even just colored pencils to see which medium you enjoy working with the most." },
        { id: 3, text: "Practice basic techniques: Learn fundamental painting techniques like color mixing, brushstrokes, and layering. There are many free tutorials available online." },
        { id: 4, text: "Focus on simple subjects: Start with painting simple objects or landscapes before moving on to more complex compositions." },
        { id: 5, text: "Don't be afraid to make mistakes: Painting is a process of learning and experimentation. Mistakes are a natural part of the process and can often lead to new discoveries." },
        { id: 6, text: "Find inspiration: Look at the work of other artists for inspiration. Visit art museums, browse online galleries, or follow artists on social media." }
      ]
    },
      {
      imageSrc: "woodworking.jpg",
      activityName: "Woodworking",
      tags: ["Creating", "Crafts", "Building", "Learning"],
      description: "Woodworking is a craft that combines creativity, problem-solving, and hands-on skills to transform raw wood into functional and artistic objects. From building furniture and crafting decorative items to creating intricate sculptures and carvings, woodworking offers a wide range of possibilities. It's a rewarding hobby that allows you to create something tangible with your own hands, developing patience, precision, and a deep appreciation for the beauty of wood. Whether you're a beginner learning the basics or an experienced woodworker tackling complex projects, the journey of woodworking is one of continuous learning and creative expression.",
      steps: [
        { id: 1, text: "Start with simple projects: Begin with small, easy projects like a birdhouse, a cutting board, or a small shelf. This will allow you to learn basic woodworking skills without feeling overwhelmed." },
        { id: 2, text: "Invest in basic tools: You don't need a lot of expensive tools to get started. A handsaw, a chisel, a measuring tape, and some sandpaper are enough to begin with." },
        { id: 3, text: "Learn from online resources: There are countless woodworking tutorials and project plans available online. Websites like YouTube and woodworking forums are great places to learn." },
        { id: 4, text: "Take a woodworking class: Consider taking a beginner woodworking class at a local community college or woodworking school. This will provide you with hands-on instruction and access to tools and equipment." },
        { id: 5, text: "Practice safety: Woodworking involves using sharp tools, so it's important to prioritize safety. Always wear safety glasses and follow proper safety procedures." },
        { id: 6, text: "Be patient: Woodworking takes time and practice. Don't get discouraged if your first projects aren't perfect. The most important thing is to have fun and keep learning." }
      ]
    },
    {
      imageSrc: "knitting.jpg",
      activityName: "Knitting",
      tags: ["Crafts", "Creating", "Relaxing", "Textiles"],
      description: "Knitting is a relaxing and creative craft that involves using needles and yarn to create fabric. From cozy sweaters and blankets to stylish scarves and hats, knitting offers endless possibilities for creating unique and personalized items. It's a great way to unwind, de-stress, and express your creativity.  It also allows you to produce practical items you can use or gift.",
      steps: [
        { id: 1, text: "Start with basic supplies: You'll need yarn, knitting needles, and a pair of scissors. Choose a yarn weight and needle size that are appropriate for your project." },
        { id: 2, text: "Learn the basic stitches: There are two fundamental knitting stitches: the knit stitch and the purl stitch. Many online tutorials and books can teach you these stitches." },
        { id: 3, text: "Practice simple projects: Begin with easy projects like a scarf or a dishcloth. These projects will help you practice the basic stitches and get comfortable with the knitting process." },
        { id: 4, text: "Find patterns: Once you're comfortable with the basics, you can start exploring different knitting patterns. There are countless patterns available online and in knitting books." },
        { id: 5, text: "Join a knitting group: Knitting groups are a great way to connect with other knitters, share tips and tricks, and get inspiration for new projects." }
      ]
    },
    {
      imageSrc: "gardening.jpg",
      activityName: "Gardening",
      tags: ["Nature", "Outdoors", "Creating", "Relaxing"],
      description: "Gardening is a rewarding hobby that allows you to connect with nature, cultivate your own food, and create a beautiful outdoor space. From growing colorful flowers and delicious vegetables to tending to lush greenery and fragrant herbs, gardening offers a wide range of possibilities. It's a therapeutic activity that can reduce stress, improve your mood, and provide a sense of accomplishment.  It also connects you to the cycle of life and the natural world.",
      steps: [
        { id: 1, text: "Start small: If you're new to gardening, start with a small area or a few container plants. This will make it easier to manage and prevent you from feeling overwhelmed." },
        { id: 2, text: "Choose the right plants: Research plants that are well-suited to your climate, soil type, and the amount of sunlight your garden receives." },
        { id: 3, text: "Prepare the soil: Healthy soil is essential for healthy plants. Amend your soil with compost or other organic matter to improve its fertility and drainage." },
        { id: 4, text: "Plant your plants: Follow the instructions on the plant tags or seed packets for planting depth and spacing." },
        { id: 5, text: "Water and fertilize: Water your plants regularly, especially during dry periods. Fertilize your plants as needed to provide them with the nutrients they need to grow." },
        { id: 6, text: "Weed and prune: Regularly remove weeds to prevent them from competing with your plants for resources. Prune your plants as needed to maintain their shape and encourage growth." }
      ]
    },
    {
      imageSrc: "writing.jpg",
      activityName: "Writing",
      tags: ["Creating", "Learning", "Expressing", "Communication"],
      description: "Writing is a powerful form of communication and creative expression. Whether you enjoy writing fiction, poetry, essays, or blog posts, writing allows you to explore your thoughts, ideas, and experiences in a unique and personal way. It can be a therapeutic activity that helps you process emotions, clarify your thinking, and develop your voice. From journaling your daily life to crafting intricate stories, writing is a journey of self-discovery and artistic growth.",
      steps: [
        { id: 1, text: "Start with freewriting: Freewriting is a great way to overcome writer's block and get your creative juices flowing. Set a timer for 10-15 minutes and write whatever comes to mind, without worrying about grammar or punctuation." },
        { id: 2, text: "Explore different genres: Try writing in different genres to see which ones you enjoy the most. Experiment with fiction, poetry, creative non-fiction, or even screenwriting." },
        { id: 3, text: "Take writing workshops: Writing workshops can provide valuable feedback on your writing and help you improve your skills." },
        { id: 4, text: "Read widely: Reading is essential for writers. Pay attention to the way other writers craft their stories and use language." },
        { id: 5, text: "Find a writing community: Connect with other writers online or in person. Sharing your work and getting feedback can be a valuable part of the writing process." }
      ]
    },
  ];
  