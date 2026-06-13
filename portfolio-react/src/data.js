

export const projectData = [
  {
    id: 20,
    categories: ["web"],
    title: "Better-Call-Appointment-Scheduling",
    img: "/images/sd-4.png",
    github: "https://github.com/SIDD58/Better-Call-Appointment-Scheduling",
    technologies: "React, PostgreSQL, Supabase, Supabase Edge Functions, Deno, Meta WhatsApp Cloud API, Vercel",
    objective: "Built a full-stack appointment management platform using React, Supabase, and PostgreSQL with an event-driven architecture that automated appointment-triggered WhatsApp customer notifications.",
    result: "Implemented Supabase Webhooks, Edge Functions (Deno), and Meta WhatsApp Cloud API to automatically process appointment events and send secure real-time confirmation messages without manual intervention."
  },

  {
    id: 21,
    categories: ["ai","py"],
    title: "Customer Support Automation",
    img: "/images/ai-6.png",
    github: "https://github.com/SIDD58/Customer-Support-Automation",
    technologies: "Langsmith , Langgraph , Redis, Celery ,Docker, FAST API, pydantic",
    objective: " Architected a Lang Graph state machine with specialized agent nodes and self correction loop , and developed a non-blocking API using Async IO pipeline and Celery offloading LLM processing to background worker.",
    result:"Rate Limit of 2 requests per minute, 40% reduction in Hallucination rate on dataset and reduced iterative retries, reduced response time using Async programming and fixed business rule violations. "

  },
  {
    id: 19,
    categories: ["ai","py"],
    title: "Product-Recommender",
    img: "/images/ai-7.png",
    github: "https://github.com/SIDD58/Product-Recommender",
    technologies: "AsynIO , Langgraph, openai , Redis ,Docker, NumPy, FAST API, pydantic",
    objective: ": Built a semantic search tool that maps user intent to products using vector embedding and keyword matching.",
    result: "async Redis caching layer storing vector embeddings , Fault tolerant 100% service uptime during external API outages/rate-limiting , Optimized ranking logic using NumPy and built a deterministic AI explanation module"

  },
  {
    id: 18,
    categories: ["ai","py"],
    title: "Multi-Agent RAG Chatbot with Hybrid Retrieval (Vector + SQL) ",
    img: "/images/ai-8.png",
    github: "https://github.com/SIDD58/AgenticChatbot",
    technologies: "LangGraph, LangSmith, ChromaDB, Docling, SQLite, Python",
    objective: "Built a multi-agent RAG chatbot leveraging Docling, ChromaDB, and SQLite to answer queries across unstructured policy documents and structured customer ticket data.",
    result: "Implemented hybrid retrieval and LLM-based query routing to dynamically select vector search or SQL execution, improving response accuracy across structured and unstructured knowledge sources."
  },
      {
    id: 1,
    categories: ["ai","py"],
    title: "AI Job Resume Matcher",
    img: "/images/ai-5.png",
    github: "https://github.com/SIDD58/ai-job-resume-matcher",
    technologies: "FAST API, Pytest, SqlAlchemy, openai, langchain, Slack, pydantic",
    objective: "Develop an AI-powered job resume matcher that compares job descriptions with candidate resumes to find the best matches.",
    result: "The system efficiently identifies and ranks projects based on their Job descriptions."
  },
  {
    id: 2,
    categories: ["data"],
    title: "Driver Revenue Optimization",
    img: "/images/pic-python.PNG",
    github: "https://github.com/SIDD58/DriverRevenueOptimization",
    technologies: "Python (Scipy, Matplotlib, Pandas, Seaborn)",
    objective: "Maximize driver revenue by analyzing payment methods.",
    result: "Hypothesis testing and analysis revealed credit card payments could lead to higher driver earnings."
  },
  {
    id: 3,
    categories: ["data"],
    title: "SQL Skip the Dishes",
    img: "/images/pic-sql.PNG",
    github: "https://github.com/SIDD58/SQL-Skip-the-Dishes",
    technologies: "SQL (SQL Server)",
    objective: "Analyze customer behavior and spending patterns such as customer preferences, visit frequency, and membership impact.",
    result: "Identified key products driving Gold membership sign-ups and the most popular items by loyalty points."
  },
  {
    id: 4,
    categories: ["data"],
    title: "Patient Waiting Listing",
    img: "/images/pic-powerbi.PNG",
    github: "https://github.com/SIDD58/Patient-Waiting-List",
    technologies: "Power BI (Power Query, DAX, Filter, Slicer)",
    objective: "Analyze patient waiting list data to optimize resource allocation based on age, specialty, and patient categories.",
    result: "Identified trends such as higher outpatient numbers and specialty-specific waitlists to enable data-driven decisions."
  },
  {
    id: 5,
    categories: ["data"],
    title: "Geospatial Analysis Congo Mines",
    img: "/images/pic-python-geo.PNG",
    github: "https://github.com/SIDD58/geospatial-analysis/blob/main/Geo-spatial-Analysis%20Congo%20Mines.ipynb",
    technologies: "Python (Geopandas, Shapely)",
    objective: "Utilize spatial joins, CRS, spatial relationships, operations, and visualization to analyze geographic mining data.",
    result: ""
  },
  {
    id: 6,
    categories: ["ai","py"],
    title: "Captcha Recognition using CNN",
    img: "/images/ai-1.PNG",
    github: "https://github.com/SIDD58/Captcha-recognition-using-CNN",
    technologies: "Python (Tensorflow, Matplotlib, Pandas)",
    objective: "Implement image processing and machine learning techniques for CAPTCHA recognition.",
    result: "CNN model achieved around 90% accuracy in recognizing captchas."
  },
  {
    id: 7,
    categories: ["ai","py"],
    title: "Face Mask Detection using CNN",
    img: "/images/ai-2.PNG",
    github: "https://siddharthsamber94.medium.com/live-mask-detection-using-convolutional-neural-network-bb9a2583a5c5",
    technologies: "Python (OpenCV, TensorFlow, Matplotlib)",
    objective: "Develop a live mask detection system using CNN to classify people wearing or not wearing masks in real time.",
    result: "Achieved over 95% accuracy with real-time webcam mask detection."
  },
  {
    id: 8,
    categories: ["ai","py"],
    title: "Tic Tac Toe using Min Max",
    img: "/images/ai-3.PNG",
    github: "https://github.com/SIDD58/Minor-Projects-/tree/main/Final%20Tic%20Tac%20Toe",
    technologies: "Python (Pygame), MinMax Algorithm, Alpha-Beta Pruning",
    objective: "Design a Tic Tac Toe game implementing MinMax AI logic.",
    result: "Guaranteed optimal gameplay with alpha-beta pruning making the algorithm twice as fast."
  },
  {
    id: 9,
    categories: ["ai","py"],
    title: "Neural Network Visualizer Web App",
    img: "/images/ai-4.PNG",
    github: "https://github.com/SIDD58/Minor-Projects-/blob/main/Neural%20Network%20Visualizer%20Web%20App.pdf",
    technologies: "Python (Flask, Streamlit, Tensorflow, Matplotlib)",
    objective: "Create a web application to visualize neural network structure and behavior using MNIST dataset.",
    result: "Built an interactive neural network visualization tool with a user-friendly interface."
  },
  {
    id: 10,
    categories: ["web","py"],
    title: "Find Your Guide",
    img: "/images/sd1.PNG",
    github: "https://github.com/AnuragQ/FindYourGuide",
    technologies: "Python (Django), HTML, CSS",
    objective: "Develop a platform connecting tourists with guides with authentication and review features.",
    result: "Implemented role-based access, review management, sorting, and tracking recently viewed offerings."
  },
  {
    id: 11,
    categories: ["web","py"],
    title: "Pricepage Builder Pro",
    img: "/images/sd2.PNG",
    github: "https://github.com/AnuragQ/PricingPageBuilderPro-SaaS-Pricing-Made-Simple",
    technologies: "Python (Django), React",
    objective: "Simplify creation of customizable SaaS pricing pages with payment integration.",
    result: "Built customizable pricing pages with Stripe integration, Firebase authentication, and A/B testing support."
  },
  {
    id: 12,
    categories: ["ai","py"],
    title: "Sudoku Solver Game",
    img: "/images/sd3.PNG",
    github: "https://github.com/SIDD58/Sudoku-Game-Solver",
    technologies: "Python (Pygame)",
    objective: "Create a Sudoku solver game with manual input and automated solving using backtracking.",
    result: "Interactive GUI with visualized solving process and user-friendly puzzle interaction."
  },
  {
    id: 13,
    categories: ["web"],
    title: "Netflix Quiz App",
    img: "/images/w1.PNG",
    github: "https://github.com/SIDD58/Netflix-Quiz-App",
    technologies: "MongoDB, Express, Angular, Node",
    objective: "Build a Netflix-themed timed quiz application.",
    result: "Implemented scoring, progress tracking, timer, and result evaluation interface."
  },
  {
    id: 14,
    categories: ["web"],
    title: "Article CRUD MEAN",
    img: "/images/w2.PNG",
    github: "https://github.com/SIDD58/Article-CRUD-MEAN",
    technologies: "MongoDB, Angular, Express, Node",
    objective: "Create a MEAN stack application for managing articles with CRUD operations.",
    result: "Developed responsive article management system integrated with MongoDB."
  },
  {
    id: 15,
    categories: ["web"],
    title: "REST API",
    img: "/images/w3.PNG",
    github: "https://github.com/SIDD58/Delivery-Rest-Api",
    technologies: "Docker, Jenkins, Google Cloud Run, MongoDB Atlas, Nginx, Express, Jest",
    objective: "Develop a scalable REST API with CI/CD pipeline and cloud deployment.",
    result: "Successfully deployed a containerized API with automated testing and CI/CD workflow."
  },
  {
    id: 16,
    categories: ["sec"],
    title: "Cyber Security Labs / Projects",
    img: "/images/cs1.png",
    github: "https://github.com/SIDD58/cyber-security-labs",
    technologies: "Wireshark, iptables, Python sockets, Scapy, OpenSSL, 8086 Assembly",
    objective: "Explore networking and security concepts including sniffing, spoofing, encryption, and protocol analysis.",
    result: ""
  },
  {
    id: 17,
    categories: ["web"],
    title: "Improv Website",
    img: "/images/w4.png",
    github: "https://github.com/SIDD58/improv",
    technologies: "React, Socket.io, Express, Google Apps Script, MongoDB, Docker",
    objective: "Build an interactive improv community platform with real-time games and authentication.",
    result: "Enabled SSO authentication, multiplayer interactions, mailing list integration, and event management."
  }
];


// export const projectData = [
//   {
//     id: 1,
//     categories: 'AI',
//     title: 'AI Job Resume Matcher',
//     img: '/images/ai-1.PNG',
//     github: 'https://github.com/SIDD58/ai-job-resume-matcher',
//     technologies: 'FAST API, Pytest, SqlAlchemy, openai, langchain, Slack, pydantic',
//     objective: 'Develop an AI-powered job resume matcher that compares job descriptions with candidate resumes to find the best matches.',
//     result: 'The system efficiently identifies and ranks projects based on their Job descriptions.'
//   },
//   {
//     id: 2,
//     categories: 'Web-Dev',
//     title: 'Next Project Name',
//     img: '/images/web1.jpg',
//     github: 'https://github.com',
//     technologies: 'React, Node.js, MongoDB',
//     objective: 'Create a full-stack dashboard...',
//     result: 'Improved user workflow by 40%.'
//   }
// ]