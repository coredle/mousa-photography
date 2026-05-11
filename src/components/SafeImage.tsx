"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export default function SafeImage({ 
  src, 
  alt, 
  ...props 
}: SafeImageProps) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f5f4',
        color: '#999',
        width: '100%',
        height: '100%',
        padding: '1rem',
        textAlign: 'center'
      }}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          style={{ width: '48px', height: '48px', marginBottom: '8px', opacity: 0.2 }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4 }}>
          Photo Unavailable
        </span>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#f8f5f4' }}>
      <Image
        {...props}
        src={src}
        alt={alt}
        onError={() => setError(true)}
      />
    </div>
  );
}
