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
    {
      imageSrc: "reading.jpg",
      activityName: "Reading",
      tags: ["Books", "Learning", "Relaxing", "Exploring"],
      description: "Reading is a captivating journey that transports you to different worlds, times, and perspectives. Whether you enjoy fiction, non-fiction, poetry, or graphic novels, books offer endless opportunities for entertainment, education, and personal growth. Reading improves vocabulary, enhances empathy, reduces stress, and stimulates your imagination. It can be a solitary activity for quiet reflection or a social experience through book clubs and literary discussions. From cozy mysteries to thought-provoking philosophy, there's a genre for every mood and interest.",
      steps: [
        { id: 1, text: "Find your reading style: Experiment with different genres to discover what captures your interest. Don't feel obligated to finish books you're not enjoying - it's okay to move on to something that resonates better with you." },
        { id: 2, text: "Create a reading space: Designate a comfortable spot with good lighting for reading. This could be a cozy corner with pillows, a dedicated reading chair, or even a hammock in your yard." },
        { id: 3, text: "Join a book club: Local libraries, bookstores, or online communities often host book clubs. This is a great way to discover new titles and discuss your thoughts with others." },
        { id: 4, text: "Use technology: Try e-readers or audiobooks if traditional reading is challenging. Many libraries offer free digital borrowing services." },
        { id: 5, text: "Set realistic goals: Start with small, achievable reading goals, like 20 minutes per day or one book per month." },
        { id: 6, text: "Track your reading: Keep a journal or use an app to record books you've read, want to read, and your thoughts about them." }
      ]
    },
    {
      imageSrc: "boardgames.jpg",
      activityName: "Board Gaming",
      tags: ["Games", "Strategy", "Socializing", "Competitions"],
      description: "Board gaming is a dynamic hobby that combines strategic thinking, social interaction, and friendly competition. From classic family games to complex strategy titles, the modern board game renaissance offers something for everyone. Playing board games helps develop critical thinking, planning skills, and the ability to adapt to changing circumstances. It's also a fantastic way to connect with friends and family in an engaging, screen-free environment. Whether you're solving mysteries, building civilizations, or racing to victory, board games create memorable experiences and lasting connections.",
      steps: [
        { id: 1, text: "Start with gateway games: Begin with accessible games like Ticket to Ride, Catan, or Pandemic that are easy to learn but offer depth of play." },
        { id: 2, text: "Visit a board game café: Many cities have cafés with libraries of games and staff who can teach you how to play. This is a low-investment way to try different games." },
        { id: 3, text: "Find your gaming group: Invite friends for a game night or look for local gaming meetups. Having regular gaming partners enhances the experience." },
        { id: 4, text: "Learn from videos: Watch tutorial videos online before playing a new game. This can make learning rules much easier." },
        { id: 5, text: "Expand your collection thoughtfully: Rather than buying many games at once, select a few that your group enjoys and play them thoroughly before adding more." },
        { id: 6, text: "Organize regular game nights: Set up a consistent schedule for gaming sessions to make it a regular part of your social calendar." }
      ]
    },
    {
      imageSrc: "travel.jpg",
      activityName: "Travel Planning",
      tags: ["Travels", "Exploring", "Learning", "Adventuring"],
      description: "Travel planning is an exciting activity that combines research, organization, and anticipation. Whether you're mapping out a weekend getaway or a round-the-world adventure, the process of planning a trip can be almost as rewarding as the journey itself. Travel planning involves discovering new destinations, learning about different cultures, creating itineraries, and finding the best experiences within your budget. It's a skill that improves with each trip, helping you become more confident and resourceful. The research phase expands your knowledge of geography, history, and global cultures, while the actual planning develops your organizational abilities.",
      steps: [
        { id: 1, text: "Create a travel bucket list: Start by brainstorming destinations you've always wanted to visit. Consider different types of experiences - urban explorations, nature adventures, cultural immersions, etc." },
        { id: 2, text: "Research one destination at a time: Once you've selected a destination, dive deep into research about its attractions, culture, cuisine, local customs, and practical matters like weather and transportation." },
        { id: 3, text: "Build a flexible itinerary: Plan your major activities while leaving room for spontaneity. Create a day-by-day outline that balances sightseeing with relaxation time." },
        { id: 4, text: "Make a budget: Research costs for accommodations, transportation, food, activities, and souvenirs. Add extra for unexpected expenses." },
        { id: 5, text: "Organize your documents: Create digital and physical folders for reservations, identification, emergency contacts, and important information." },
        { id: 6, text: "Learn travel hacking: Study techniques for finding deals on flights, accommodations, and activities to maximize your travel budget." }
      ]
    },
    {
      imageSrc: "running.jpg",
      activityName: "Running",
      tags: ["Sports", "Exercising", "Competitions", "Nature"],
      description: "Running is a versatile and accessible form of exercise that offers numerous physical and mental health benefits. From casual jogging in your neighborhood to training for marathons, running can be adapted to any fitness level and goal. It improves cardiovascular health, builds endurance, strengthens muscles, and helps maintain a healthy weight. Beyond the physical benefits, running releases endorphins that boost mood, reduce stress, and enhance mental clarity. It can be a solitary activity for personal reflection or a social experience through running clubs and races. Whether you prefer urban streets, forested trails, or track workouts, running connects you with your environment while challenging your limits.",
      steps: [
        { id: 1, text: "Get proper footwear: Visit a specialty running store for a gait analysis and recommendations for shoes that fit your running style and foot shape." },
        { id: 2, text: "Start with a run/walk approach: Begin with intervals of running and walking. Gradually increase the running portions as your fitness improves." },
        { id: 3, text: "Follow a structured plan: Use a beginner-friendly program like Couch to 5K to build your endurance systematically and avoid injury." },
        { id: 4, text: "Join a running group: Local running stores or community centers often host group runs for different levels. These provide motivation, safety, and social connection." },
        { id: 5, text: "Track your progress: Use a running app or simple journal to log your runs. Seeing your improvement over time can be highly motivating." },
        { id: 6, text: "Sign up for a race: Having a goal event can provide structure to your training. Start with a 5K and progress to longer distances if interested." }
      ]
    },
    {
      imageSrc: "music.jpg",
      activityName: "Music Production",
      tags: ["Music", "Technology", "Creating", "Expressing"],
      description: "Music production is a creative process that combines technical skills with artistic expression to create original compositions or recordings. With today's technology, anyone with a computer can explore this rewarding activity. Music production encompasses a range of tasks, from composing melodies and writing lyrics to recording instruments, programming beats, mixing tracks, and finalizing a polished sound. It's a continuous learning journey that develops your ear for music, technical abilities, and creative voice. Whether you're creating tracks for personal enjoyment, sharing with friends, or pursuing a career in music, production offers a fulfilling way to channel your musical ideas into tangible creations.",
      steps: [
        { id: 1, text: "Start with basic software: Begin with an entry-level Digital Audio Workstation (DAW) like GarageBand, Audacity, or the free version of FL Studio to learn the fundamentals." },
        { id: 2, text: "Learn music theory basics: Understanding scales, chords, and rhythm will help you create more coherent musical pieces. Many free resources exist online." },
        { id: 3, text: "Experiment with samples and loops: Most DAWs come with pre-recorded loops and samples that you can arrange to create your first tracks while learning the software." },
        { id: 4, text: "Practice active listening: Study songs you love, paying attention to their structure, instrumentation, and production techniques. Try to recreate elements you enjoy." },
        { id: 5, text: "Join online communities: Platforms like Reddit, Discord, and specialized forums have supportive communities of producers who share knowledge and feedback." },
        { id: 6, text: "Create finished pieces: Rather than accumulating unfinished projects, focus on completing tracks, even if they're simple. The process of finishing teaches valuable skills." }
      ]
    },
    {
      imageSrc: "photography.jpg",
      activityName: "Photography",
      tags: ["Art", "Technology", "Exploring", "Creating"],
      description: "Photography is a versatile art form that allows you to capture moments, express your unique perspective, and document the world around you. With cameras now accessible on most smartphones, anyone can begin exploring photography without significant investment. As you develop your skills, you'll learn to work with light, composition, timing, and subject matter to create compelling images. Photography encourages mindfulness and observation, helping you notice details and beauty in everyday scenes. It can be practiced anywhere—from your backyard to exotic destinations—and in countless styles, from landscapes and portraits to street photography and abstract art. Whether you're preserving memories or creating artistic expressions, photography offers endless opportunities for growth and creativity.",
      steps: [
        { id: 1, text: "Master your equipment: Whether using a smartphone or dedicated camera, learn its basic functions and capabilities. Understand concepts like focus, exposure, and shooting modes." },
        { id: 2, text: "Study composition: Learn fundamental principles like the rule of thirds, leading lines, framing, and balance to create more appealing images." },
        { id: 3, text: "Explore different genres: Try various types of photography—landscapes, portraits, macro, street, etc.—to discover what resonates with you." },
        { id: 4, text: "Practice regularly: Set small projects for yourself, like a photo a day or weekend photo walks. Consistent practice is key to improvement." },
        { id: 5, text: "Seek constructive feedback: Share your work in online communities or local camera clubs where you can receive helpful critique." },
        { id: 6, text: "Learn basic editing: Familiarize yourself with simple editing techniques to enhance your images. Free software like GIMP or apps like Snapseed are good starting points." }
      ]
    },
    {
      imageSrc: "chess.jpg",
      activityName: "Chess",
      tags: ["Games", "Strategy", "Competitions", "Learning"],
      description: "Chess is a timeless strategy game that combines intellectual challenge with competitive spirit. As one of the world's oldest and most respected games, chess offers a perfect balance of accessibility and depth—the rules can be learned in minutes, but mastery takes a lifetime. Playing chess develops critical thinking, problem-solving skills, pattern recognition, and the ability to plan several moves ahead. It also teaches valuable life lessons about decision-making, consequences, and learning from mistakes. Whether played casually with friends, in clubs, in tournaments, or online, chess provides a mental workout that keeps your mind sharp while connecting you with a global community of players from all walks of life.",
      steps: [
        { id: 1, text: "Learn the basic rules: Understand how each piece moves and the objective of the game. Many websites and apps offer interactive tutorials for beginners." },
        { id: 2, text: "Practice with puzzles: Chess puzzles (also called tactics) help you recognize patterns and develop your calculation skills. Start with simple puzzles and progress to more complex ones." },
        { id: 3, text: "Study fundamental principles: Learn about concepts like controlling the center, developing pieces, king safety, and pawn structure." },
        { id: 4, text: "Play regularly: Find opponents at your level through online platforms, local chess clubs, or among friends and family." },
        { id: 5, text: "Analyze your games: Review your completed games to understand your mistakes and identify areas for improvement. Many online chess platforms offer this feature." },
        { id: 6, text: "Read about chess: Explore books or online resources about strategy, famous games, and chess history to deepen your appreciation and understanding of the game." }
      ]
    },
    {
      imageSrc: "fashion.jpg",
      activityName: "Fashion Design",
      tags: ["Fashion", "Creating", "Expressing", "Art"],
      description: "Fashion design is a creative discipline that allows you to express your aesthetic vision through clothing and accessories. From sketching concepts and selecting fabrics to construction and final presentation, fashion design is a multifaceted process that combines artistic inspiration with practical considerations. It encourages you to develop your unique style while considering functionality, sustainability, and cultural influences. Whether you're upcycling old garments, creating costumes, or designing everyday wear, fashion design connects you to a rich history of self-expression through clothing. As you develop your skills, you'll gain a deeper appreciation for craftsmanship, materials, and the power of personal style to communicate identity and values.",
      steps: [
        { id: 1, text: "Develop your eye: Study fashion magazines, museum collections, runway shows, and street style to understand different aesthetics and how clothing is constructed." },
        { id: 2, text: "Learn basic sketching: Practice drawing simple garment silhouettes and gradually add details. Fashion sketching has its own conventions that you can learn through online tutorials." },
        { id: 3, text: "Understand fabrics: Visit fabric stores to touch and examine different materials. Learn about their properties, how they drape, and which are easier for beginners to work with." },
        { id: 4, text: "Master basic sewing: Take an introductory sewing class or follow online tutorials to learn essential stitches, how to use a pattern, and basic garment construction." },
        { id: 5, text: "Start with simple projects: Begin with straightforward items like tote bags, pillowcases, or simple skirts before attempting more complex garments." },
        { id: 6, text: "Create a mood board: Collect images, color swatches, fabric samples, and inspiration that reflect your personal style or a specific design concept you want to explore." }
      ]
    },
    {
      imageSrc: "cinema.jpg",
      activityName: "Film Appreciation",
      tags: ["Movies", "Art", "Learning", "Relaxing"],
      description: "Film appreciation is the thoughtful study and enjoyment of cinema as an art form and cultural phenomenon. It involves watching movies with a critical eye, understanding different genres and movements, recognizing the techniques of great directors, and analyzing how films reflect and shape society. This hobby enriches your viewing experience by helping you notice details in storytelling, cinematography, acting, sound design, and editing that casual viewers might miss. Film appreciation can be pursued individually through personal viewing and research, or socially through film clubs, festival attendance, and discussions. As you develop this interest, you'll build a mental library of influential works, recognize references and homages in new films, and gain insight into different cultures and historical periods through their cinematic expression.",
      steps: [
        { id: 1, text: "Watch essential classics: Begin with widely recognized masterpieces from different eras and countries. Many 'greatest films' lists can provide a starting point." },
        { id: 2, text: "Learn basic film language: Understand fundamental concepts like mise-en-scène, montage, genre, and narrative structure through books or online resources." },
        { id: 3, text: "Explore one director or movement: Choose a filmmaker or film movement (like French New Wave or German Expressionism) and watch several representative works." },
        { id: 4, text: "Keep a film journal: Record your thoughts, observations, and questions about each film you watch. Note elements that stood out to you." },
        { id: 5, text: "Join or start a film club: Meet regularly with others to watch and discuss selected films, gaining new perspectives beyond your own." },
        { id: 6, text: "Attend film festivals: Local film festivals offer opportunities to see new and independent works, often with director Q&As and special events." }
      ]
    }
  ];
  