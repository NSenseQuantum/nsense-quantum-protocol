import { useState, useEffect, useRef } from 'react';
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  onClose?: () => void;
  onEnded?: () => void;
  autoPlay?: boolean;
}

export function VideoPlayer({ src, onClose, onEnded, autoPlay = true }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleLoadedData = () => setIsLoading(false);
    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Preload the video
    video.preload = "auto";

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  return (
    <div className="relative bg-space-dark rounded-lg overflow-hidden border border-quantum-cyan/30">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-space-dark/80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-8 h-8 text-quantum-cyan" />
          </motion.div>
        </div>
      )}
      
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-space-dark/80">
          <p className="text-red-500">Error loading video. Please try again.</p>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        controls
        autoPlay={autoPlay}
        className="w-full h-auto max-h-[80vh]"
        onEnded={onEnded}
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 