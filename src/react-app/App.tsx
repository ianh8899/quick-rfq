// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://vite.dev" target="_blank" className="group">
            <img 
              src={viteLogo} 
              className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#646cffaa]" 
              alt="Vite logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank" className="group">
            <img 
              src={reactLogo} 
              className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin" 
              alt="React logo" 
            />
          </a>
          <a href="https://hono.dev/" target="_blank" className="group">
            <img 
              src={honoLogo} 
              className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#f6821faa]" 
              alt="Hono logo" 
            />
          </a>
          <a href="https://workers.cloudflare.com/" target="_blank" className="group">
            <img
              src={cloudflareLogo}
              className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#f6821faa]"
              alt="Cloudflare logo"
            />
          </a>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
          Vite + React + Hono + Cloudflare + Tailwind
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            aria-label="increment"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
          >
            count is {count}
          </button>
          <p className="text-gray-600 dark:text-gray-300">
            Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <button
            onClick={() => {
              fetch("/api/")
                .then((res) => res.json() as Promise<{ name: string }>)
                .then((data) => setName(data.name));
            }}
            aria-label="get name"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
          >
            Name from API is: {name}
          </button>
          <p className="text-gray-600 dark:text-gray-300">
            Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">worker/index.ts</code> to change the name
          </p>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400">
          Click on the logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
