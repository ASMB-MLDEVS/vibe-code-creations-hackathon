
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    const createRain = () => {
      for (let i = 0; i < columns; i++) {
        const drop = document.createElement('div');
        drop.className = 'matrix-char';
        drop.style.left = `${i * 20}px`;
        drop.style.animationDelay = `${Math.random() * 20}s`;
        drop.style.animationDuration = `${10 + Math.random() * 20}s`;
        drop.textContent = characters[Math.floor(Math.random() * characters.length)];
        container.appendChild(drop);
      }
    };

    createRain();

    // Mac-themed code snippets with logical progression
    const macCodeSnippets = [
      // Terminal commands
      '$ brew install nodejs',
      '$ npm create react-app',
      '$ code . && npm start',
      '$ git init && git add .',
      '$ docker-compose up -d',
      
      // JavaScript/React
      'const [state, setState] = useState()',
      'useEffect(() => { ... }, [])',
      'export default function App() {',
      'await fetch("/api/data")',
      'const response = await api.get()',
      
      // Python/AI
      'import tensorflow as tf',
      'model = tf.keras.Sequential()',
      'df = pd.read_csv("data.csv")',
      'numpy.array(predictions)',
      'sklearn.train_test_split()',
      
      // Web3/Blockchain
      'contract MyToken is ERC20 {',
      'web3.eth.getBalance(address)',
      'const provider = new Web3Provider',
      'await contract.transfer(to, amount)',
      
      // Database/Backend
      'SELECT * FROM users WHERE',
      'CREATE TABLE hackathon_teams',
      'app.post("/api/submit", async',
      'const db = await mongoose.connect',
      
      // DevOps/Cloud
      'FROM node:18-alpine',
      'COPY package*.json ./',
      'kubectl apply -f deployment.yaml',
      'terraform plan && terraform apply',
      
      // Fun hackathon-themed
      '// TODO: Win this hackathon!',
      'console.log("Building the future")',
      'if (innovation) { return prize; }',
      'function stormTheCode() { ... }',
      '// 6 hours to change the world',
      'export const victory = true;'
    ];

    const createCodeSnippets = () => {
      for (let i = 0; i < 20; i++) {
        const snippet = document.createElement('div');
        snippet.className = 'code-snippet animate-float';
        snippet.style.left = `${Math.random() * 100}%`;
        snippet.style.top = `${Math.random() * 100}%`;
        snippet.style.animationDelay = `${Math.random() * 6}s`;
        snippet.style.fontSize = `${10 + Math.random() * 4}px`;
        snippet.style.opacity = `${0.1 + Math.random() * 0.2}`;
        
        // Use different green shades
        const greenShades = ['#00FF00', '#22C55E', '#39FF14', '#0FFF50', '#00CC00'];
        snippet.style.color = greenShades[Math.floor(Math.random() * greenShades.length)];
        
        snippet.textContent = macCodeSnippets[Math.floor(Math.random() * macCodeSnippets.length)];
        container.appendChild(snippet);
      }
    };

    createCodeSnippets();

    // Add floating tech icons/symbols
    const techSymbols = ['⚡', '🚀', '💻', '🔥', '⭐', '💡', '🎯', '🏆', '⚙️', '🌟'];
    
    const createTechSymbols = () => {
      for (let i = 0; i < 10; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'code-snippet animate-float';
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
        symbol.style.animationDelay = `${Math.random() * 8}s`;
        symbol.style.fontSize = `${16 + Math.random() * 8}px`;
        symbol.style.opacity = `${0.05 + Math.random() * 0.1}`;
        symbol.style.color = '#00FF00';
        symbol.textContent = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        container.appendChild(symbol);
      }
    };

    createTechSymbols();

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
};

export default MatrixRain;
