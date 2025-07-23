# tofo
A beautifully designed, modern todo application built with TypeScript and vanilla JavaScript. Features a glassmorphism design with smooth animations and a delightful user experience.

Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

Installation

- Clone the repository:

  - git clone https://github.com/yourusername/todo-app.git  
  - cd todo-app

- Install dependencies:  


  - npm create vite@latest  
  - npm install

- Start the development server:

  - npm run dev

- Open your browser and navigate to http://localhost:5173

  Structure
  <pre lang="markdown"> ```bash todo-app/ |── node_modules ├── public │ └── vite.svg ├── index.html # Main HTML file ├── .gitignore ├── src/ │ ├── main.ts # TypeScript application logic │ ├── style.css # Styling and animations │ ├── typescript.svg │ └── vite-env.d.ts ├── package.json # Project dependencies ├── package-lock.json ├── tsconfig.json └── README.md # Project documentation ``` </pre>
todo-app/  
|── node_modules  
├── public  
│   └── vite.svg  
├── index.html          # Main HTML file  
├── .gitignore  
├── src/
│   ├── main.ts         # TypeScript application logic  
│   ├──  style.css       # Styling and animations  
|   ├──  typescript.svg  
|   └── vite-env.d.ts  
├── package.json        # Project dependencies  
├── package-lock.json   
├── tsconfig.json    
└── README.md          # Project documentation  

Todo Management

- Add new tasks with the input field
- Mark tasks as completed with custom checkboxes
- Delete tasks with the stylized delete button
- Visual feedback for completed tasks (strikethrough effect)
