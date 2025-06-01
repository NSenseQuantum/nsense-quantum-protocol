import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface QuantumVisualizationProps {
  variant?: "orbit" | "cube" | "sphere" | "helix";
  size?: "small" | "medium" | "large";
  interactive?: boolean;
}

export function QuantumVisualization({ 
  variant = "orbit", 
  size = "medium", 
  interactive = true 
}: QuantumVisualizationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64"
  };

  useEffect(() => {
    if (interactive) {
      setRotationSpeed(isHovered ? 2 : 1);
    }
  }, [isHovered, interactive]);

  const OrbitVisualization = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central quantum core */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-r from-quantum-cyan to-quantum-magenta rounded-full shadow-lg"
        style={{
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.4)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          duration: 2 / rotationSpeed,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Orbital rings */}
      {[1, 2, 3].map((ring, index) => (
        <motion.div
          key={ring}
          className="absolute border border-quantum-cyan/30 rounded-full"
          style={{
            width: `${60 + index * 40}px`,
            height: `${60 + index * 40}px`,
            transformStyle: "preserve-3d"
          }}
          animate={{
            rotateX: 45 + index * 15,
            rotateY: 360,
          }}
          transition={{
            duration: (3 + index) / rotationSpeed,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Quantum particles */}
          {[0, 1, 2].map((particle) => (
            <motion.div
              key={particle}
              className="absolute w-2 h-2 bg-quantum-green rounded-full"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-4px",
                marginLeft: "-4px",
                boxShadow: "0 0 8px rgba(0, 255, 0, 0.8)"
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: (2 + particle * 0.5) / rotationSpeed,
                repeat: Infinity,
                ease: "linear",
                delay: particle * 0.3
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );

  const CubeVisualization = () => (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: 360,
          rotateY: 360,
        }}
        transition={{
          duration: 8 / rotationSpeed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Cube faces */}
        {[
          { transform: "rotateY(0deg) translateZ(24px)", bg: "quantum-cyan" },
          { transform: "rotateY(90deg) translateZ(24px)", bg: "quantum-magenta" },
          { transform: "rotateY(180deg) translateZ(24px)", bg: "quantum-green" },
          { transform: "rotateY(-90deg) translateZ(24px)", bg: "neon-purple" },
          { transform: "rotateX(90deg) translateZ(24px)", bg: "quantum-cyan" },
          { transform: "rotateX(-90deg) translateZ(24px)", bg: "quantum-magenta" },
        ].map((face, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 bg-gradient-to-br from-${face.bg}/20 to-${face.bg}/40 border border-${face.bg}/60`}
            style={{
              transform: face.transform,
              boxShadow: `0 0 20px rgba(0, 255, 255, 0.3)`
            }}
          />
        ))}
      </motion.div>
    </div>
  );

  const SphereVisualization = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-24 h-24 rounded-full bg-gradient-to-r from-quantum-cyan/20 to-quantum-magenta/20 border border-quantum-cyan/40"
        style={{
          boxShadow: "0 0 40px rgba(0, 255, 255, 0.4), inset 0 0 40px rgba(255, 0, 255, 0.2)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: 360,
        }}
        transition={{
          duration: 4 / rotationSpeed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Energy waves */}
        {[0, 1, 2, 3].map((wave) => (
          <motion.div
            key={wave}
            className="absolute inset-0 rounded-full border border-quantum-green/30"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2 / rotationSpeed,
              repeat: Infinity,
              delay: wave * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );

  const HelixVisualization = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        {[0, 1].map((strand) => (
          <motion.div
            key={strand}
            className="absolute"
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: 6 / rotationSpeed,
              repeat: Infinity,
              ease: "linear",
              delay: strand * 0.5
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 rounded-full ${
                  strand === 0 ? 'bg-quantum-cyan' : 'bg-quantum-magenta'
                }`}
                style={{
                  transform: `rotateY(${i * 30 + strand * 15}deg) translateX(30px) translateY(${i * 4 - 24}px)`,
                  boxShadow: `0 0 8px ${strand === 0 ? 'rgba(0, 255, 255, 0.8)' : 'rgba(255, 0, 255, 0.8)'}`
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderVisualization = () => {
    switch (variant) {
      case "cube":
        return <CubeVisualization />;
      case "sphere":
        return <SphereVisualization />;
      case "helix":
        return <HelixVisualization />;
      default:
        return <OrbitVisualization />;
    }
  };

  return (
    <div
      className={`${sizeClasses[size]} ${interactive ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      {renderVisualization()}
    </div>
  );
}