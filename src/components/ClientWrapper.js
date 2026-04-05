"use client";

function pseudoRandom(index, salt) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const flakes = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: `${(pseudoRandom(i, 1) * 100).toFixed(2)}%`,
  animationDuration: `${(pseudoRandom(i, 2) * 3 + 2).toFixed(2)}s`,
  animationDelay: `${(pseudoRandom(i, 3) * 2).toFixed(2)}s`,
  opacity: Number((pseudoRandom(i, 4) * 0.5 + 0.2).toFixed(2)),
  size: `${(pseudoRandom(i, 5) * 6 + 4).toFixed(2)}px`
}));

const FallingSnow = () => {
  return (
    <div className="snow-container">
      {flakes.map((flake) => (
        <div 
          key={flake.id} 
          style={{ 
            position: 'absolute', 
            top: '-10px', 
            left: flake.left, 
            width: flake.size, 
            height: flake.size, 
            background: 'white', 
            borderRadius: '50%', 
            opacity: flake.opacity, 
            animation: `fall ${flake.animationDuration} linear ${flake.animationDelay} infinite` 
          }} 
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10px) translateX(0px); }
          50% { transform: translateY(50vh) translateX(20px); }
          100% { transform: translateY(100vh) translateX(-20px); }
        }
      `}</style>
    </div>
  );
};

export function ClientWrapper({ children }) {
  return (
    <div className="app-container">
      <FallingSnow />
      <div className="bg-gradient-circle circle-1"></div>
      <div className="bg-gradient-circle circle-2"></div>
      {children}
    </div>
  );
}
