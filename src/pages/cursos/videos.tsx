import React, { useRef, useEffect, useState } from 'react';

interface VideoCardProps {
  src: string;
  poster?: string;
  backgroundImage?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  showPlayIcon?: boolean;
}

export function VideoCard({
  src,
  poster,
  backgroundImage,
  width = '100%',
  height = '100%',
  borderRadius = '12px',
  showPlayIcon = true,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      const video = videoRef.current
      const isFull = document.fullscreenElement === video
      setIsFullscreen(isFull)
      if (!isFull && video) video.pause()
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const handleVideoClick = async () => {
    const video = videoRef.current
    if (video) {
      await video.play()
      if (video.requestFullscreen) {
        await video.requestFullscreen()
      }
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        controls={isFullscreen}
        onClick={handleVideoClick}
        poster={poster}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: isFullscreen ? 'none' : 'blur(3px)',
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
          borderRadius,
        }}
      />
      {showPlayIcon && !isFullscreen && (
        <img
          src="/arrow-video.png"
          alt="Play"
          style={{
            position: 'absolute',
            width: '75px',
            height: '75px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};
